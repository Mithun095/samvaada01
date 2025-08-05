import { useEffect, useState } from "react";

const DynamicImage = ({ images, interval = 3000 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images, interval]);

  return (
    <img
      src={images[index]}
      alt="Team"
      className="w-full h-full object-cover"
      loading="eager"
      draggable="false"
    />
  );
};

const MeetTheTeam = () => {
  // Define image sets for each slot
  const imageSlots = {
    largeLeft: [
      "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXqQs4Zd5EetbCxrHgMTRofDqJ0i5umynQVXOL",
      // add more images for this slot if needed
    ],
    topRight1: [
      "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXRMu76Icao70yfUQYEdnHecXxiNhtvJq98Tg3",
    ],
    topRight2: [
      "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXcApgYnhNBZwV6U7ejYgXJEuzo8AtyR9GLrI5",
    ],
    midWide: [
      "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXEcBs7qU5jOozYGkZveIUb0Vfip7MHWrq8uns",
    ],
    bottomLeftTall: [
      "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXVdPZWU3xbgfF3Xud9NIkqnLD8Cs7ZoRj62MW",
    ],
    bottomCenter1: [
      "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXHy4JH5vjRBaFQcwTSbCPJr956qdtXV87pzuo",
    ],
    bottomCenter2: [
      "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXk0DnGwMQMWlVLnim6GOzKNaYkdD7FU9I5p4C",
    ],
  };

  return (
    <div className="w-full flex flex-col mt-8 mb-4 px-2 md:px-8 h-[80vh] md:h-[80vh]">
      <h3 className="text-center text-gray-400 text-xl font-light mb-4 tracking-wide py-6">
        Photo Gallery
      </h3>
      <div className="flex-1 grid grid-cols-2 grid-rows-8 gap-2 md:grid-cols-6 md:grid-rows-4 md:gap-4 h-full mx-2 md:mx-8">
        <div className="col-span-2 row-span-2 md:col-span-3 md:row-span-2 bg-[#232323] rounded-lg overflow-hidden flex items-center justify-center">
          <DynamicImage images={imageSlots.largeLeft} />
        </div>
        <div className="col-span-1 row-span-1 md:col-span-2 md:row-span-1 bg-[#232323] rounded-lg overflow-hidden flex items-center justify-center">
          <DynamicImage images={imageSlots.topRight1} />
        </div>
        <div className="col-span-1 row-span-1 md:col-span-1 md:row-span-1 bg-[#232323] rounded-lg overflow-hidden flex items-center justify-center">
          <DynamicImage images={imageSlots.topRight2} />
        </div>
        <div className="col-span-2 row-span-1 md:col-start-4 md:col-span-3 md:row-start-2 md:row-span-1 bg-[#232323] rounded-lg overflow-hidden flex items-center justify-center">
          <DynamicImage images={imageSlots.midWide} />
        </div>
        <div className="col-span-1 row-span-2 md:col-span-2 md:row-span-2 bg-[#232323] rounded-lg overflow-hidden flex items-center justify-center">
          <DynamicImage images={imageSlots.bottomLeftTall} />
        </div>
        <div className="col-span-1 row-span-1 md:col-span-2 md:row-span-1 bg-[#232323] rounded-lg overflow-hidden flex items-center justify-center">
          <DynamicImage images={imageSlots.bottomCenter1} />
        </div>
        <div className="col-span-2 row-span-1 md:col-span-2 md:row-span-1 bg-[#232323] rounded-lg overflow-hidden flex items-center justify-center">
          <DynamicImage images={imageSlots.bottomCenter2} />
        </div>
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
