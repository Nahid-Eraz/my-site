import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faMedium, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <Container className="text-center">
                <p><small>Follow Me</small></p>
                <div className="row d-flex justify-content-center">
                    <ul className="media list-inline">
                        <li className="list-inline-item"><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/erazpro/"><FontAwesomeIcon className="icon" icon={faFacebookF} /></a></li>
                        <li className="list-inline-item"><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/eraz_md"><FontAwesomeIcon className="icon" icon={faTwitter} /></a></li>
                        <li className="list-inline-item"><a target="_blank" rel="noopener noreferrer" href="https://github.com/Nahid-Eraz"><FontAwesomeIcon className="icon" icon={faGithub} /></a></li>
                        <li className="list-inline-item"><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/nahid-eraz-55a3811b5/"><FontAwesomeIcon className="icon" icon={faLinkedin} /></a></li>
                        <li className="list-inline-item"><a target="_blank" rel="noopener noreferrer" href="https://medium.com/@nahidulislameraz"><FontAwesomeIcon className="icon" icon={faMedium} /></a></li>
                    </ul>
                </div>
                <div>
                    <p><small>Copyright © {(new Date()).getFullYear()} All Rights Reserved By Nahid Eraz</small></p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;