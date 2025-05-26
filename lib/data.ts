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
import gan from "@/public/gan.png"
import ns from "@/public/ns.webp"
import converto from "@/public/converrto.png"
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
    tags: ["React", "MongoDB", "Tailwind", "Node.js", "Redux", "Figma"],
    imageUrl: syncsoc,
    githubLink: "https://github.com/AyushmanSoni/SyncSoc", // Replace with actual link
    liveLink: "https://curious-bunny-3bacff.netlify.app/", // Replace with actual link
  },
  {
    title: "GAN-EchoViewTransform",
    description:
      "A deep learning project to generate A4C echocardiographic images from A2C views using Pix2Pix GAN with U-Net and PatchGAN.",
    tags: ["GenAI", "GAN", "Pix2Pix"],
    imageUrl: gan,
    githubLink: "https://github.com/AyushmanSoni/GAN-EchoViewTransform", // Replace with actual link
    liveLink: "", // Replace with actual link
  },
  {
    title: "ChapterVerse",
    description:
      "Built a full-stack online bookstore, allowing admins to manage books and users to track orders, save favorites, and manage their cart seamlessly.",
    tags: ["React", "MongoDB", "Tailwind", "Node.js", "Figma"],
    imageUrl: chapterverse2,
    githubLink: "https://github.com/AyushmanSoni/Chapterverse", // Replace with actual link
    liveLink: "https://joyful-pony-a97d9a.netlify.app/", // Replace with actual link
  },
  {
    title: "HostelHub",
    description:
      "Hostel room allocation system optimizing assignments with user preferences, featuring secure authentication and efficient data management.",
    tags: ["React", "MongoDB", "Tailwind", "Node.js", "Figma"],
    imageUrl: hostel2,
    githubLink: "https://github.com/AyushmanSoni/HostelHub-Frontend", // Replace with actual link
    liveLink: "", // Replace with actual link
  },
   {
    title: "Converrto Website UI/UX Project",
    description:
      "Responsive SaaS platform with dashboards, subscriptions, app previews, onboarding, and user-centric design.",
    tags: ["UI/UX", "Wireframing", "Figma", "Design", "Typography"],
    imageUrl: converto,
    githubLink: "",
    figmaLink: "https://www.figma.com/design/gZR4ltwrMpfRuHrFJrZMVu/Work?node-id=1-6462&t=5H57YdmjeIiy6RaI-0", // Replace with your actual Figma URL
    liveLink: "",
  },
  {
    title: "NoteShorts App UI/UX Project",
    description:
      "Designed intuitive mobile app with note management, personalized explore, onboarding, and dark mode.",
    tags: ["UI/UX", "Wireframing", "Figma", "Design"],
    imageUrl: ns,
    githubLink: "",
    figmaLink: "https://www.figma.com/design/gZR4ltwrMpfRuHrFJrZMVu/Work?node-id=0-1&p=f&t=5H57YdmjeIiy6RaI-0", // Replace with your actual Figma URL
    liveLink: "",
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
