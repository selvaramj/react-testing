import React, { useEffect, useState } from 'react';
import { SkillProps } from './skills.types';

const Skills = (props: SkillProps) => {
  const { skills } = props;
  const [isStarted, setIsStarted] = useState(false);
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setUserLoggedIn(true), 1001);
  }, []);
  return (
    <>
      <ul>{skills?.map((skill, index) => <li key={index}>{skill}</li>)}</ul>
      {isStarted ? (
        <button onClick={() => setIsStarted(false)}>Not started</button>
      ) : (
        <button onClick={() => setIsStarted(true)}>started</button>
      )}
      <p>{isUserLoggedIn ? 'logged in' : 'logged out'}</p>
    </>
  );
};

export default Skills;
