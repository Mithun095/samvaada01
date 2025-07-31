import teamGif from "../../../assets/video/team.gif";

const MeetTheTeam = () => (
  <div className="w-full flex flex-col mt-8 mb-4 px-2 md:px-8 h-[80vh] md:h-[80vh]">
    {/* Heading */}
    <h3 className="text-center text-gray-400 text-base font-light mb-4 tracking-wide py-6">
      Photo Gallery
    </h3>
    {/* Photo grid */}
    <div className="
      flex-1
      grid
      grid-cols-2
      grid-rows-8
      gap-2
      md:grid-cols-6
      md:grid-rows-4
      md:gap-4
      h-full
      mx-2 md:mx-8
    ">
      {/* Large left photo */}
      <div className="col-span-2 row-span-2 md:col-span-3 md:row-span-2 bg-[#232323] rounded-lg overflow-hidden flex items-center justify-center">
        <img src={teamGif} alt="Team" className="w-full h-full object-cover" />
      </div>
      {/* Top right 2 photos */}
      <div className="col-span-1 row-span-1 md:col-span-2 md:row-span-1 bg-[#232323] rounded-lg overflow-hidden flex items-center justify-center">
        <img src={teamGif} alt="Team" className="w-full h-full object-cover" />
      </div>
      <div className="col-span-1 row-span-1 md:col-span-1 md:row-span-1 bg-[#232323] rounded-lg overflow-hidden flex items-center justify-center">
        <img src={teamGif} alt="Team" className="w-full h-full object-cover" />
      </div>
      {/* Middle right wide photo */}
      <div className="col-span-2 row-span-1 md:col-start-4 md:col-span-3 md:row-start-2 md:row-span-1 bg-[#232323] rounded-lg overflow-hidden flex items-center justify-center">
        <img src={teamGif} alt="Team" className="w-full h-full object-cover" />
      </div>
      {/* Bottom left tall photo */}
      <div className="col-span-1 row-span-2 md:col-span-2 md:row-span-2 bg-[#232323] rounded-lg overflow-hidden flex items-center justify-center">
        <img src={teamGif} alt="Team" className="w-full h-full object-cover" />
      </div>
      {/* Bottom center 2 photos */}
      <div className="col-span-1 row-span-1 md:col-span-2 md:row-span-1 bg-[#232323] rounded-lg overflow-hidden flex items-center justify-center">
        <img src={teamGif} alt="Team" className="w-full h-full object-cover" />
      </div>
      <div className="col-span-2 row-span-1 md:col-span-2 md:row-span-1 bg-[#232323] rounded-lg overflow-hidden flex items-center justify-center">
        <img src={teamGif} alt="Team" className="w-full h-full object-cover" />
      </div>
      {/* Last row, rightmost empty space for text (covering both empty spaces) */}
      <div className="
        col-span-2 row-span-1 flex items-center justify-center
        md:col-start-4 md:col-span-2 md:row-start-4 md:row-span-1
      ">
        <span
          className="text-white text-3xl sm:text-4xl md:text-6xl font-extrabold mb-6 text-center w-full whitespace-nowrap"
          style={{
            fontFamily: "'Poppins', 'Segoe UI', 'Arial', sans-serif",
            letterSpacing: "0.03em"
          }}
        >
          SMC FOR A REASON
        </span>
      </div>
    </div>
  </div>
);

export default MeetTheTeam;