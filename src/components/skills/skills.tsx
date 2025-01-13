import React from "react";
import { SkillProps } from "./skills.types";

const Skills = (props: SkillProps) => {
  const { skills } = props;
  return (
    <ul>
      {skills?.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  );
};

export default Skills;
