import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import useSectionInView from "@/lib/hooks";
import Skillcard from "./skillcard";


export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <div className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {skillsData.map((skill, index) => (
          <React.Fragment key={index}>
            <Skillcard {...skill} index={index} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}