import React from "react";
import { Play } from "lucide-react"; // Play icon

const Visual = () => {
  // Sample data
  const mediaItems = [
    {
      title: "Lorem Ipsum",
      description: "Lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500",
    },
    {
      title: "Lorem Ipsum",
      description: "Lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500",
    },
    {
      title: "Lorem Ipsum",
      description: "Lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=500",
    },
    {
      title: "Lorem Ipsum",
      description: "Lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500",
    },
    {
      title: "Lorem Ipsum",
      description: "Lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum",
      image:
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500",
    },
    {
      title: "Lorem Ipsum",
      description: "Lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=500",
    },
  ];

  return (
    <div className="bg-black text-white py-10 px-4 ">
      <h2 className="text-3xl font-bold mb-8">Related image and video</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {mediaItems.map((item, index) => (
          <div key={index} className="space-y-2">
            {/* Image with overlay */}
            <div className="relative rounded-lg overflow-hidden group">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              {/* Overlay with play button */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition">
                <div className="bg-white rounded-full p-3">
                  <Play className="w-6 h-6 text-black" />
                </div>
              </div>
            </div>

            {/* Title */}
            <h3 className="font-bold">{item.title}</h3>
            {/* Description */}
            <p className="text-gray-300 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Visual;
