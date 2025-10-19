import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";


const Footer = () => {
  return (
    <footer className="bg-[#121212] text-[#B7CCE0] px-6 py-10">
      {/* <div className="max-w-7xl mx-auto grid grid-cols-1 gap md:grid-cols-3 gap-10"> */}
      <div className=" mx-auto flex flex-col md:flex-row items-start justify-between gap-10">

        {/* Left - Logo and About */}
        <div className="space-y-4 w-full md:w-1/3">
          <img src="https://gbbpj64dws.ufs.sh/f/o9wD7Q4V78YXPEFRVugwvAQTSePO5RWmirk6BdI0aj74xcuD" alt="Samvaada Logo" className="h-10" />
          <p className="text-sm max-w-xs">
            Join our tribe of storytellers, creators, and memory-makers — and be part of the voice that represents NMAMIT.
          </p>
          <div className="flex items-center gap-2">
            <MdLocationOn className="text-lg" />
            <span className="text-sm">NMAM Institute Of Technology, Nitte</span>
          </div>
          <div className="flex items-center gap-2">
            <MdEmail className="text-lg" />
            <span className="text-sm">samvaada@nmamit.in</span>
          </div>
        </div>
        {/* Middle - Quote or Additional Info */}
        <div className="justify-center m-auto text-sm italic text-gray-400">
          "Framing moments that matter, and memories that last."
        </div>

        {/* Right - Socials */}
        {/* <div className="flex-1"> */}

        <div className="w-full sm:w-1/2 lg:w-1/3 flex flex-col items-start sm:items-end space-y-3">
          <div className="space-y-2">
            <h3 className="font-semibold mb-4 text-white">Follow Us</h3>

            <a
              href="https://instagram.com/nmamit_nitte"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-white text-sm transition"
            >
              <FaInstagram className="mr-2" />
              @nmamit_nitte
            </a>

            <a
              href="https://instagram.com/samvaada_nmamit"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-white text-sm transition"
            >
              <FaInstagram className="mr-2" />
              @samvaada_nmamit
            </a>

            <a
              href="https://instagram.com/nmamighty"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-white text-sm transition"
            >
              <FaInstagram className="mr-2" />
              @nmamighty
            </a>

            <a
              href="https://facebook.com/nmamit_nitte"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-white text-sm transition"
            >
              <FaFacebook className="mr-2" />
              @nmamit_nitte
            </a>
          </div>
        </div>

        {/* </div> */}
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-sm text-center flex flex-col md:flex-row items-center justify-between gap-2">
        <p>© 2025 Samvaada. All rights reserved.</p>
        <p>Made with ♥ by Samvaada</p>
        <p>
          Crafted by{" "}
          <a
            href="https://instagram.com/uniq_myth"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#b0b0b0] hover:text-white underline underline-offset-2"
          >
            Mithun
          </a>{" "}
          &{" "}
          <a
            href="https://www.linkedin.com/in/srujanmpadmashali"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#b0b0b0] hover:text-white underline underline-offset-2"
          >
            Srujan
          </a>
        </p>

      </div>
    </footer>
  );
};

export default Footer;