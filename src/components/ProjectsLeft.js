import React from "react";
import CardProjectsL from "./CardProjectsL";
import PomodoroClock from "../assets/projects/PomodoroClock.png";
import DrumMachine from "../assets/projects/DrumMachine.png";
import RandomQuoteMachine from "../assets/projects/RandomQuoteMachine.png";
import FoodMiles from "../assets/projects/FoodMiles.png";
import ProjectFear from "../assets/projects/ProjectFear.png";
import Trainspiration from "../assets/projects/Trainspiration.png";

const ProjectsLeft = () => {
  return (
    <div>
      <CardProjectsL
        img={PomodoroClock}
        color="#57699E"
        textColor="white"
        title="Pomodoro Clock"
        techStack="React, JavaScript, HTML, CSS"
        codeLink="https://github.com/andy-mc-donald/pomodoro-clock"
        liveLink="https://andy-mc-donald.github.io/pomodoro-clock"
      />
      <CardProjectsL
        img={DrumMachine}
        color="#BEEED5"
        textColor="#424242"
        title="Drum Machine"
        techStack="React, JavaScript, HTML, CSS"
        codeLink="https://github.com/andy-mc-donald/drum-machine"
        liveLink="https://andy-mc-donald.github.io/drum-machine"
      />
      <CardProjectsL
        img={RandomQuoteMachine}
        color="#DC9404"
        textColor="white"
        title="Random Quote Machine"
        techStack="React, JavaScript, HTML, CSS"
        codeLink="https://github.com/andy-mc-donald/random-quote-machine"
        liveLink="https://andy-mc-donald.github.io/random-quote-machine"
      />
      <CardProjectsL
        img={FoodMiles}
        color="#E6E0DB"
        textColor="#424242"
        title="Food Miles"
        techStack="HandlebarsJS, Sass, Node.js, Express, PostgreSQL, JavaScript, HTML, CSS"
        codeLink="https://github.com/andy-mc-donald/Food-Miles"
        liveLink="https://food-miles-fac17.herokuapp.com"
      />
      <CardProjectsL
        img={ProjectFear}
        color="#344A98"
        textColor="white"
        title="Project Fear"
        techStack="JavaScript, HTML, CSS, Node.js"
        codeLink="https://github.com/andy-mc-donald/Project-Fear"
        liveLink="https://week-5-dgjm.herokuapp.com/"
      />
      <CardProjectsL
        img={Trainspiration}
        color="#E3DEE0"
        textColor="#424242"
        title="Trainspiration"
        techStack="JavaScript, HTML, CSS"
        codeLink="https://github.com/andy-mc-donald/Trainspiration"
        liveLink="https://fac-17.github.io/week-3-MEIA/"
      />
    </div>
  );
};

export default ProjectsLeft;
