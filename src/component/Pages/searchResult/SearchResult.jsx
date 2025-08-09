import { useRef, useState } from "react";
import { Globe, SlidersHorizontal, Upload, Bookmark, Plus } from "lucide-react";
import Report from "./Report";
import Visual from "./Visual";
import MapView from "./MapView";
import Sidebar from "./Sidebar";
import Navbar from "../../Navbar/Navbar";

export default function SearchResult() {
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Uploaded file:", file);
      // You can handle the file upload logic here
    }
  };

  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Report", "Visual", "Map"];

  const renderContent = () => {
    switch (activeTab) {
      case "Report":
        return <Report />;
      case "Visual":
        return <Visual />;
      case "Map":
        return <MapView />;
      default:
        return (
          <>
            <Report />
            <Visual />
            <MapView />
          </>
        );
    }
  };

  return (
    <div className="bg-black text-white min-h-screen ">
      <Navbar />
      <div className="grid grid-cols-11 container mx-auto pt-20">
        <div className="grid col-span-2">
          <Sidebar />
        </div>
        <div className="grid col-span-8 gap-6 p-3">
          {/* Top Bar */}
          <div className="flex justify-between items-center px-4 py-2 border-b border-gray-700">
            {/* Left section */}
            <div className="flex items-center">
              <button
                onClick={handleUploadClick}
                className="flex items-center justify-center text-black bg-white rounded-full mr-2 p-1"
              >
                <Plus className="w-4 h-4" />
              </button>

              <input
                type="text"
                placeholder="ASK EARTH"
                className="text-sm font-semibold bg-transparent border-none outline-none text-white placeholder-gray-400"
              />

              {/* Hidden file input */}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
              />
            </div>

            {/* Right icons */}
            <div className="flex items-center space-x-4">
              <Globe className="w-6 h-6 cursor-pointer" />
              <SlidersHorizontal className="w-6 h-6 cursor-pointer" />
            </div>
          </div>

          {/* Tabs */}
          <div className="flex justify-between items-center px-4 py-2 border-b border-gray-700">
            <div className="flex space-x-20">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-1 text-xl ${
                    activeTab === tab
                      ? "border-b-2 border-white text-white"
                      : "text-gray-400"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-3">
              <button className="flex items-center space-x-1 px-3 py-1 bg-gray-700 rounded-md hover:bg-gray-600">
                <Upload className="w-6 h-6" />
                <span>Export</span>
              </button>
              <button className="p-2 bg-gray-700 rounded-md hover:bg-gray-600">
                <Bookmark className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Search Tag */}
          <div className="px-4 pt-3">
            <div className="inline-flex items-center space-x-1 bg-gray-800 px-3 py-1 rounded-full text-sm">
              {/* <img
            src="https://via.placeholder.com/20"
            alt="tag-icon"
            className="w-5 h-5 rounded-full"
          /> */}
              <span>Pastel analysis Lebanon...</span>
            </div>
          </div>

          {/* Tab Content */}
          <div className="">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
}
