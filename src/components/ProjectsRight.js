import React from "react";
import CardProjectsR from "./CardProjectsR";
import JavascriptCalculator from "../assets/projects/JavascriptCalculator.png";
import MarkdownPreviewer from "../assets/projects/MarkdownPreviewer.png";
import UpSkillMe from "../assets/projects/UpSkillMe.png";
import BugBears from "../assets/projects/BugBears.png";
import WikipediaCountryLookup from "../assets/projects/WikipediaCountryLookup.png";

const ProjectsRight = () => {
  return (
    <div>
      <CardProjectsR
        img={JavascriptCalculator}
        color="#FBF2EF"
        textColor="#424242"
        title="Javascript Calculator"
        techStack="React, JavaScript, HTML, CSS"
        codeLink="https://github.com/andy-mc-donald/javascript-calculator"
        liveLink="https://andy-mc-donald.github.io/javascript-calculator"
      />
      <CardProjectsR
        img={MarkdownPreviewer}
        color="#425A76"
        textColor="white"
        title="Markdown Previewer"
        techStack="React, JavaScript, HTML, CSS"
        codeLink="https://github.com/andy-mc-donald/markdown-previewer"
        liveLink="https://andy-mc-donald.github.io/markdown-previewer"
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
      <CardProjectsR
        img={BugBears}
        color="#E77E0D"
        textColor="white"
        title="Bugbears"
        techStack="JavaScript, HTML, CSS, Node.js, PostgreSQL"
        codeLink="https://github.com/andy-mc-donald/Bugbears"
        liveLink="https://bugbear.herokuapp.com/login-page"
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
    </div>
  );
};

export default ProjectsRight;
