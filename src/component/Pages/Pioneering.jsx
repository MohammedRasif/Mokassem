import MagicBento from "../Home/MagicBento";

function Pioneering() {
  return (
    <div className="bg-black text-white py-20">
      <div className="container mx-auto space-y-10">
        {/* Text Section */}
        <div className="flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl font-semibold bg-gradient-to-r from-white via-gray-300 to-white text-transparent bg-clip-text pb-4">
            Pioneering the Future of Earth Intelligence
          </h1>
          <p className="max-w-2xl bg-gradient-to-r from-white via-gray-400 to-white font-medium text-transparent bg-clip-text">
            We're on a mission to transform how the world makes decisions by
            combining cutting-edge AI with real-time Earth and space data, making
            complex global and foresight insights accessible and insightful to
            everyone.
          </p>
        </div>

        {/* MagicBento Animation */}
        <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="132, 0, 255"
        />
      </div>
    </div>
  );
}

export default Pioneering;
