import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import clubdecinemaImg from "@/public/clubdecinema.webp"
import sanayiImg from "@/public/sanayi.webp"
import landingImg from "@/public/landing.webp"


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
    title: "System Administrator (Pro-Active)",
    field: "Raya Data Center",
    description:
      "Monitor notification and monitoring tools, analyze alerts, and assign cases to technical teams. Provide first-line support for applications and networks, manage scheduled outages, and ensure effective communication with ISPs, internal teams, and impacted customers.",
    icon: React.createElement(CgWorkAlt),
    date: "2025 - present",
  },
  {
    title: "Front-End Internship",
    field: "Web Masters",
    description:
      "I joined Web Masters as a Frontend Development Intern, where I applied my skills to real-world projects, gaining hands-on experience and enhancing my technical expertise.",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
  {
    title: "DEPI",
    field: "React Web Developer",
    description:
      "I successfully completed the Initiative Training Program after six months of intensive study, during which I acquired a range of skills, including mastering React.js from the ground up, as well as Hooks, Redux, React Router, Next.js, and industry best practices.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  }
] as const;

export const projectsData = [
  {
    title: "ClubdeCinema",
    description:
      "Club de Cinema is a movie website where you can find information about your favorite movies and shows.",
    tags: ["React", "React-Router-Dom", "Bootstrap", "Swiper", "Netlify"],
    imageUrl: clubdecinemaImg,
    Link: "https://clubdecinema.netlify.app/"
  },
  {
    title: "Sanayi",
    description:
      "A Service web app Connecting individuals within Egyptian communities by offering and finding services and educational opportunities..",
    tags: ["React", "TailwindCSS", "NodeJs", "Express", "MongoDB"],
    imageUrl: sanayiImg,
    Link: "https://sanayi.vercel.app/"
  },
  {
    title: "Portfolio Landing Page",
    description:
      "A Simple Landing Page for a portfolio with a smooth scroll effect and a responsive design.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    imageUrl: landingImg,
    Link: "https://3bd-elra7man.github.io/landing-page/"
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
    imgSrc: '/github.svg',
    label: 'GitHub',
    desc: 'Git hosting'
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