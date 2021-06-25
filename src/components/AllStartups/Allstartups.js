import React from 'react';
import fakeData from "../../fakedata"
import SingleCardElement2 from "../SingleCardElement2/SingleCardElement2"
// console.log(fakeData)

const Allstartups = () => {
    return (
        
                <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-3 col-sm-12 text-start text-white my-2">
                    <h1>Upcoming Startups</h1>
                    <p>These visionary companies and disraptors are on the journey to change the world</p>
                </div>
                    {
                        fakeData.map(data => <SingleCardElement2 key={data.id} props={data}></SingleCardElement2>)

                    }
                </div>

    );
};

export default Allstartups;