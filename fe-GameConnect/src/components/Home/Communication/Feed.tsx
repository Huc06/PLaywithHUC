import { MoreHorizontal, Heart, MessageSquare, Share2 } from "lucide-react";
import { Post } from "../../types/post";

interface FeedProps {
  posts: Post[];
}

export function Feed({ posts }: FeedProps) {
  return (
    <div className="space-y-6 whitespace-pre-line">
      {posts.map((post) => (
        <article key={post.id} className="bg-[#16161f] rounded-lg p-4">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={`${post.author.name}'s avatar`}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">{post.author.name}</h3>
                  {/* <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 text-xs">
                    RANK 1
                  </span> */}
                </div>
                <p className="text-sm text-gray-400">{post.timestamp}</p>
              </div>
            </div>

            <button className="text-gray-400 hover:text-white">
              <MoreHorizontal size={20} />
            </button>
          </div>

          <div className="space-y-4 ">
            <p>
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </p>

            {post.image && (
              <img
                src={post.image}
                alt="Post image"
                className="rounded-lg w-full max-h-96 object-cover"
              />
            )}

            <div className="flex gap-6 text-gray-400">
              <button className="flex items-center gap-2 hover:text-white">
                <Heart size={20} />
                <span>{post.likes}</span>
              </button>
              <button className="flex items-center gap-2 hover:text-white">
                <MessageSquare size={20} />
                <span>{post.comments}</span>
              </button>
              <button className="hover:text-white">
                <Share2 size={20} />
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
