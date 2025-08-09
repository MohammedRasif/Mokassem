import { Plus, FileText, Clock, MoreHorizontal, ArrowLeft } from "lucide-react";

export default function Sidebar() {
  const savedProjects = [
    "Where is the safest...",
    "Where is the safest...",
    "Where is the safest...",
  ];

  const searchHistory = Array(12).fill("Where is the safest...");

  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 text-white rounded-lg p-4 flex flex-col h-full">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-8">
        <button className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md text-sm font-medium">
          <Plus className="w-5 h-5" />
          Add new project
        </button>
        <ArrowLeft className="w-5 h-5 cursor-pointer text-gray-400" />
      </div>

      {/* Saved Projects */}
      <div className="mb-6">
        <h2 className="text-xs font-bold text-gray-500 mb-3 uppercase">
          Saved Project
        </h2>
        {savedProjects.map((title, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between text-sm py-2 px-3 hover:bg-gray-700 rounded-md cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-gray-500" />
              <span className="truncate text-gray-300">{title}</span>
            </div>
            <MoreHorizontal className="w-4 h-4 text-gray-500" />
          </div>
        ))}
      </div>

      {/* Search History */}
      <div>
        <h2 className="text-xs font-bold text-gray-500 mb-3 uppercase flex items-center gap-2">
          <Clock className="w-4 h-4" />
          Search history
        </h2>
        {searchHistory.map((title, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between text-sm py-2 px-3 hover:bg-gray-700 rounded-md cursor-pointer"
          >
            <span className="truncate text-gray-300">{title}</span>
            <MoreHorizontal className="w-4 h-4 text-gray-500" />
          </div>
        ))}
      </div>
    </div>
  );
}