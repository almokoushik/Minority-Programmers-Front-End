import { Button } from '@material-ui/core';
import React from 'react';
import mango from "../../images/mango.png"
import ProgressBar from '../ProgressBar/ProgressBar';

const SingleCardElement3 = (props) => {
    return (
        <div className="bg bg-light text-dark m-2 p-2 text-start" style={{ borderRadius: "7px" }}>
            <div className="m-2 p-2">
                <div className="d-flex align-items-center">
                    <img src={mango} alt="" className="me-2" style={{ width: "20%" }} />
                    <h5>{props.props.title}</h5>
                </div>

                <div className="d-flex justify-content-between">
                    <h6>Fund Raise</h6>
                    <p className="text-end">{props.props.completed}% Completed</p>
                </div>

                <h5>{props.props.fund}/${props.props.target}</h5>
                <ProgressBar props={props.props.completed}></ProgressBar>

            </div>
        </div>
    );
};

export default SingleCardElement3;