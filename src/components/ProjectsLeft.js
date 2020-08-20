import React from 'react';
import CardProjectsL from './CardProjectsL';
import PomodoroClock from '../assets/projects/PomodoroClock.png';
import DrumMachine from '../assets/projects/DrumMachine.png';
import RandomQuoteMachine from '../assets/projects/RandomQuoteMachine.png';
import FoodMiles from '../assets/projects/FoodMiles.png';
import ProjectFear from '../assets/projects/ProjectFear.png';
import Trainspiration from '../assets/projects/Trainspiration.png';

const ProjectsLeft = () => {
    return (
    <div>
        <CardProjectsL img={PomodoroClock} color="#57699E" textColor="white" title="Pomodoro Clock" techStack="React, JavaScript, HTML, CSS" />
        <CardProjectsL img={DrumMachine} color="#BEEED5" title="Drum Machine" techStack="React, JavaScript, HTML, CSS" />
        <CardProjectsL img={RandomQuoteMachine} color="#DC9404" textColor="white" title="Random Quote Machine" techStack="React, JavaScript, HTML, CSS" />
        <CardProjectsL img={FoodMiles} color="#E6E0DB" title="Food Miles" techStack="HandlebarsJS, Sass, Node.js, Express, PostgreSQL, JavaScript, HTML, CSS" />
        <CardProjectsL img={ProjectFear} color="#344A98" textColor="white" title="Project Fear" techStack="JavaScript, HTML, CSS, Node.js" />
        <CardProjectsL img={Trainspiration} color="#E3DEE0" title="Trainspiration" techStack="JavaScript, HTML, CSS" />
    </div>
    )
}

export default ProjectsLeft;