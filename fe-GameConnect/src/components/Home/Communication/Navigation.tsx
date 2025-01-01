interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Navigation({ activeTab, onTabChange }: NavigationProps) {
  return (
    <nav className="flex gap-6 mb-6 text-sm">
      <button
        onClick={() => onTabChange("recommended")}
        className={`${
          activeTab === "recommended"
            ? "text-white"
            : "text-gray-400 hover:text-white"
        } transition-colors`}
      >
        Recommended
      </button>
      {/* <button
        onClick={() => onTabChange("latest")}
        className={`${
          activeTab === "latest"
            ? "text-white border-b-2 border-purple-500"
            : "text-gray-400 hover:text-white"
        } transition-colors`}
      >
        Latest
      </button>
      <button
        onClick={() => onTabChange("subscriptions")}
        className={`${
          activeTab === "subscriptions"
            ? "text-white"
            : "text-gray-400 hover:text-white"
        } transition-colors`}
      >
        My Subscriptions
      </button>
      <button
        onClick={() => onTabChange("official")}
        className={`${
          activeTab === "official"
            ? "text-white"
            : "text-gray-400 hover:text-white"
        } transition-colors`}
      >
        Official
      </button> */}
    </nav>
  );
}
