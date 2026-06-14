import { motion } from "framer-motion";
import SectionHeading from "../../../shared/SectionHeading";

const stats = [
  { value: "2022", label: "Established" },
  { value: "150+", label: "Events Shot" },
  { value: "10K+", label: "Frames Archived" },
];

const AboutFea = () => {
  return (
    <div className="relative max-w-screen-xl mx-auto px-6 md:px-8 py-20">
      {/* soft glow */}
      <div className="pointer-events-none absolute -top-10 right-0 w-[40rem] h-[40rem] bg-lens-glow opacity-60" />

      <SectionHeading kicker="Who We Are" title="About Samvaada" align="center" />

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-5 text-[15px] md:text-base leading-relaxed text-ink-dim/90"
        >
          <p className="font-display text-2xl md:text-3xl font-semibold text-ink leading-snug">
            Not just a club — the visual heartbeat of NMAMIT.
          </p>

          <p>
            Founded in 2022, Samvaada began as a small group of passionate
            photographers and creators with one vision: to capture the spirit of
            our campus and share it with the world.
          </p>

          <p>
            What started with a few lenses and a lot of heart has grown into the
            official media and content team of NMAM Institute of Technology. From
            documenting vibrant campus events to managing the college&apos;s digital
            presence, we are the storytellers behind NMAMIT&apos;s social identity.
          </p>

          <p className="text-ink italic">
            But we do more than just click photos or edit reels.
          </p>

          <p>
            We freeze emotions in frames, build narratives through visuals, and
            create content that connects thousands of students, alumni, and future
            aspirants. Every shot, every post, every story — crafted with care,
            creativity, and a deep love for our campus.
          </p>

          {/* stats row */}
          <div className="grid grid-cols-3 gap-4 pt-6">
            {stats.map((s) => (
              <div key={s.label} className="border-l border-brand-glow/30 pl-4">
                <div className="font-display text-3xl font-extrabold ink-gradient">
                  {s.value}
                </div>
                <div className="cam-label !text-[0.52rem] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Image column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative justify-self-center w-full max-w-[500px]"
        >
          <img
            src="https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXQWTndHkTeqEGVCSlJkn0RPaO4DIZ3Uoigtjb"
            alt="Samvaada team or NMAMIT campus"
            className="w-full h-auto object-cover rounded-xl border border-white/10 shadow-card"
            loading="lazy"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutFea;
