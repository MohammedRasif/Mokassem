
import { useState, useRef, useEffect } from "react";
import { Search, Globe, Zap, ArrowRight } from "lucide-react";
import DecryptedText from "../Home/DecryptedText"; // Direct import
import { GoChevronRight, GoGitCompare, GoRocket, GoStar, GoGear } from "react-icons/go";
import video1 from "../../video/video1.mp4"; // Direct file import
import img from "../../image/Vector.png"; // Direct file import

const Banner = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const videoRef = useRef(null);
  const dropdownRef = useRef(null);
  const searchBarRef = useRef(null);

  const suggestions = [
    "Explore Earth's oceans",
    "Learn about climate change",
    "Discover Earth's ecosystems",
    "Find out about Earth's history",
    "Understand global weather patterns",
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Add your search logic here (e.g., API call, navigation)
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setIsFocused(false);
    // Trigger search programmatically
    const syntheticEvent = new Event("submit", { bubbles: true });
    searchBarRef.current.dispatchEvent(syntheticEvent);
  };

  const toggleDropdown = () => {
    console.log("Toggle Dropdown, isDropdownOpen:", !isDropdownOpen);
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close GoGitCompare dropdown on any outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative min-h-screen roboto">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          onError={() => console.error("Video failed to load")}
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* Top Badge */}
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-sm text-white">
            <Zap className="w-4 h-4 text-blue-400" />
            <span>Powered by real-time Earth & Space Data</span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="mb-8">
          <div className="text-4xl md:text-6xl font-bold text-white mb-4 flex flex-wrap justify-center">
            <DecryptedText
              text="Make "
              speed={75}
              maxIterations={25}
              animateOn="view"
              revealDirection="center"
              sequential={true}
              className="text-4xl md:text-6xl font-bold text-white"
              encryptedClassName="text-gray-400 opacity-50 text-4xl md:text-6xl font-bold"
            />
            <DecryptedText
              text="smarter choices"
              speed={75}
              maxIterations={25}
              animateOn="view"
              revealDirection="center"
              sequential={true}
              className="text-4xl md:text-6xl font-bold text-blue-400"
              encryptedClassName="text-gray-400 opacity-50 text-4xl md:text-6xl font-bold"
            />
            <DecryptedText
              text=" with AI-powered Earth and Space intelligence"
              speed={75}
              maxIterations={25}
              animateOn="view"
              revealDirection="center"
              sequential={true}
              className="text-4xl md:text-6xl font-bold text-white"
              encryptedClassName="text-gray-400 opacity-50 text-4xl md:text-6xl font-bold"
            />
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-8 w-full max-w-2xl mx-auto flex items-center gap-4 relative">
          <form ref={searchBarRef} onSubmit={handleSearch} className="relative flex-1">
            <div className="relative flex items-center  ">
              <div className="flex items-center pl-6 pr-4">
                <Globe className="w-5 h-5 text-blue-400 mr-3" />
                <span className="text-white/80 text-sm font-medium">ASK EARTH</span>
              </div>
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setTimeout(() => setIsFocused(false), 100)}
                  placeholder="Want to know about Earth?"
                  className="w-full  text-white placeholder-white/60 px-3 py-3 focus:outline-none text-lg border-b  border-white/20 focus:border-b focus:border-white/40 "
                />
              </div>
              <button
                type="submit"
                className=" flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-4   cursor-pointer "
              >
                <Search className="w-6 h-6 text-blue-400 hover:text-blue-300 transition-colors duration-300" />
              </button>
            </div>
            {isFocused && (
              <div className="absolute left-40 right-0 top-full w-96 mt-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg z-20">
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 text-white/60 hover:text-white  cursor-pointer transition-all duration-200"
                    onMouseDown={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </div>
                ))}
              </div>
            )}
          </form>

          {/* GoGitCompare Icon with Dropdown */}
          <div className="relative group" ref={dropdownRef}>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full  transition-all duration-300"></div>
            <div
              className="relative flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-4  transition-all duration-300 cursor-pointer"
              onClick={toggleDropdown}
            >
              <GoGitCompare className="w-6 h-6 text-blue-400 hover:text-blue-300 transition-colors duration-300" />
            </div>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-40 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20 p-2 z-20">
                <ul className="space-y-1">
                  <li className="flex items-center gap-2 p-2 hover:bg-white/20 rounded-md">
                    <span className="text-white text-md cursor-pointer">
                      <GoRocket className="inline w-5 h-5 mr-2" /> Report
                    </span>
                  </li>
                  <li className="flex items-center gap-2 p-2 hover:bg-white/20 rounded-md">
                    <span className="text-white text-md cursor-pointer">
                      <GoStar className="inline w-5 h-5 mr-2" /> Visual
                    </span>
                  </li>
                  <li className="flex items-center gap-2 p-2 hover:bg-white/20 rounded-md">
                    <span className="text-white text-md cursor-pointer">
                      <GoGear className="inline w-5 h-5 mr-2" /> View Map
                    </span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Feature Highlight */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-3 text-white/80 text-lg">
            <span>Explore EarthPro for more advanced features</span>
            <button className="bg-blue-500/40 hover:bg-blue-500/60 text-white px-4 py-2 rounded-lg text-sm transition-colors duration-300 flex items-center gap-2 font-bold">
              <img src={img} alt="Upgrade icon" />
              Upgrade now
            </button>
          </div>
        </div>

        {/* Learn More Button */}
        <div className="mb-16">
          <button className="group border border-white/30 hover:border-blue-400 bg-white/5 hover:bg-blue-500/20 text-white px-6 py-3 rounded-lg cursor-pointer transition-all duration-300 flex items-center gap-2 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30">
            Learn more
            <GoChevronRight className="w-4 h-4 group-hover:translate-x-1 group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .backdrop-blur-md {
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        input {
          padding-top: 12px !important;
          padding-bottom: 12px !important;
        }
      `}</style>
    </div>
  );
};

export default Banner;
