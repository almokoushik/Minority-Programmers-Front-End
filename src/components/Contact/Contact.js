import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

const Contact = () => {
    return (
        <div className="row d-flex justify-content-center align-items-center text-white">
            <div className="col-md-3 col-sm-6 text-start ">
                <h5>Services</h5>
                <a href="#" target="blank" className="text-decoration-none text-light"><p>Consultancy</p> </a>
                <a href="#" target="blank" className="text-decoration-none text-light"><p>Mentorship</p> </a>
                <a href="#" target="blank" className="text-decoration-none text-light"><p>Incubator</p> </a>
                <a href="#" target="blank" className="text-decoration-none text-light"><p>Learn</p> </a>
                <a href="#" target="blank" className="text-decoration-none text-light"><p>DefiSummer</p> </a>

            </div>
            <div className="col-md-3 col-sm-6 text-start">
                <h5>Explore</h5>
                <a href="#" target="blank" className="text-decoration-none text-light"><p>About</p> </a>
                <a href="#" target="blank" className="text-decoration-none text-light"><p>Events</p> </a>
                <a href="#" target="blank" className="text-decoration-none text-light"><p>Join a Course</p> </a>
                <a href="#" target="blank" className="text-decoration-none text-light"><p>Partner</p> </a>
                <a href="#" target="blank" className="text-decoration-none text-light"><p>Career</p> </a>

            </div>
            <div className="col-md-3 col-sm-6 text-start">
                <h5>About</h5>
                <a href="#" target="blank" className="text-decoration-none text-light"><p>Consultancy</p> </a>
                <a href="#" target="blank" className="text-decoration-none text-light"><p>Consultancy</p> </a>
                <a href="#" target="blank" className="text-decoration-none text-light"><p>Consultancy</p> </a>
                <a href="#" target="blank" className="text-decoration-none text-light"><p>Consultancy</p> </a>
                <a href="#" target="blank" className="text-decoration-none text-light"><p>Consultancy</p> </a>

            </div>
            <div className="col-md-3 col-sm-6 text-start">
                <h5>Contact</h5>
                <a href="#" target="blank" className="text-decoration-none d-flex text-light"><p className="me-3">Facebook</p><FacebookIcon fontSize="small"></FacebookIcon></a>
                <a href="#" target="blank" className="text-decoration-none d-flex text-light"><p className="me-3">Linkedin</p> <LinkedInIcon fontSize="small"></LinkedInIcon></a>
                <a href="#" target="blank" className="text-decoration-none d-flex text-light"><p className="me-3">Twitter</p> <TwitterIcon fontSize="small"></TwitterIcon></a>
                <a href="#" target="blank" className="text-decoration-none d-flex text-light"><p className="me-3">Youtube</p><InstagramIcon fontSize="small"></InstagramIcon> </a>
                <a href="#" target="blank" className="text-decoration-none d-flex text-light"><p className="me-3">Instagram</p><YouTubeIcon fontSize="small"></YouTubeIcon> </a>

            </div>
            
        </div>
    );
};

export default Contact;