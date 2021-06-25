import React, { useEffect } from 'react';
import { useState } from 'react';
import globe from "../../images/globe1.png"
import courses from "../../courses.json"
import CourseCard from '../CourseCard/CourseCard';
import Carousel3 from '../Carousel/Carousel3';
import { Button } from '@material-ui/core';



const Learn = () => {
   
    return (
        <div style={{ backgroundColor:"#151371"}}>
            <div>
                <div className=" pe-5 row d-flex justify-content-start align-items-center" style={{
                    backgroundImage: "linear-gradient(to right,#FF51CA,#FFC502)",
                    borderRadius: "5px",
                    float: "left",
                }}>
                    <div className="col-md-4 col-sm-12 d-flex justify-content-start">
                        <img src={globe} alt="" style={{ width: "100%" }} />

                    </div>
                    <div className="col-md-8 col-sm-12 text-end">
                        <div className="pe-5 me-5 my-3"> <h1 className="text-white">Learn High in Demand <br />IT Skills & get Crypto</h1>
                            <h4 className="font font-italic"><i>Powered By <span style={{ color: "navy" }}>KoinStreet</span></i> </h4></div>

                    </div>
                </div>
            </div>

            <div className="row ps-3 ms-3 my-5 pt-5 pb-5">
                <h1 className="text-start text-white ms-3 my-2">My Courses</h1>
                <Carousel3></Carousel3>
            </div>
            <div className="row ps-3 ms-3 my-5 py-3">
                <h1 className="text-start text-white ms-3 my-2">Featured Courses</h1>
                <Carousel3></Carousel3>
            </div>
            <Button className="text-white" color="secondary" variant="outlined" style={{ border: "2px solid white" }}>Learn More</Button>
        </div>
    );
};

export default Learn;