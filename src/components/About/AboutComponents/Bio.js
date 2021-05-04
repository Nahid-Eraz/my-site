import React from 'react';
import { Container } from 'react-bootstrap';

const Bio = () => {
    return (
        <Container>
            <div className='mt-4'>
                <h2 style={{ color: 'white' }} className='text-center'>PERSONAL INFORMATION</h2>
                <div className='row d-flex justify-content-center mt-4'>
                    <div className='col-md-4 p-3'>
                        <h6>First Name: MD Nahidul Islam</h6>
                        <h6>Last Name: Eraz</h6>
                        <h6>Nationality: Bangladeshi</h6>
                        <h6>Language: Bangle(Native), English, Hindi</h6>
                        <h6>Job: Ready to Hire</h6>
                    </div>
                    <div className='col-md-4 p-3'>
                        <h6>Address: H#22, Block-B, Jatrabari, Dhaka - 1362</h6>
                        <h6>Email: nahidulislameraz@gmail.com</h6>
                        <h6>Mobile: +880 152 143 1791</h6>
                        <h6>Zoom: 668 908 1418</h6>
                        <h6>Skype: +8801521431791</h6>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Bio;