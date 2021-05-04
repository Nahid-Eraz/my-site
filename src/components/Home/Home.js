import React from 'react';
import './Home.css';
import myImg from '../../img/me.jpg';
import Footer from '../Footer/Footer';

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

                        <h2>NEED BUTTON</h2>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;