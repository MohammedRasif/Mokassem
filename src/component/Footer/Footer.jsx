import React from "react";
import { Twitter, Instagram, Linkedin } from "lucide-react";
import img from "../../image/Group.png";
import img1 from "../../image/Canvas.png";

function Footer() {
  return (
    <footer className="bg-black text-white relative">
      {/* Image positioned at the bottom of the footer */}
      <div className="absolute top-30 left-[165vh] z-10">
        <img
          src={img1}
          className="h-[400px] w-[400px] object-contain"
          alt="Canvas decoration"
        />
      </div>

      {/* Top CTA Section */}
      <div className="container mx-auto  py-16 relative z-30">
        <div className="bg-gradient-to-br from-gray-900 via-gray-700 to-gray-700/50 rounded-xl p-9 text-center shadow-lg border border-gray-500">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Transform Your Decision Making?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to explore smart tools, real-time data, and visual
            insights that matter.
          </p>
          <button className="bg-blue-600  text-white font-semibold py-4 px-10 rounded-lg text-lg transition-colors duration-200">
            Subscribe Now
          </button>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="px-4 sm:px-6 py-12 border-t border-gray-800 relative z-30">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          {/* Logo and Socials */}
          <div className="flex flex-col items-start mb-8 md:mb-0 -mt-16">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 mr-2 flex items-center justify-center">
                <img src={img} alt="EARTH AI-Q Logo" />
              </div>
              <span className="text-3xl font-bold">EARTH AI-Q</span>
            </div>
            <div className="flex space-x-5 pt-2">
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 ">
            <div>
              <h4 className="font-bold text-[24px] text-white mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[24px] text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Disclaimer
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Terms of service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[24px] text-white mb-4">Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Sign up
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Log in
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-left text-xs text-gray-500 mt-8 pt-4 border-t border-gray-800">
          © 2025 EARTH AI-Q
        </div>
      </div>
    </footer>
  );
}

export default Footer;