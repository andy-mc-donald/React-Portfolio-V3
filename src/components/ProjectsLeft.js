import React from "react";
import CardProjectsL from "./CardProjectsL";
import MeetUpAgain from "../assets/projects/MeetUpAgain.png";
import JavascriptCalculator from "../assets/projects/JavascriptCalculator.png";
import MarkdownPreviewer from "../assets/projects/MarkdownPreviewer.png";
import UpSkillMe from "../assets/projects/UpSkillMe.png";
import BugBears from "../assets/projects/BugBears.png";
import WikipediaCountryLookup from "../assets/projects/WikipediaCountryLookup.png";

const ProjectsLeft = () => {
  return (
    <div>
      <CardProjectsL
        img={MeetUpAgain}
        color="#270066"
        textColor="white"
        title="Meet Up Again"
        techStack="React, Material-UI, Axios & APIs, Geolib, JavaScript, HTML, CSS"
        codeLink="https://github.com/andy-mc-donald/meet-up-again"
        liveLink="https://meet-up-again.netlify.app"
      />
      <CardProjectsL
        img={JavascriptCalculator}
        color="#FBF2EF"
        textColor="#424242"
        title="Javascript Calculator"
        techStack="React, JavaScript, HTML, CSS"
        codeLink="https://github.com/andy-mc-donald/javascript-calculator"
        liveLink="https://andy-mc-donald.github.io/javascript-calculator"
      />
      <CardProjectsL
        img={MarkdownPreviewer}
        color="#425A76"
        textColor="white"
        title="Markdown Previewer"
        techStack="React, Marked.js, JavaScript, HTML, CSS"
        codeLink="https://github.com/andy-mc-donald/markdown-previewer"
        liveLink="https://andy-mc-donald.github.io/markdown-previewer"
      />
      <CardProjectsL
        img={UpSkillMe}
        color="#ECF7FD"
        textColor="#424242"
        title="UpSkillMe"
        techStack="React, Styled Components, Airtable, JavaScript, HTML, CSS"
        codeLink="https://github.com/andy-mc-donald/UpSkillMe"
        liveLink="https://upskillme.io/"
      />
      <CardProjectsL
        img={BugBears}
        color="#E77E0D"
        textColor="white"
        title="Bugbears"
        techStack="JavaScript, HTML, CSS, Node.js, PostgreSQL"
        codeLink="https://github.com/andy-mc-donald/Bugbears"
        liveLink="https://bugbear.herokuapp.com/login-page"
      />
       <CardProjectsL
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

export default ProjectsLeft;
