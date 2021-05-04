import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

const Skills = () => {
    return (
        <div className='mt-5 p-5'>
            <h2 style={{ color: 'white' }} className='text-center'>MY SKILLS</h2>
            <h5>HTML: <ProgressBar completed={85} /></h5>
            <h5>CSS: <ProgressBar completed={80} /></h5>
            <h5>JavaScript: <ProgressBar completed={70} /></h5>
            <h5>React: <ProgressBar completed={70} /></h5>
            <h5>NodeJs: <ProgressBar completed={68} /></h5>
            <h5>MongoDB: <ProgressBar completed={70} /></h5>
        </div>
    );
};

export default Skills;