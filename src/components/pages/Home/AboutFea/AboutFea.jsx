import teamGif from "./../../../../assets/video/team.gif";

const AboutFea = () => {
  return (
    <div className="bg-black text-[#9FB7CC] px-6 py-16 md:px-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#B7CCE0]">About Us</h2>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Left Text Column */}
        <div className="md:w-1/2 text-left space-y-6 text-base md:text-lg leading-relaxed">
          <p>
            Samvaada is a vibrant community club dedicated to fostering meaningful conversations and cultural exchange. 
            The name "Samvaada" derives from Sanskrit, meaning "dialogue" or "conversation," reflecting our core mission 
            of bringing people together through communication.
          </p>
          <p>
            Founded in 2020, our club has grown into a diverse community of thinkers, creators, and innovators who share 
            ideas, experiences, and perspectives. We organize regular events, workshops, and discussions that encourage 
            intellectual growth and social connection.
          </p>
          <p>
            At Samvaada, we believe in the power of dialogue to bridge differences, spark creativity, and build lasting 
            relationships. Join us in our journey of exploration, learning, and community building.
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <img 
            src={teamGif} 
            alt="Team" 
            className="max-h-[400px] w-auto rounded-lg object-cover" 
            loading="eager" 
          />
        </div>
      </div>
    </div>
  );
};

export default AboutFea;
