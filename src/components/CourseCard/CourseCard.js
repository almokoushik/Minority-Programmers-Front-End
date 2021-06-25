import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import ProgressBar from "../ProgressBar/ProgressBar"
import { UserContext } from '../../App';
import { useContext } from 'react';

const CourseCard = (props) => {
    const [userData, setUserData] = useContext(UserContext)

    const history =useHistory()
    let total=0;
    let completed=0;
    props.props.weeks.map(data=>{
        total+=parseInt(data.total);
        completed+=parseInt(data.completed);
    })
    const handleClick=()=>{
        const data={...userData}
        data.course = props.props.course_id;
        setUserData(data)
        history.push(`/course/${props.props.course_id}`)

    }
    return (
        <div>
            <div className="m-2  p-3 text-light" style={{
                backgroundImage: "linear-gradient(to right,#5F5D9D,#27267A)",
                borderRadius: "20px",
            }}>
                <p className="text-end bg"><span className="bg bg-info px-2 bg-light text-dark">Earn ${30}</span> </p>
                <div className="text-start">
                    <h5>{props.props.title}</h5>
                    <h6>{ props.props.describe}</h6>
                </div>
                <Button onClick={()=>handleClick()} varient="outlined" className="text-white  text-center"
                    style={{
                        backgroundImage: "linear-gradient(to right,#FF51CA,#FFC502)",
                        borderRadius: "20px",
                    }}> <h6 className=" mx-5">Learn</h6> </Button>
                <h6 className="text-end">{completed}/{total} Modules</h6>
                <ProgressBar style={{height:"5px"}} props={completed*100/total}></ProgressBar>
                <p className="text-center" >{completed * 100 / total } Completed</p>

            </div>
            
        </div>
    );
};

export default CourseCard;