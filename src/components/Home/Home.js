import React from 'react';
import './Home.css';
import myImg from '../../img/me.jpg';
import Footer from '../Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    return (
        <div>
            <div className="m-3  text-center">
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-md-6 p-5">
                        <img className='img-fluid' src={myImg} alt="" />
                    </div>
                    <div className="col-md-5">
                        <h1 style={{ color: 'white' }} className="heading-text"><b>- I'm <span className='text-dark'>Nahid Eraz</span></b></h1>
                        <h1 style={{ color: 'white' }}><b><span className='text-dark'>Front-End</span></b> Web Developer</h1>
                        <h5 className="text-secondary">Focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</h5>
                        
                        <div className='d-flex justify-content-evenly'>
                            <div className="buttons">
                                <div className="btn-container">
                                    <a href="https://drive.google.com/uc?export=download&id=13he56TWY3mfQ5H_WKzfr7GJeNaQAbtm5" class="btn effect01"><span>Download Resume <FontAwesomeIcon icon={faDownload} /></span></a>
                                </div>
                            </div>
                            <div className="buttons">
                                <div className="btn-container">
                                    <a href="/about" className="btn effect01"><span>More About Me <FontAwesomeIcon icon={faArrowRight} /></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;