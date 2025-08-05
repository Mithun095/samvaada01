import { div } from "three/examples/jsm/nodes/Nodes.js";

const Banner = () => {
  return (
 
    <div className="relative w-full h-screen bg-gradient-to-b from-black via-[#181C22] to-black flex flex-col items-center justify-center pt-16 pb-16 px-5">
     
      <img
        src="https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXMp4m5wl0sK4AxcdVg1QO2F7fqIlheWJLbn53"
        alt="Samvaada Logo"
        className="w-40 sm:w-56 md:w-72 lg:w-96 mt-35"
        draggable="false"
      />
      <img
        src="https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXYJtDCjbcBlqgmv4oVAYp86dsO2az1RMZKhE7"
        alt="Samvaada Text"
        className="w-64 sm:w-80 md:w-[32rem] lg:w-[40rem]"
        draggable="false"
      />
      <p className="text-base sm:text-lg md:text-xl text-gray-300 font-medium mb-12 text-center max-w-xs sm:max-w-md md:max-w-xl">
        We don’t just capture moments — we preserve memories that define NMAMIT
      </p>
      <div className="flex flex-col items-center animate-bounce text-gray-400 mt-5 py-5">

        <span className="mb-2">Scroll Down</span>
        <div className="text-2xl">↓</div> 
      </div>
    </div>

  );
};

export default Banner;
