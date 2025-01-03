import React, { useState } from "react";
import {
  type BaseError,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { GamerProfileWithCommentsABI } from "../../../abis/GamerProfileWithComments";

const contractAddress = "0x609377Ea77aE7103Dc8dE2b98936B35f219DDA31";

function AddCommentComponent() {
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const [comments, setComments] = useState<
    { profileId: string; rating: string; comment: string }[]
  >([]);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const profileId = formData.get("profileId") as string;
    const rating = formData.get("rating") as string;
    const comment = formData.get("comment") as string;

    // Ensure writeContract is a function before calling it
    if (writeContract) {
      writeContract({
        address: contractAddress,
        abi: GamerProfileWithCommentsABI,
        functionName: "addComment",
        args: [BigInt(profileId), BigInt(rating), comment],
      });

      // Add the new comment to the local state
      setComments((prevComments) => [
        { profileId, rating, comment },
        ...prevComments,
      ]);
    } else {
      console.error("write function is not available");
    }
  }

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  return (
    <div className="flex flex-col md:flex-row items-start justify-center gap-8 p-4 w-full">
      {/* Form Section */}
      <form
        onSubmit={submit}
        className="w-[400px] flex flex-col max-w-md p-6 bg-gray-900 rounded-lg shadow-lg"
      >
        <h3 className="text-2xl font-semibold text-white mb-4">
          Add a Comment
        </h3>
        <input
          name="profileId"
          placeholder="Profile ID"
          required
          className="mb-4 p-3 rounded-md border border-gray-700 bg-gray-800 text-white"
        />
        <input
          name="rating"
          placeholder="Rating (1-5)"
          required
          className="mb-4 p-3 rounded-md border border-gray-700 bg-gray-800 text-white"
        />
        <textarea
          name="comment"
          placeholder="Type your comment..."
          required
          rows={4}
          className="mb-4 p-3 rounded-md border border-gray-700 bg-gray-800 text-white"
        ></textarea>
        <button
          disabled={isPending}
          type="submit"
          className={`p-3 rounded-md bg-green-600 text-white font-bold ${
            isPending ? "opacity-50 cursor-not-allowed" : "hover:bg-green-500"
          }`}
        >
          {isPending ? "Submitting..." : "Add Comment"}
        </button>
        {hash && (
          <div className="mt-4 text-gray-300">
            Transaction Hash: <span className="font-semibold">{hash}</span>
          </div>
        )}
        {isConfirming && (
          <div className="mt-4 text-yellow-400">
            Waiting for confirmation...
          </div>
        )}
        {isConfirmed && (
          <div className="mt-4 text-green-500">Transaction confirmed.</div>
        )}
        {error && (
          <div className="mt-4 text-red-500">
            Error: {(error as BaseError).shortMessage || error.message}
          </div>
        )}
      </form>

      {/* Comments Section */}
      <div className="flex flex-col flex-wrap items-start w-fit max-w-md min-w-[300px]">
        <h3 className="text-2xl font-semibold text-white mb-4">Comments:</h3>
        <ul className="space-y-4 max-h-[300px] overflow-y-auto break-all no-scrollbar">
          {comments.map((c, index) => (
            <li
              key={index}
              className="p-4 bg-gray-800 rounded-lg shadow-md w-fit "
            >
              <div className="flex justify-between items-center">
                <strong className="text-yellow-400">Rating:</strong>
                <span className="text-white">{c.rating}</span>
              </div>
              <p className="text-gray-300 mt-1">
                <strong>Comment:</strong> {c.comment}
              </p>
            </li>
          ))}
          {/* Static Comments */}
          <li className="p-4 bg-gray-800 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <strong className="text-yellow-400">Rating:</strong>
              <span className="text-white">5</span>
            </div>
            <p className="text-gray-300 mt-1">
              <strong>Comment:</strong> Excellent service and great experience!
            </p>
          </li>
          <li className="p-4 bg-gray-800 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <strong className="text-yellow-400">Rating:</strong>
              <span className="text-white">4</span>
            </div>
            <p className="text-gray-300 mt-1">
              <strong>Comment:</strong> Good, but there is room for improvement.
            </p>
          </li>
          <li className="p-4 bg-gray-800 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <strong className="text-yellow-400">Rating:</strong>
              <span className="text-white">3</span>
            </div>
            <p className="text-gray-300 mt-1">
              <strong>Comment:</strong> Average experience, nothing special.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AddCommentComponent;
