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
        // textColor="white"
        title="Javascript Calculator"
        techStack="React, JavaScript, HTML, CSS"
      />
      <CardProjectsL
        img={DrumMachine}
        color="#BEEED5"
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
        // textColor="white"
        title="UpSkillMe"
        techStack="React, Styled Components, Airtable, JavaScript, HTML, CSS"
      />
      <CardProjectsL
        img={FoodMiles}
        color="#E6E0DB"
        title="Food Miles"
        techStack="HandlebarsJS, Sass, Node.js, Express, PostgreSQL, JavaScript, HTML, CSS"
      />
      <CardProjectsR
        img={BugBears}
        color="#E77E0D"
        textColor="white"
        title="Bugbears"
        techStack="JavaScript, HTML, CSS, Node.js, PostgreSQL"
      />
      <CardProjectsL
        img={ProjectFear}
        color="#344A98"
        textColor="white"
        title="Project Fear"
        techStack="JavaScript, HTML, CSS, Node.js"
      />
      <CardProjectsR
        img={WikipediaCountryLookup}
        color="#E0E0E0"
        // textColor="white"
        title="Wikipedia Country Lookup"
        techStack="JavaScript, HTML, CSS, Node.js"
      />
      <CardProjectsL
        img={Trainspiration}
        color="#E3DEE0"
        title="Trainspiration"
        techStack="JavaScript, HTML, CSS"
      />
    </div>
  );
};

export default ProjectsAll;
