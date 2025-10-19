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
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXVuERPn3xbgfF3Xud9NIkqnLD8Cs7ZoRj62MW",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXpiuiS3mDHWJmSIVo6yeCPw4GMBNZlrX2j1hn",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXjlypC2Tqf53PeZK1VitXxaRHrQmFOYlEnBJ8",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXh2HWaM9oQq6zePMuTy4JwrtXRVL2ghZ7kBCj",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXdmquBVrGSaoICXRWQpjwN6uUzA0MkmtL9q18",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXkAPPlcgMQMWlVLnim6GOzKNaYkdD7FU9I5p4",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXTNSFJ3e14OjmaBCx2MVWkz0DJ8FdUty5iTKw",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YX5SCG69zmoIJvrUzu49WheiK6E8YZRlxXjw3P",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXrwNpFr7tcQ4hBHw2vjdVaGJAixZYPR7ICLys",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXQPBp45kTeqEGVCSlJkn0RPaO4DIZ3Uoigtjb",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXDxcAUDsaCeAENJg2a68dyV0TbBj79sZ4pUxP",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YX2NOyWULGOWqPiAQeKCzlm3N6auvcyk9jRnfJ",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXT0qhzWe14OjmaBCx2MVWkz0DJ8FdUty5iTKw",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YX6a4SApuj0DkoSdYcQMtyU13wRApNWu8mv7zV",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXodGke84V78YXxtauKWrSDpPEqTfIn05dFGwg",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXrbDsmop7tcQ4hBHw2vjdVaGJAixZYPR7ICLy",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXNXGw69o4WqgS78HnKklFzZT23eviLY59QhBV",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXnLLcgLqMYu2D4ZGWOrPb3lNi6CU5otL8Aeax",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXNCLw2Wo4WqgS78HnKklFzZT23eviLY59QhBV",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXBmxhAnQTF05a4mbZRKfeqXWLDBNvVAY6zCOQ",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXDvYjhkaCeAENJg2a68dyV0TbBj79sZ4pUxPI",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXxKkKACWhJ9u60kHDRj1QYznP4UE8rpBaMFZc",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXzU83UBdAFXUCg7zkcR93G0K6LEPobx8jrTWB",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXR9udItJcao70yfUQYEdnHecXxiNhtvJq98Tg",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXWfpr8tRztkMe560bRSpAmUQKYVO21ysdDB3G",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXhQsuUC9oQq6zePMuTy4JwrtXRVL2ghZ7kBCj",
    "https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXU50PdlVgXKoVSryFCeO6Yns9JcuGNv4wpiHq"
    // Add more if you'd like
  ];

  // how many slots we display (update if you add/remove ImageGridItem components)
  const numSlots = 7;

  // starting index for the sliding window
  const [startIndex, setStartIndex] = useState(0);

  // advance startIndex every 3 seconds
  useEffect(() => {
    const tick = setInterval(() => {
      setStartIndex((s) => (s + 1) % allImages.length);
    }, 3000);
    return () => clearInterval(tick);
  }, [allImages.length]);

  // get a unique slice of images for the current frame (wraps around)
  const getVisibleImages = () => {
    const result = [];
    for (let i = 0; i < numSlots; i++) {
      result.push(allImages[(startIndex + i) % allImages.length]);
    }
    return result;
  };

  const visible = getVisibleImages();

  return (
    <div className="w-full flex flex-col mt-8 mb-4 px-2 md:px-8 h-[80vh] md:h-[80vh]">
      {/* Heading */}
      <h3 className="text-center text-gray-400 text-xl font-light mb-4 tracking-wide py-6">
        Photo Gallery
      </h3>

      {/* Grid */}
      <div className="flex-1 grid grid-cols-2 grid-rows-8 gap-2 md:grid-cols-6 md:grid-rows-4 md:gap-4 h-full mx-2 md:mx-8">
        {/* Each grid item gets one rotating image from 'visible' - guaranteed unique */}
        <ImageGridItem key={visible[0]} className="col-span-2 row-span-2 md:col-span-3 md:row-span-2" src={visible[0]} />
        <ImageGridItem key={visible[1]} className="col-span-1 row-span-1 md:col-span-2 md:row-span-1" src={visible[1]} />
        <ImageGridItem key={visible[2]} className="col-span-1 row-span-1 md:col-span-1 md:row-span-1" src={visible[2]} />
        <ImageGridItem key={visible[3]} className="col-span-2 row-span-1 md:col-start-4 md:col-span-3 md:row-start-2 md:row-span-1" src={visible[3]} />
        <ImageGridItem key={visible[4]} className="col-span-1 row-span-2 md:col-span-2 md:row-span-2" src={visible[4]} />
        <ImageGridItem key={visible[5]} className="col-span-1 row-span-1 md:col-span-2 md:row-span-1" src={visible[5]} />
        <ImageGridItem key={visible[6]} className="col-span-2 row-span-1 md:col-span-2 md:row-span-1" src={visible[6]} />

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
