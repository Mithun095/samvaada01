import { motion } from "framer-motion";

/**
 * Clean section header: a small kicker label + a display title.
 * Animates in on scroll.
 */
const SectionHeading = ({ kicker, title, align = "center" }) => {
  const isCenter = align === "center";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col gap-2.5 ${isCenter ? "items-center text-center" : "items-start text-left"}`}
    >
      <span className="cam-label !text-[0.7rem] text-brand-glow/90">{kicker}</span>
      <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold ink-gradient leading-tight">
        {title}
      </h2>
    </motion.div>
  );
};

export default SectionHeading;
