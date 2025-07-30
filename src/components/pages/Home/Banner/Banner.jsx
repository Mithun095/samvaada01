// import bgVideo from "../../../../assets/video/bg-video.mp4";
import img from "../../../../assets/video/samvaada.png";

const Banner = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[600px] lg:h-[800px] bg-gradient-to-b from-black via-[#181C22] to-black flex flex-col items-center justify-center pt-10 sm:pt-16 ">
      {/* <video
        className="w-full h-full object-cover"
        src={bgVideo}
        autoPlay
        loop
        muted
      ></video> */}
      <img
        src={img} // Change this to your logo path if different
        alt="Samvaada Logo"
        className="w-28 sm:w-32 md:w-48 lg:w-56 mb-4"
        draggable="false"
      />
      {/* <h1 className="text-2xl md:text-3xl font-bold tracking-widest mb-2">
        SAMVAADA
      </h1> */}
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-6">
        SAMVAADA
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-gray-300 font-medium mb-8 text-center max-w-xs sm:max-w-md md:max-w-xl">
        Connecting minds through meaningful conversations and cultural exchange
      </p>
      <div className="flex flex-col items-center animate-bounce text-gray-400 mt-4">
        <span>Scroll Down</span>
        <div className="text-2xl mt-1">↓</div>
      </div>
    </div>
  );
};

export default Banner;