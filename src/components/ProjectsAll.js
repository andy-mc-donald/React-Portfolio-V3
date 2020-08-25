import React from "react";
import CardProjectsL from "./CardProjectsL";
import CardProjectsR from "./CardProjectsR";
import PomodoroClock from "../assets/projects/PomodoroClock.png";
import DrumMachine from "../assets/projects/DrumMachine.png";
import RandomQuoteMachine from "../assets/projects/RandomQuoteMachine.png";
import FoodMiles from "../assets/projects/FoodMiles.png";
import ProjectFear from "../assets/projects/ProjectFear.png";
import Trainspiration from "../assets/projects/Trainspiration.png";
import JavascriptCalculator from "../assets/projects/JavascriptCalculator.png";
import MarkdownPreviewer from "../assets/projects/MarkdownPreviewer.png";
import UpSkillMe from "../assets/projects/UpSkillMe.png";
import BugBears from "../assets/projects/BugBears.png";
import WikipediaCountryLookup from "../assets/projects/WikipediaCountryLookup.png";

const ProjectsAll = () => {
  return (
    <div>
      <CardProjectsL
        img={PomodoroClock}
        color="#57699E"
        textColor="white"
        title="Pomodoro Clock"
        techStack="React, JavaScript, HTML, CSS"
      />
      <CardProjectsR
        img={JavascriptCalculator}
        color="#FBF2EF"
        textColor="#424242"
        title="Javascript Calculator"
        techStack="React, JavaScript, HTML, CSS"
      />
      <CardProjectsL
        img={DrumMachine}
        color="#BEEED5"
        textColor="#424242"
        title="Drum Machine"
        techStack="React, JavaScript, HTML, CSS"
      />
      <CardProjectsR
        img={MarkdownPreviewer}
        color="#425A76"
        textColor="white"
        title="Markdown Previewer"
        techStack="React, JavaScript, HTML, CSS"
      />
      <CardProjectsL
        img={RandomQuoteMachine}
        color="#DC9404"
        textColor="white"
        title="Random Quote Machine"
        techStack="React, JavaScript, HTML, CSS"
      />
      <CardProjectsR
        img={UpSkillMe}
        color="#ECF7FD"
        textColor="#424242"
        title="UpSkillMe"
        techStack="React, Styled Components, Airtable, JavaScript, HTML, CSS"
        codeLink="https://github.com/andy-mc-donald/UpSkillMe"
        liveLink="https://upskillme.io/"
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
      <CardProjectsR
        img={BugBears}
        color="#E77E0D"
        textColor="white"
        title="Bugbears"
        techStack="JavaScript, HTML, CSS, Node.js, PostgreSQL"
        codeLink="https://github.com/andy-mc-donald/Bugbears"
        liveLink="https://bugbear.herokuapp.com/login-page"
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
      <CardProjectsR
        img={WikipediaCountryLookup}
        color="#E0E0E0"
        textColor="#424242"
        title="Wikipedia Country Lookup"
        techStack="JavaScript, HTML, CSS, Node.js"
        codeLink="https://github.com/andy-mc-donald/Wikipedia-Country-Lookup"
        liveLink="https://meia-fac17.herokuapp.com/"
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

export default ProjectsAll;
