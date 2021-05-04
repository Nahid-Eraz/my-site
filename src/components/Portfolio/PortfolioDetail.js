import React from 'react';
import './PortfolioDetail.css'
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLink} from '@fortawesome/free-solid-svg-icons';

const PortfolioDetail = (props) => {
    const { name, img, tech, live } = props.portfolio;

    return (
        <div className='col-md-4 text-center mt-3 p-4 d-flex align-items-center justify-content-around shadow-lg p-3 mb-5 bg-body rounded'>
            <Card className='card-style'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{tech}</Card.Text>
                    <h2>Button NEED</h2>
                </Card.Body>
            </Card>
        </div>
    );
};

export default PortfolioDetail;