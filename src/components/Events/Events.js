import { Button } from '@material-ui/core';
import React from 'react';
import img1 from "../../images/first.png"
import img2 from "../../images/second.png"
import img3 from "../../images/third.png"
import "./Events.css"

const Events = () => {
    return (
        <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-4 col-sm-12 bgimg my-1" style={{ 
                backgroundImage: `url(${img2})`, 
                backgroundSize:"90%",
                backgroundRepeat: "no-repeat",               
                }}>
                <div className="m-5 p-5" >
                    <Button className="py-2 px-4" variant="outlined" style={{color:"white",border:"2px solid white"}}>Advice a Startup</Button>
                </div>

            </div>
            <div className="col-md-4 col-sm-12 bgimg my-1" style={{
                backgroundImage: `url(${img1})`,
                backgroundSize: "90%",
                backgroundRepeat: "no-repeat",
                }}>
                <div className="m-5 px-5 pb-5 pt-4" >
                    <Button className="py-2 px-3" variant="outlined" style={{ color: "white", border: "2px solid white" }}>Join Minority Ventures Cohort</Button>
                </div>


            </div>
            <div className="col-md-4 col-sm-12 bgimg my-1"
             style={{ backgroundImage: `url(${img3})`,  
                 backgroundSize: "90%",
                 backgroundRepeat: "no-repeat",
             }}>
                <div className="m-5 p-5" >
                    <Button className="py-2 px-4" variant="outlined" style={{ color: "white", border: "2px solid white" }}>Help <code className="text-white ms-1">&lt;Code/&gt;</code> </Button>
                </div>


            </div>

            
        </div>
    );
};

export default Events;