import React from "react";

const MapView = () => {
  return (
    <div className="bg-black text-white py-10 px-4 ">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-6">Map View</h2>

      {/* Image with overlay button */}
      <div className="relative rounded-lg overflow-hidden">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg"
          alt="Map View"
          className="w-full h-[400px] object-cover rounded-lg"
        />

        {/* Button overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="bg-white/20 backdrop-blur-sm border border-white px-6 py-2 rounded-md text-white font-semibold hover:bg-white/30 transition">
            View Map
          </button>
        </div>
      </div>
    </div>
  );
};

export default MapView;
