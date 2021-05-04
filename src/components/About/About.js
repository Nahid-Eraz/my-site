import React from 'react';
import Footer from '../Footer/Footer';
import Bio from './AboutComponents/Bio';
import Qualification from './AboutComponents/Qualification';
import Skills from './AboutComponents/Skills';

const About = () => {
    return (
        <div>
            <h1 className='text-center'>ABOUT ME</h1>
            <Bio></Bio>
            <Skills></Skills>
            <Qualification></Qualification>
            <Footer></Footer>
        </div>
    );
};

export default About;