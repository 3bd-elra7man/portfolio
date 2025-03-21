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
            className="flex items-center gap-3 p-3 mb-3 bg-gray-100 border border-black/5 rounded-2xl hover:bg-gray-200 dark:border-zinc-50/10 dark:bg-zinc-800 dark:hover:bg-zinc-700 group"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
            once: true,
            }}
            custom={index}
          >
        <figure className="bg-white/50 rounded-lg p-2 overflow-hidden w-12 h-12 backdrop-blur-[0.5rem] group-hover:bg-gray-50 dark:bg-zinc-700/50 group-hover:dark:bg-zinc-800 flex-shrink-0">
        <Image 
        src={imgSrc} 
        alt={label} 
        width={32} 
        height={32} 
        />
        </figure>
       <div className='flex flex-col'>
       <h3 className="text-xs text-gray-700 truncate md:text-sm dark:text-white">{label}</h3>
       <p className="text-xs md:text-sm text-zinc-400 dark:text-white/70 line-clamp-2">{desc}</p>
       </div>
      </motion.li>
    </ul>
  )
}