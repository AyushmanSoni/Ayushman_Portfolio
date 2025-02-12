"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import myimage from "@/public/my4.jpeg"

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 mt-12 max-w-[60rem] mx-auto text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
        {/* Text Content - Left Half */}
        <div className="sm:w-3/5 sm:text-left text-center">
          <motion.h1
            className="mb-6 mt-4 px-4 text-3xl font-medium !leading-[1.5] sm:text-3xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="font-bold">Hello, I'm Ayushman Soni.</span> <br />
            I'm a <span className="font-bold">Web Developer</span>. <br />
            And a <span className="font-bold">UI/UX Designer</span>.
          </motion.h1>

          <motion.div
            className="text-base text-gray-600 dark:text-gray-400 px-4 space-y-2"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <p>Passionate about crafting seamless digital experiences.
            <p>Let's build something amazing together!</p>
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium mt-4"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Link
              href="#contact"
              className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              Contact {" "}
              <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
            </Link>

            <a
              className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
              href="https://drive.google.com/file/d/1ayFISK-zACjxvCnLySXBnPe_j6xSXlXp/view?usp=sharing"
              target="_blank"
            >
              CV{" "}
              <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
            </a>

            <a
              className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
              href="https://www.linkedin.com/in/ayushman-soni"
              target="_blank"
            >
              <BsLinkedin />
            </a>

            <a
              className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
              href="https://github.com/AyushmanSoni"
              target="_blank"
            >
              <FaGithubSquare />
            </a>
          </motion.div>
        </div>

        {/* Circular Image - Right Half */}
        <motion.div
          className="sm:w-2/5 flex justify-center relative"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween", duration: 0.2 }}
        >
          <div className="relative w-72 h-72 rounded-full border-[0.35rem] border-white shadow-xl overflow-hidden">
            <Image
              src={myimage}
              alt="Ayushman Soni portrait"
              layout="fill"
              objectFit="cover"
              priority={true}
            />
          </div>
          {/* Waving Hand Emoji Outside the Image */}
          <motion.span
            className="absolute -bottom-8 -right-8 text-6xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 125, delay: 0.1, duration: 0.7 }}
          >
            👋
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}