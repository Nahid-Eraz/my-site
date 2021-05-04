import React, { useEffect, useState } from 'react';
import HyperSport from '../../img/HyperSport.PNG';
import RiverrRent from '../../img/River-rent.PNG';
import HungryMonster from '../../img/Hungry monster.PNG';
import CruiserQueen from '../../img/CQ.PNG';
import NikeeBD from '../../img/Nikee-bd.PNG';
import PortfolioDetail from './PortfolioDetail';

const projectsData = [
    {
        id: 1,
        name: "Hyper Sports",
        img: HyperSport,
        tech: "React, React Router, React Bootstrap",
        live: 'https://xenodochial-blackwell-703927.netlify.app/'
    },
    {
        id: 2,
        name: "Riverr Rent",
        img: RiverrRent,
        tech: "React, React Router, Bootstrap, Firebase, MongoDB, NodeJS",
        live: 'https://riverr-rent.web.app/'
    },
    {
        id: 3,
        name: "Hungry Monster",
        img: HungryMonster,
        tech: "JavaScript, Bootstrap, HTML, CSS",
        live: 'https://nahid-eraz.github.io/HUngry-Monster/'
    },
    {
        id: 4,
        name: "Cruiser Queen",
        img: CruiserQueen,
        tech: "JavaScript, HTML, CSS",
        live: 'https://nahid-eraz.github.io/Cruise-Queen-Tickets/'
    },
    {
        id: 5,
        name: "Nikee BD",
        img: NikeeBD,
        tech: "HTML, Bootstrap, CSS",
        live: 'https://nahid-eraz.github.io/e-commerce-site-with-reponsive/'
    }
]

const Portfolio = () => {
    const [portfolios, setPortfolios] = useState([]);

    useEffect(() => {
        setPortfolios(projectsData);
    }, []);

    return (
        <div>
            <h2 style={{ color: 'white' }} className='text-center'>MY PROJECTS</h2>
            <div className="row d-flex justify-content-center">
                <div className="w-75 row mt-4 p-5">
                    {
                        portfolios.map(portfolio => <PortfolioDetail portfolio={portfolio}></PortfolioDetail>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Portfolio;