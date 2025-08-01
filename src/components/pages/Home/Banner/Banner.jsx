// import bgVideo from "../../../../assets/video/bg-video.mp4";
import img from "../../../../assets/video/samvaada.png";

const Banner = () => {
  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-black via-[#181C22] to-black flex flex-col items-center justify-center pt-16 pb-16 px-6">
      <img
        src={img}
        alt="Samvaada Logo"
        className="w-40 sm:w-56 md:w-72 lg:w-96 mb-8 py-2"
        draggable="false"
      />
      <h2 className="text-5xl sm:text-6xl md:text-8xl font-extrabold mb-8">
        SAMVAADA
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-gray-300 font-medium mb-12 text-center max-w-xs sm:max-w-md md:max-w-xl">
        Connecting minds through meaningful conversations and cultural exchange
      </p>
      <div className="flex flex-col items-center animate-bounce text-gray-400 mt-8 py-5">
        <span className="mb-2">Scroll Down</span>
        <div className="text-2xl">↓</div>
      </div>
    </div>
  );
};

export default Banner;