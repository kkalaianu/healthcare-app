
import { navigationLinks } from '../data/navigationLinks';

function Sidebar() {
  return (
  <aside className="w-64 p-4 bg-gray-50 h-screen">
    <h1 className="text-2xl font-bold text-violet-700 mb-6 px-2">Healthcare</h1>

    <h2 className="text-sm font-semibold text-blue-500 uppercase mb-4 px-2">General</h2>
     <nav className="space-y-1">
     {navigationLinks.map((link, index) => (
       <div
        key={index} className="flex items-center space-x-3 text-gray-700 text-blue-600 px-3 cursor-pointer px-2 py-2 rounded-md bg-gray-100">
       <link.icon className="w-5 h-5" />
       <span className="text-sm">{link.name}</span>
        </div>
     ))}
    </nav>
    </aside>
  );
}

export default Sidebar;
