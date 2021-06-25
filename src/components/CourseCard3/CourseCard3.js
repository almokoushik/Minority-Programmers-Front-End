import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import ProgressBar from "../ProgressBar/ProgressBar"
import { UserContext } from '../../App';
import { useContext } from 'react';
import video from "../../images/video.png"


const CourseCard3 = (props) => {
    const [userData, setUserData] = useContext(UserContext)
    console.log("This is CArd",userData)
    const history = useHistory()
    let total = 0;
    let completed = 0;

    // props.props.weeks.map(data => {
    //     total += parseInt(data.total);
    //     completed += parseInt(data.completed);
    // })
    const handleClick = (e) => {
        const data = { ...userData }
        data.activity = props.props.activity;
        setUserData(data)
        history.push(`/contents/details/${props.props.activity}`)
        // alert("I am clicked")
        // e.preventDefault();
        // history.push(`/course/${props.props.course_id}`)

    }
    console.log("This is coursecard3", props)
    return (
        <div>
            <div onClick={() => handleClick()} className="mx-2 my-2 py-1 px-3 text-light" style={{
                backgroundImage: "linear-gradient(to right,#5F5D9D,#27267A)",
                borderRadius: "20px",
            }}>
                <p className="text-end bg"><span className="bg bg-info px-2 bg-light text-dark">{props.props.status}</span> </p>
                <div className="d-flex justify-content-start align-items-center text-start">
                    <img src={video} style={{ width: "25%" }} alt="" className="pb-2" />
                    <h4 className="ms-4">Week -{userData.week} Task -{props.props.activity}- {props.props.title}</h4>
                </div>
            </div>

        </div>
    );
};

export default CourseCard3;