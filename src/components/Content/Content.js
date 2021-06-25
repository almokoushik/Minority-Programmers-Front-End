import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import CourseAdminSide from '../CourseAdminSide/CourseAdminSide';
import UserCourseInfo from "../UserCourseInfo/UserCourseInfo"
import course from '../../courses.json'
import CourseModule2 from "../CourseModule2/CourseModule2"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { IconButton } from '@material-ui/core';
import { UserContext } from '../../App';


const Content = (props) => {
    const [userData, setUserData] = useContext(UserContext)
    console.log("This is CourseStream", userData)

    const { id } = useParams()
    const [data, setData] = useState([])
    useEffect(() => {
        setData(course.courses.filter(singleCourse => parseInt(singleCourse.course_id) === parseInt(id)))
    }, [])

    console.log(course)
    console.log(data)
    console.log(id)

    // let total = 0;
    // let completed = 0;

    // if(data[0].weeks){
    //     data[0].weeks.map(data => {
    //         total += parseInt(data.total);
    //         completed += parseInt(data.completed);
    //     })
    // }

    console.log(id)

    return (
        <div>
            {
                data[0] && <div className="row d-flex justify-content-start ">
                    <div className="col-md-3 col-sm-12 text-white" style={{ backgroundColor: "#151371" }}>
                        <div className="text-center mx-4 px-2">
                            <CourseAdminSide key={userData.course} props={userData.course}></CourseAdminSide>

                        </div>
                    </div>
                    <div className="col-md-9 col-sm-12" >
                        <div className="w-100 py-5" style={{
                            backgroundImage: "linear-gradient(to right,#FF51CA,#FFC502)",
                            borderRadius: "5px",
                            float: "left",
                        }}> <UserCourseInfo key={id} props={data[0]}></UserCourseInfo></div>

                        <div style={{ backgroundColor: "#151371" }} className="pt-5 pb-1">
                            {/* <div className="row d-flex justify-content-between align-items-center"> */}
                            <IconButton variant="outlined" className="text-white" style={{ float: "left" }}><ArrowBackIcon></ArrowBackIcon></IconButton>
                            <IconButton variant="outlined" className="text-white" style={{ float: "right" }}><ArrowForwardIcon></ArrowForwardIcon></IconButton>

                            <div className="row mt-5 mx-5 pt-5 px-5 d-flex justify-content-center align-items-center">
                                <CourseModule2 key={id} props={data[0].activities}></CourseModule2>
                            </div>
                        </div>

                    </div>

                </div>
            }
        </div>
    );
};

export default Content;