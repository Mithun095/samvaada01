import { useEffect, useState } from "react";

// 🧩 Reusable grid image block with smooth fade animation
const ImageGridItem = ({ className, src }) => {
  const [visibleSrc, setVisibleSrc] = useState(src);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (src !== visibleSrc) {
      setFade(false); // fade out
      const timeout = setTimeout(() => {
        setVisibleSrc(src); // switch image
        setFade(true); // fade in
      }, 300); // matches duration
      return () => clearTimeout(timeout);
    }
  }, [src, visibleSrc]);

  return (
    <div
      className={`${className} bg-[#232323] rounded-lg overflow-hidden flex items-center justify-center transition-opacity duration-500`}
    >
      <img
        src={visibleSrc}
        alt="Team"
        className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
          fade ? "opacity-100" : "opacity-0"
        }`}
        loading="eager"
        draggable="false"
      />
    </div>
  );
};

const MeetTheTeam = () => {
  const allImages = [
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXqQs4Zd5EetbCxrHgMTRofDqJ0i5umynQVXOL",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXRMu76Icao70yfUQYEdnHecXxiNhtvJq98Tg3",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXcApgYnhNBZwV6U7ejYgXJEuzo8AtyR9GLrI5",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXEcBs7qU5jOozYGkZveIUb0Vfip7MHWrq8uns",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXVdPZWU3xbgfF3Xud9NIkqnLD8Cs7ZoRj62MW",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXHy4JH5vjRBaFQcwTSbCPJr956qdtXV87pzuo",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXk0DnGwMQMWlVLnim6GOzKNaYkdD7FU9I5p4C",
    // Add more if you'd like
  ];

  const [rotatingImages, setRotatingImages] = useState(allImages);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotatingImages((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first]; // rotate left
      });
    }, 3000); // change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col mt-8 mb-4 px-2 md:px-8 h-[80vh] md:h-[80vh]">
      {/* Heading */}
      <h3 className="text-center text-gray-400 text-xl font-light mb-4 tracking-wide py-6">
        Photo Gallery
      </h3>

      {/* Grid */}
      <div className="flex-1 grid grid-cols-2 grid-rows-8 gap-2 md:grid-cols-6 md:grid-rows-4 md:gap-4 h-full mx-2 md:mx-8">
        {/* Each grid item gets one rotating image */}
        <ImageGridItem className="col-span-2 row-span-2 md:col-span-3 md:row-span-2" src={rotatingImages[0]} />
        <ImageGridItem className="col-span-1 row-span-1 md:col-span-2 md:row-span-1" src={rotatingImages[1]} />
        <ImageGridItem className="col-span-1 row-span-1 md:col-span-1 md:row-span-1" src={rotatingImages[2]} />
        <ImageGridItem className="col-span-2 row-span-1 md:col-start-4 md:col-span-3 md:row-start-2 md:row-span-1" src={rotatingImages[3]} />
        <ImageGridItem className="col-span-1 row-span-2 md:col-span-2 md:row-span-2" src={rotatingImages[4]} />
        <ImageGridItem className="col-span-1 row-span-1 md:col-span-2 md:row-span-1" src={rotatingImages[5]} />
        <ImageGridItem className="col-span-2 row-span-1 md:col-span-2 md:row-span-1" src={rotatingImages[6]} />

        {/* Final row text block */}
        <div className="col-span-2 row-span-1 flex items-center justify-center md:col-start-3 md:col-span-4 md:row-start-4 md:row-span-1">
          <span
            className="text-[#B7CCE0] text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-center w-full px-1"
            style={{
              fontFamily: "'Poppins', 'Segoe UI', 'Arial', sans-serif",
              letterSpacing: "0.3em",
              textShadow: "20px 20px 40px 50px rgba(255, 255, 255, 0.74)",
            }}
          >
            SMC FOR A REASON 
          </span>
        </div>
      </div>
    </div>
  );
};


export default MeetTheTeam;
