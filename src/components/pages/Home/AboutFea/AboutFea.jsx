const AboutFea = () => {
  return (
    <div className="bg-black text-[#9FB7CC] px-6 py-16 md:px-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#B7CCE0]">
        About Us
      </h2>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-12 max-w-7xl mx-auto">
        
        {/* Left Text Column */}
        <div className="md:w-1/2 space-y-6 text-base md:text-lg leading-relaxed text-justify">
          <p className="font-semibold text-[#B7CCE0]">
            Samvaada isn’t just a club — it’s the visual heartbeat of NMAMIT.
          </p>

          <p>
            Founded in 2022, Samvaada began as a small group of passionate photographers and creators with one vision: to capture the spirit of our campus and share it with the world.
          </p>

          <p>
            What started with a few lenses and a lot of heart has now grown into the official media and content team of NMAM Institute of Technology. From documenting vibrant campus events to managing the college’s digital presence, we are the storytellers behind NMAMIT’s social identity.
          </p>

          <p className="italic text-[#ADC4DA]">
            But we do more than just click photos or edit reels.
          </p>

          <p>
            We freeze emotions in frames, build narratives through visuals, and create content that connects thousands of students, alumni, and future aspirants. Every shot, every post, every story — it’s all crafted with care, creativity, and a deep love for our campus.
          </p>

          <p>
            At Samvaada, we believe that memories matter. And we’re here to make sure none of them go unnoticed.
          </p>
        </div>

        {/* Right Image Column */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://res.cloudinary.com/duq64offn/image/upload/v1754321029/clg_kxvcwb.png"
            alt="Samvaada team or NMAMIT campus"
            className="rounded-xl shadow-xl w-full max-w-[500px] h-auto object-cover"
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutFea;
