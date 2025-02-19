import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import chapterverse from "@/public/ch2.jpeg"
import chapterverse2 from "@/public/chapterverse.jpeg"
import hostel from "@/public/hostel.jpeg"
import hostel2 from "@/public/hostelhub.jpeg"
import syncsoc from "@/public/main.png"
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "UI/UX Design Internship",
    company: "Wemofy",
    location: "Remote, India",
    description:
      "Completed a 3-month UI/UX design internship, crafting a SaaS website for app design and a mobile app for efficient note-taking.",
      icon: React.createElement(CgWorkAlt),
    date: "April - June 2024",
  },
  // {
  //   title: "Front-End Developer",
  //   location: "Orlando, FL",
  //   description:
  //     "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
  //   icon: React.createElement(CgWorkAlt),
  //   date: "2019 - 2021",
  // },
  // {
  //   title: "Full-Stack Developer",
  //   location: "Houston, TX",
  //   description:
  //     "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
  //   icon: React.createElement(FaReact),
  //   date: "2021 - present",
  // },
] as const;

export const projectsData = [
  {
    title: "SyncSoc",
    description:
      "Built SyncSoc for IIITA societies, streamlining event management and volunteer recruitment while boosting participation and efficiency.",
    tags: ["React", "MongoDB", "Tailwind", "Node.js","Redux","Figma"],
    imageUrl: syncsoc,
  },
  {
    title: "HostelHub.",
    description:
      "Developed a hostel room allocation system optimizing assignments with user preferences, featuring secure authentication and efficient data management.",
    tags: ["React", "MongoDB", "Tailwind" , "Node.js","Figma"],
    imageUrl: hostel2,
  },
  {
    title: "ChapterVerse",
    description:
      "Built a full-stack online bookstore, allowing admins to manage books and users to track orders, save favorites, and manage their cart seamlessly.",
    tags: ["React", "MongoDB", "Tailwind", "Node.js","Figma"],
    imageUrl: chapterverse2,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "GitHub",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "MySQL",
  "Figma",
  "Canva",
  "UI/UX",
] as const;
