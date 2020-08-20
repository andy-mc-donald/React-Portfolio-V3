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
        // textColor="white"
        title="Javascript Calculator"
        techStack="React, JavaScript, HTML, CSS"
      />
      <CardProjectsR
        img={MarkdownPreviewer}
        color="#425A76"
        textColor="white"
        title="Markdown Previewer"
        techStack="React, JavaScript, HTML, CSS"
      />
      <CardProjectsR
        img={UpSkillMe}
        color="#ECF7FD"
        // textColor="white"
        title="UpSkillMe"
        techStack="React, Styled Components, Airtable, JavaScript, HTML, CSS"
      />
      <CardProjectsR
        img={BugBears}
        color="#E77E0D"
        textColor="white"
        title="Bugbears"
        techStack="JavaScript, HTML, CSS, Node.js, PostgreSQL"
      />
       <CardProjectsR
        img={WikipediaCountryLookup}
        color="#E0E0E0"
        // textColor="white"
        title="Wikipedia Country Lookup"
        techStack="JavaScript, HTML, CSS, Node.js"
      />
    </div>
  );
};

export default ProjectsRight;
