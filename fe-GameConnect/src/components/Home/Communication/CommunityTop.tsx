export function CommunityTop() {
  return (
    <div className="bg-[#16161f] rounded-lg p-4">
      <h2 className="font-medium mb-4">Community Stars</h2>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <img
            src="public/static/Card/Rikuuen.png"
            alt="User avatar"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-medium">Rikuuen</h3>
              <span className="text-yellow-500">⭐</span>
            </div>
            <div className="flex gap-2 text-xs">
              <span className="px-2 py-0.5 rounded bg-yellow-500/20 text-yellow-300">
                Gold
              </span>
              <span className="px-2 py-0.5 rounded bg-[#1c1c25]">EU West</span>
              <span className="px-2 py-0.5 rounded bg-[#1c1c25]">Support</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <img
            src="public/static/Card/image4.png"
            alt="User avatar"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-medium">Lissa</h3>
              <span className="text-pink-500">🌸</span>
            </div>
            <div className="flex gap-2 text-xs">
              <span className="px-2 py-0.5 rounded bg-[#1c1c25]">PGIRL...</span>
              <span className="px-2 py-0.5 rounded bg-[#1c1c25]">
                North Amer...
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <img
            src="public/static/Card/Squiddu.png"
            alt="User avatar"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-medium">Squiddu</h3>
              <span className="text-yellow-500">⭐</span>
            </div>
            <div className="flex gap-2 text-xs">
              <span className="px-2 py-0.5 rounded bg-yellow-500/20 text-yellow-300">
                Gold
              </span>
              <span className="px-2 py-0.5 rounded bg-[#1c1c25]">EU West</span>
              <span className="px-2 py-0.5 rounded bg-[#1c1c25]">Support</span>
            </div>
          </div>
        </div>

        <button className="text-sm text-purple-400 hover:text-purple-300">
          Check more
        </button>
      </div>
    </div>
  );
}
