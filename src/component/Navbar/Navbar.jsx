"use client"

import { useState, useEffect } from "react"
import img from "../../image/group.png"
function Navbar() {
  const [activeRoute, setActiveRoute] = useState("/")

  useEffect(() => {
    setActiveRoute(window.location.pathname)
  }, [])

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ]

  const handleNavClick = (path) => {
    setActiveRoute(path)
    // Add your navigation logic here
    // For example: router.push(path) or window.location.href = path
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-md border-b border-gray-500 roboto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-4">
            <img src={img} alt="" />
            <h1 className="text-2xl font-bold text-white">EARTH AI-Q</h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="flex justify-center items-baseline space-x-1 relative">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`
                    relative px-4 py-2 rounded-lg text-[18px] font-bold transition-all duration-300 ease-in-out cursor-pointer
                    ${activeRoute === item.path ? "text-[#4880FF]" : "text-white hover:text-[#4880FF]"}
                    hover:bg-gray-800 hover:scale-105 transform
                    before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-0.5 
                    before:bg-[#4880FF] before:transition-all before:duration-300 before:ease-in-out
                    before:transform before:-translate-x-1/2
                    ${activeRoute === item.path ? "before:w-full" : "hover:before:w-full"}
                  `}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Login/Register Buttons */}
          <div className="hidden md:flex space-x-2">
            <button className="px-4 py-[5px] rounded-sm text-[19px] font-medium text-white border border-white hover:bg-[#4880FF] transition-all duration-300 cursor-pointer">
              Login
            </button>
            <button className="px-4 py-[5px] rounded-sm text-[19px] font-medium text-white  border border-white  hover:bg-[#4880FF] transition-all duration-300 cursor-pointer">
              Register
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white hover:text-[#4880FF] transition-colors duration-200">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        nav {
          animation: slideIn 0.5s ease-out;
        }
        
        button:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        
        button:active {
          transform: scale(0.98);
        }
        
        /* Custom smooth hover effect */
        button::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 8px;
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
          z-index: -1;
        }
        
        button:hover::after {
          opacity: 1;
        }
      `}</style>
    </nav>
  )
}

export default Navbar