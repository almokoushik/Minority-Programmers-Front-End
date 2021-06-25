import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import course from "../../courses.json"
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { IconButton } from '@material-ui/core';
import { UserContext } from '../../App';
import { useContext } from 'react';

const CourseAdminSide = (props) => {
    const [userData, setUserData] = useContext(UserContext)
    const history = useHistory()
    const [courseInfo, setCourseInfo] = useState({})
    console.log(props.props)
    console.log(course)
    useEffect(() => {
        setCourseInfo(course.courses.filter(singleCourse => parseInt(singleCourse.course_id) === parseInt(props.props)))
    }, [])
    console.log(courseInfo[0])

    const handleClick=()=>{
            history.push("/learnmore")
       
    }
    return (
        <div>
           <div className="text-start d-flex justify-content-start align-items-center my-3">
                <IconButton className=" bg bg-light" onClick={()=>handleClick()}><ArrowBackIosIcon></ArrowBackIosIcon></IconButton>
                <h5 className="ms-2">Courses</h5>
           </div>

            {
                courseInfo[0] && <div className="row d-flex justify-content-between align-items-center">
                    <h5>{courseInfo[0].title}</h5>

                    {
                        courseInfo[0].weeks.map(week => {
                            return <div className="text-start my-3 col-sm-6 col-md-12">
                                
                                <h5>Week {week.week}</h5>
                               {
                                   week.activities.map(activity=>{
                                       return <div className="d-flex justify-content-start align-items-center">
                                           <CheckCircleOutlineIcon className={`${activity.status === "completed" ? "text-success":""}`} fontSize="small"></CheckCircleOutlineIcon>
                                           <h6 className="ms-2">{activity.title}</h6>
                                       </div>
                                   })
                               }
                                </div>
                        })
                    }
                    </div>

            }

        </div>
    );
};

export default CourseAdminSide;