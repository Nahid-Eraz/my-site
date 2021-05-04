import React from 'react';
import Footer from '../Footer/Footer';
import Bio from './AboutComponents/Bio';
import Qualification from './AboutComponents/Qualification';
import Skills from './AboutComponents/Skills';

const About = () => {
    return (
        <div>
            <h1 className='mt-5 text-center'><b>ABOUT ME</b></h1>
            <Bio></Bio>
            <Skills></Skills>
            <Qualification></Qualification>
            <Footer></Footer>
        </div>
    );
};

export default About;