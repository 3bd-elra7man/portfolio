import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Graduated from AASTMT",
    field: "Electrical Engineering",
    description:
      "Shortly after graduation, I made the decision to pursue a career as a front-end developer and immediately began self-directed learning to achieve this goal.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "DEPI",
    field: "React Web Developer",
    description:
      "I successfully completed the Initiative Training Program after six months of intensive study, during which I acquired a range of skills, including mastering React.js from the ground up, as well as Hooks, Redux, React Router, Next.js, and industry best practices.",
    icon: React.createElement(FaReact),
    date: "2024",
  },
  {
    title: "Front-End Internship",
    field: "Web Masters",
    description:
      "I joined Web Masters as a Frontend Development Intern, where I applied my skills to real-world projects, gaining hands-on experience and enhancing my technical expertise.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  {
    imgSrc: '/html.svg',
    label: 'Html',
    desc: 'Web Structure'
  },
  {
    imgSrc: '/css3.svg',
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: '/typescript.svg',
    label: 'TypeScript',
    desc: 'Typed JavaScript'
  },
  {
    imgSrc: '/nextjs.svg',
    label: 'NextJS',
    desc: 'React Framework'
  },
  {
    imgSrc: '/react.svg',
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: '/redux.svg',
    label: 'Redux',
    desc: 'Manage State'
  },
  {
    imgSrc: '/git.svg',
    label: 'Git',
    desc: 'Version Control'
  },
  {
    imgSrc: '/figma.svg',
    label: 'Figma',
    desc: 'Design tool'
  },
  {
    imgSrc: '/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/bootstrap.svg',
    label: 'Bootstrap',
    desc: 'User Interface'
  },
  {
    imgSrc: '/framer-motion.svg',
    label: 'Framer-Motion',
    desc: 'Animation Library'
  },
] as const;