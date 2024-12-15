"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import useSectionInView from "@/lib/hooks";
import SectionDivider from "./section-divider";

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
      After earning my degree in{" "}
        <span className="font-medium">Electrical Engineering</span>,  I transitioned into programming through the{" "}
        <span className="font-medium">Digital Egypt Pioneers Initiative</span>.{" "}focusing on{" "}
        <span className="italic">React web development.</span>  I enjoy creating and designing applications, turning ideas into reality. My core stack includes <span className="underline">React & Next.js</span> with experience in Node.js and MongoDB, and familiarity with <span className="font-medium">TypeScript.</span>{" "}I am eager to learn new technologies and seek a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
    </motion.section>
  );
}