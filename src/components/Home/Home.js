import React from 'react';
import { Button } from 'react-bootstrap';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div className="w-100" style={{
            backgroundImage: "linear-gradient(to right,#FF51CA,#FFC502)",
            borderRadius: "5px",
            float: "left",
        }}>
            <div className="px-3 py-5 m-5 text-start text-white">
                <h1>MINORITY PROGRAMMERS ASSOCIATION</h1>
                <h3>Code, Culture, and Community.</h3>
                <Button  variant="contained" className="bg bg-light my-3" color="primary"><h6 className="mt-1">JOIN NOW</h6></Button>
            </div>

            
            <div className="" style={{ backgroundColor:"#151371"}}>
                <div className="px-3 pt-5 mx-5 py-5">
                    <Contact></Contact>

                </div>
               

            </div>

        </div>
    );
};

export default Home;