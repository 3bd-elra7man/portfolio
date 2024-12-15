import React from 'react'
import { skillsData } from '@/lib/data'
import { motion } from 'framer-motion'
import Image from 'next/image';

type SkillProps = (typeof skillsData)[number] & { index: number };

const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.07 * index,
      },
    }),
  };
export default function Skillcard({
    imgSrc,
    label,
    desc,
    index, } : SkillProps) {
  return (
    <ul>
      <motion.li
            className="flex items-center mb-3 gap-3 border border-black/5 bg-gray-100 rounded-2xl p-3 hover:bg-gray-200 dark:border-zinc-50/10 dark:bg-zinc-800 dark:hover:bg-zinc-700 group"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
            once: true,
            }}
            custom={index}
          >
        <figure className="bg-white/50 rounded-lg p-2 overflow-hidden w-12 h-12 backdrop-blur-[0.5rem] group-hover:bg-gray-50 dark:bg-zinc-700/50 group-hover:dark:bg-zinc-800">
        <Image 
        src={imgSrc} 
        alt={label} 
        width={32} 
        height={32} 
        />
        </figure>
       <div>
       <h3 className="text-gray-700 dark:text-white">{label}</h3>
       <p className="text-zinc-400 text-sm dark:text-white/70">{desc}</p>
       </div>
      </motion.li>
    </ul>
  )
}