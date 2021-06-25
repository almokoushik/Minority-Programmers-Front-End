import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import mango from "../../images/mango.png"
import ProgressBar from '../ProgressBar/ProgressBar';

const SingleCardElement = (props) => {
    const history=useHistory()
    const handleClick=()=>{
        history.push(`/startup/${props.props.id}`)

    }
    return (
            <div className="bg bg-white text-dark m-2 p-2 text-start" style={{ borderRadius: "7px" }}>
                <div className="m-2 p-2">
                    <div className="d-flex align-items-center">
                        <img src={mango} alt="" className="me-2" style={{ width: "20%" }} />
                        <h5>{props.props.title}</h5>
                    </div>

                    <p>{props.props.text}</p>

                    <div className="d-flex justify-content-between">
                        <h6>Fund Raise</h6>
                        <p className="text-end">{props.props.completed}% Completed</p>
                    </div>

                    <h5>{props.props.fund}/${props.props.target}</h5>
                    <ProgressBar props={props.props.completed}></ProgressBar>

                    <div className="d-flex justify-content-between">
                        <Button style={{ backgroundColor: "navy" }} className="text-white"> <span className="py-1" style={{ fontSize: "12px" }}>Fund Sturtup</span></Button>
                        <Button  onClick={()=>handleClick()} variant="outlined" color="primary"><span style={{ fontSize: "12px" }} className="py-1">Learn More</span></Button>
                    </div>
                </div>
            </div>
    );
};

export default SingleCardElement;