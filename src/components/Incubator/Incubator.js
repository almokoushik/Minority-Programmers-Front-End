import { Button } from '@material-ui/core';
import React from 'react';
import bg from "../../images/bg.png"
import AllStartups from '../AllStartups/Allstartups';
import Carousel from '../Carousel/Carousel';
import Events from "../Events/Events"

const Incubator = () => {
    
    return (
        <div >
            <div className=" text-white py-5  row d-flex justify-content-end align-items-center" style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"  }}>
                <div className="col col-md-6 col-sm-12 my-3">
                   <div className="mx-5">
                       <div className="py-3 mx-2 text-start">
                            <h1>Invest Directly into <br /> minority innovations</h1>
                       </div>                       
                        <div className="d-flex justify-content-start">
                            <Button className="text-white pt-3 pb-2 px-5 text-center mx-2 " style={{
                                backgroundImage: "linear-gradient(to right,#FF51CA,#FFC502)",
                                borderRadius: "5px",
                                float: "left",
                            }}> <h6 className="text-start">View Startups</h6> </Button>
                        </div>
                   </div>
                </div>
            </div>
            <div style={{ backgroundImage: "linear-gradient(to right,#FF51CA,#FFC502)"}}>
                <div className="row mx-5 ps-3  py-5 d-flex justify-content-between align-items-center">
                   
                    <div className="col-md-3 col-sm-12 text-start text-white my-3">
                        <h1>Featured startups</h1>
                        <p>Invest In the Next <br/> billion Dollar <br/>Company Today</p>
                    </div>

                    <div className="col-md-9 col-sm-12 my-3">
                       <div className="row d-flex justify-content-center align-items-center">
                            <Carousel></Carousel>
                       </div>

                    </div>
                </div>
            <div className="ms-5 ps-5 me-4 pe-3   py-5 d-flex justify-content-center align-items-center">
                <Events></Events>
            </div>
                <div className=" mx-5 ps-5 pe-3 d-flex justify-content-center align-items-center">
                    <AllStartups></AllStartups>

                </div>
                <Button variant="outlined" color="primary" className="my-4" style={{ border: "2px solid white" }}><span style={{ fontSize: "12px" }} className="py-1 text-white px-5"><h6>Learn More</h6> </span></Button>
            </div>
            
        </div>
    );
};

export default Incubator;