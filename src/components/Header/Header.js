import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Navbar.Brand href="/"><h2 className="text-dark">𝕹𝖆𝖍𝖎𝖉 𝕰𝖗𝖆𝖟</h2></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav className="pe-auto">
                        <Nav.Link className="pr-3" href="/home">Home</Nav.Link>
                        <Nav.Link className="pr-3" href="/about">About</Nav.Link>
                        <Nav.Link className="pr-3" href="/portfolio">Portfolio</Nav.Link>
                        <Nav.Link className="pr-3" href="/blogs">Blogs</Nav.Link>
                        <Nav.Link className="pr-3" href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;