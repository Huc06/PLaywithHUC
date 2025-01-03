import React, { useState, useEffect, useRef } from "react";
import { Message, ChatProps } from "../types/profile";
import { Send } from "lucide-react";

export function Chat({ username }: ChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputMessage.trim() === "") return;

    const newMessage: Message = {
      id: Date.now().toString(),
      sender: "You",
      content: inputMessage,
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    setInputMessage("");

    // Phản hồi tùy chỉnh
    const generateResponse = (userMessage: string): string[] => {
      if (userMessage.includes("Hello")) {
        return ["Hi there! How can I assist you today?"];
      } else if (
        userMessage.includes("You can play game Zone Nine with me?💕")
      ) {
        return ["Alright, but don’t blame me if I’m too good!"];
      } else if (userMessage.includes("ok")) {
        return ["Alright, joining now!"];
      }
      return ["Thanks for your message!", "I'll respond soon."];
    };

    const responses = generateResponse(inputMessage).map((content, index) => ({
      id: (Date.now() + index + 1).toString(),
      sender: username,
      content,
      timestamp: new Date(),
    }));

    responses.forEach((response, index) => {
      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, response]);
      }, (index + 1) * 1000); // Delay mỗi tin nhắn thêm 1 giây
    });
  };

  return (
    <div className="flex flex-col h-full max-h-[500px] max-w-[500px]">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === "You" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs lg:max-w-md xl:max-w-lg px-4 py-2 rounded-lg ${
                message.sender === "You"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-white"
              }`}
            >
              <p className="font-bold">{message.sender}</p>
              <p>{message.content}</p>
              <p className="text-xs text-gray-300 mt-1">
                {message.timestamp.toLocaleTimeString()}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSendMessage} className="mt-4 flex">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-l-lg focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors "
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
}
