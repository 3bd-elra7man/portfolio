"use client";
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { HiDownload, HiOutlineMail } from "react-icons/hi";
import useSectionInView from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const {setTimeOfLastClick, setActiveSection} = useActiveSectionContext();
  return (
    <section ref={ref} id='home' className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
        <div className="flex items-center justify-center">
            <div className='relative'>
                <motion.div
                initial={{opacity: 0, scale: 0}}
                animate={{opacity: 1, scale: 1}}
                transition={{type: "tween", duration: 0.2}}
                >
                <Image 
                src="/pic.webp" alt="avatar" width="192" height="192" quality="95" priority={true} className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"/>
                </motion.div>
                <motion.span 
                className='text-3xl absolute bottom-0 right-0'
                initial={{opacity: 0, scale: 0}}
                animate={{opacity: 1, scale: 1}}
                transition={{type: "spring", stiffness: 125, duration: 0.7, delay: 0.1}}
                >
                    👋
                </motion.span>
            </div>
        </div>
        <motion.h1 
        className='mb-10 mt-5 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl'
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        >
        <span className="font-bold">Hello, I'm Abdelrahman.</span> I'm a{" "}
        <span className="font-bold">Front-End developer</span> with{" "}
        <span className="font-bold">A year</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.  
        </motion.h1>
        <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
    <Link
    href="#contact"
    className="group flex items-center gap-2 rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-7 py-3 text-white font-medium animate-shimmer transition-colors outline-none focus:scale-110 hover:scale-110 active:scale-105 focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
    onClick={() => {
    setActiveSection("Contact");
    setTimeOfLastClick(Date.now());
    }}
    >
    Contact me{" "}
    <HiOutlineMail className="opacity-70 scale-110 group-hover:translate-x-1 transition" />
    </Link>
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/abdelrahmanmoh26/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/abdelrahmanmoh26"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>

    </section>
  )
}
