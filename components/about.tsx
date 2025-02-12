"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
          I’m an engineering student at{" "}
          <span className="font-medium">IIIT Allahabad</span>, pursuing a degree in{" "}
          <span className="font-medium">Electronics and Communication Engineering (ECE)</span>. 
          I am passionate about <span className="font-medium">software engineering</span> 
          and highly focused on <span className="font-medium">Data Structures & Algorithms (DSA)</span>. 
          I am also actively learning <span className="font-medium">full-stack web development</span>. 
        </p>

        <p className="mb-3">
          <span className="italic">With over two years of experience</span> in{" "}
          <span className="font-medium">UI/UX design and graphic design</span>, 
          I have developed a strong sense of aesthetics and user-friendly design. 
          My core stack is{" "}
          <span className="font-medium">React, Node.js, and MongoDB</span>.{" "}
          I am currently looking for a{" "}
          <span className="font-medium">full-time position</span> as a software developer.
        </p>

        <p>
          <span className="italic">When I'm not coding</span>, I enjoy spending time with 
          <span className="font-medium"> friends and family</span>, watching movies, and 
          exploring my creativity through <span className="font-medium">artwork, design, and painting</span>. 
</p>


    </motion.section>
  );
}
