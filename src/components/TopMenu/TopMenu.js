import React from 'react';
import { Button, Form, FormControl, Nav,NavDropdown } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import navimg from "../../images/navimg.png"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const TopMenu = () => {
    return (
        <div>       
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="px-2">
                <Navbar.Brand href="#home">
                    <img src={navimg} alt="" className="w-50 ms-auto ps-auto" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav"className="text-start mx-5">
                    
                        <Nav className="ms-auto text-decoration-none">
                            <Link className="text-decoration-none text-dark mx-2 my-2" to="/"><h6>Home</h6></Link>
                            <Link className="text-decoration-none text-dark mx-2 my-2" to="/incubator"> <h6>Incubator</h6>  </Link>
                            <Link className="text-decoration-none text-dark mx-2 my-2"  to="/learnmore"><h6>Learn More</h6> </Link>
                        </Nav>
                   
                </Navbar.Collapse>
            </Navbar>
            
        </div>    
    );
};

export default TopMenu;