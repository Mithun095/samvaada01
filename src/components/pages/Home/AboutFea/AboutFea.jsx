import clg from "./../../../../assets/video/clg.jpg";

const AboutFea = () => {
  return (
    <div className="bg-black text-[#9FB7CC] px-6 py-16 md:px-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#B7CCE0]">About Us</h2>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Left Text Column */}
        <div className="md:w-1/2 text-left space-y-6 text-base md:text-lg leading-relaxed">
          
            <b>Samvaada isn’t just a club — it’s the visual heartbeat of NMAMIT.</b>
<p> Founded in 2022, Samvaada began as a small group of passionate photographers and creators with one vision: to capture the spirit of our campus and share it with the world.


          </p>
          <p>
            What started with a few lenses and a lot of heart has now grown into the official media and content team of NMAM Institute of Technology. From documenting vibrant campus events to managing the college’s digital presence, we are the storytellers behind NMAMIT’s social identity
          </p>
          <span>But we do more than just click photos or edit reels.</span>
          <p>
            We freeze emotions in frames, build narratives through visuals, and create content that connects thousands of students, alumni, and future aspirants. Every shot, every post, every story — it’s all crafted with care, creativity, and a deep love for our campus.


          </p>
          
          <p>At Samvaada, we believe that memories matter. And we’re here to make sure none of them go unnoticed.</p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <img 
            src={clg} 
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
