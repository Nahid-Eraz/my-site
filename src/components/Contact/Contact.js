import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import ContactForm from './ContactForm';
import Footer from '../Footer/Footer';
import { Container } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
            <div className="m-2">
                <h2 style={{ color: 'white' }} className="text-center">GET IN TOUCH</h2>
                <div className="row d-flex justify-content-center mt-5">
                    <div className='col-md-3 me-5 p-5'>
                        <h2>Wanna Work Together</h2>
                        <h6 className="mt-4">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</h6>
                        <Container className='d-flex align-items-center'>
                            <div className='p-3'>
                                <FontAwesomeIcon icon={faEnvelopeOpen} size='3x' />
                            </div>
                            <div className='p-3'>
                                <h4>Mail Me</h4>
                                <h6>nahidulislameraz@gmail.com</h6>
                            </div>
                        </Container>
                        <Container className='d-flex align-items-center'>
                            <div className='p-3'>
                                <FontAwesomeIcon icon={faPhoneAlt} size='3x' />
                            </div>
                            <div>
                                <h4>Contact Me</h4>
                                <h6>+880 1521 431791</h6>
                            </div>
                        </Container>
                    </div>
                    <div className='col-md-5 p-5'>
                        <ContactForm></ContactForm>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;