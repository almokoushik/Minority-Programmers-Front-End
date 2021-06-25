import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import ProgressBar from "../ProgressBar/ProgressBar"
import { UserContext } from '../../App';
import { useContext } from 'react';


const CourseCard2 = (props) => {
    const [userData, setUserData] = useContext(UserContext)
    const history = useHistory()
    let total = 0;
    let completed = 0;

    // props.props.weeks.map(data => {
    //     total += parseInt(data.total);
    //     completed += parseInt(data.completed);
    // })
    const handleClick = (e) => {
        const data = { ...userData }
        data.week = props.props.week;
        setUserData(data)
        history.push(`/week/${props.props.week}`)
        // alert("I am clicked")
        // e.preventDefault();
        // history.push(`/course/${props.props.course_id}`)

    }
    console.log(props)
    return (
        <div>
            <div onClick={()=>handleClick()} className="mx-2 my-2 py-1 px-3 text-light" style={{
                backgroundImage: "linear-gradient(to right,#5F5D9D,#27267A)",
                borderRadius: "20px",
            }}>
                <p className="text-end bg"><span className="bg bg-info px-2 bg-light text-dark">{parseInt(props.props.completed * 100 / props.props.total)}% Completed</span> </p>
                <div className="text-start">
                    <h5>Week  {props.props.week} -{props.title}</h5>
                </div>
                <h6 className="text-end">{parseInt(props.props.completed*100/props.props.total)} Modules</h6>
                <ProgressBar style={{ height: "5px" }} props={props.props.completed * 100 / props.props.total}></ProgressBar>
                <p className="text-center" >{props.props.completed * 100 / props.props.total} Completed</p>

            </div>

        </div>
    );
};

export default CourseCard2;