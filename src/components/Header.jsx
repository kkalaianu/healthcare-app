import { Search, Bell, Plus } from "lucide-react";

function Header() {
  return (
    <header className="w-full bg-gray-200 shadow-md px-4 py-3">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Left: Search Bar and Bell Icon */}
        <div className="w-full sm:flex-1 flex flex-col sm:flex-row items-center gap-4">
          {/* Search Bar */}
          <div className="relative w-full sm:max-w-md">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              <Search className="w-5 h-5" />
            </span>
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Bell Icon */}
          <Bell className="w-5 h-6 text-gray-600 cursor-pointer text-violet-500" />
        </div>

        {/* Right: User + Avatar + Plus Button */}
        <div className="flex items-center gap-3">
          <img
            src="./icons/user.png"
            alt="User"
            className="h-8 w-8 rounded-full object-cover cursor-pointer"
          />
          <span className="text-sm">Albert</span>
          <button className="bg-violet-500 hover:bg-blue-600 text-white p-2 rounded-full shadow-md">
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
