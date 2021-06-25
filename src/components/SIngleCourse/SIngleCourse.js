import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import CourseAdminSide from '../CourseAdminSide/CourseAdminSide';
import UserInfo from "../UserInfo/UserInfo"
import UserCourseInfo from '../UserCourseInfo/UserCourseInfo';
import course from '../../courses.json'
import CourseModules from "../CourseModules/CourseModules"


const SIngleCourse = () => {
    const [week,setWeek]=useState({})
   
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
                            <CourseAdminSide key={id} props={id}></CourseAdminSide>

                        </div>
                    </div>
                    <div className="col-md-9 col-sm-12" >
                        <div className="w-100 py-5" style={{
                            backgroundImage: "linear-gradient(to right,#FF51CA,#FFC502)",
                            borderRadius: "5px",
                            float: "left",
                        }}> 
                        <UserInfo key={id} props={data[0]}></UserInfo>
                        {/* <UserCourseInfo props={data[0]}></UserCourseInfo> */}
                        </div>

                        <div style={{ backgroundColor:"#151371"}} className="pt-5 pb-1">
                            <div className="text-white row d-flex justify-content-between align-items-center pt-4">
                                <h3 className="col">Modules</h3>
                                <h3 className="col">Calender</h3>
                                <h3 className="col">Messages</h3>

                            </div>
                            <div className="row mt-5 mx-5 px-5 d-flex justify-content-center align-items-center">
                                <CourseModules key={id} props={data[0]}></CourseModules>
                            </div>
                        </div>
                       
                    </div>

                </div>
            }
        </div>
    );
};

export default SIngleCourse;