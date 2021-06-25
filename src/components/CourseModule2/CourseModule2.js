import React, { useContext, useState } from 'react';
import CourseCard3 from '../CourseCard3/CourseCard3';
import { IconButton } from '@material-ui/core';
import { UserContext } from '../../App';
import { useEffect } from 'react';


const CourseModule2 = (props) => {
    // console.log("This is COurse Module2 ", props)

    const [userData, setUserData] = useContext(UserContext)
    console.log("This is CourseStream 0", userData)

    const [data, setData] = useState([])
    useEffect(() => {
        setData(props.props.filter(singleCourse => parseInt(singleCourse.week) === parseInt(userData.week)))
    }, [])

    console.log("This is COurse Module 1", data[0])

    console.log("This is COurse Module2 ",props.props)
    return (
        <div>
        {
            data[0] && <div>
                {
                    data[0].activities.map(activity => <CourseCard3 key={activity.activity} title={activity.title} props={activity}></CourseCard3>)
                }
            </div>
        }
        </div>
    );
};

export default CourseModule2;