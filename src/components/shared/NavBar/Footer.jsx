import { FaInstagram, FaFacebook } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

const socials = [
  { icon: FaInstagram, label: "@nmamit_nitte", href: "https://instagram.com/nmamit_nitte" },
  { icon: FaInstagram, label: "@samvaada_nmamit", href: "https://instagram.com/samvaada_nmamit" },
  { icon: FaInstagram, label: "@nmamighty", href: "https://instagram.com/nmamighty" },
  { icon: FaFacebook, label: "@nmamit_nitte", href: "https://facebook.com/nmamit_nitte" },
];

const Footer = () => {
  return (
    <footer className="relative bg-ground-soft text-ink-dim border-t border-white/[0.07] overflow-hidden">
      {/* lens-glow accent line */}
      <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-brand-glow/40 to-transparent" />
      <div className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 w-[50rem] h-[30rem] bg-lens-glow opacity-50" />

      <div className="relative max-w-screen-xl mx-auto px-6 md:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Brand / about */}
          <div className="space-y-5 w-full md:w-1/3">
            <img
              src="https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXPEFRVugwvAQTSePO5RWmirk6BdI0aj74xcuD"
              alt="Samvaada Logo"
              className="h-10"
            />
            <p className="text-sm leading-relaxed max-w-xs text-ink-dim/90">
              Join our tribe of storytellers, creators, and memory-makers — and be
              part of the voice that represents NMAMIT.
            </p>
            <a
              href="https://www.google.com/maps?q=NMAM+Institute+Of+Technology,+Nitte"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-ink transition"
            >
              <MdLocationOn className="text-base text-brand-glow" />
              NMAM Institute Of Technology, Nitte
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=samvaada@nmamit.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-ink transition"
            >
              <MdEmail className="text-base text-brand-glow" />
              samvaada@nmamit.in
            </a>
          </div>

          {/* Quote */}
          <div className="flex items-center md:w-1/3 md:justify-center">
            <p className="font-display text-xl md:text-2xl italic text-ink/80 leading-snug text-center">
              &ldquo;Framing moments that matter, and memories that last.&rdquo;
            </p>
          </div>

          {/* Socials */}
          <div className="w-full md:w-1/3 flex flex-col md:items-end">
            <h3 className="cam-label text-brand-glow mb-5">Follow Us</h3>
            <div className="space-y-3 md:text-right">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center md:justify-end gap-2 text-sm text-ink-dim hover:text-ink transition group"
                >
                  <s.icon className="text-base group-hover:text-brand-glow transition" />
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-5 border-t border-white/[0.07] flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="cam-label !text-[0.55rem]">© 2026 Samvaada · All Rights Reserved</p>
          <p className="cam-label !text-[0.55rem] text-ink-faint">Made with ♥ by Samvaada</p>
          <p className="cam-label !text-[0.55rem] text-ink-faint">
            Crafted by{" "}
            <a
              href="https://instagram.com/uniq_myth"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-dim hover:text-ink underline underline-offset-2"
            >
              Mithun
            </a>{" "}
            {/* &amp;{" "}
            <a
              href="https://www.instagram.com/srujanmpadmashali"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-dim hover:text-ink underline underline-offset-2"
            >
              Srujan
            </a> */}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
