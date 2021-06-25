import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import courses from "../../courses.json"

const Description = (props) => {
    const [userData, setUserData]=useContext(UserContext)
    const [data,setData]=useState({})
   useEffect(()=>{
       setData(courses.courses[parseInt(userData.course) - 1].weeks[parseInt(userData.week) - 1].activities[parseInt(userData.activity) - 1])

   },[])
   console.log(data)
    return (
        <div>
            <div className="m-2 p-2 px-5 text-white" style={{
                backgroundImage: "linear-gradient(to right,#575598,#2A287C)",
                borderRadius: "20px",
            }}>
                <p className="text-end"><span className="bg bg-info">{data.status}</span></p>
                <div className="text-start">
                    <h2>Course-{userData.course} -Week-{userData.week} -Activity-{data.activity} -{data.title}</h2>
                    <h2>About</h2>
                    <p>{ }Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus curabitur id consectetur fringilla. Sed eget hendrerit convallis erat. Sit diam, tincidunt ultricies et mauris morbi. Morbi dolor semper proin eu aenean nunc egestas quam id. Feugiat elit sed erat purus faucibus risus. Elementum velit lorem ullamcorper ultricies velit, massa eu eget. Eget id libero tempus faucibus arcu ullamcorper purus tellus. Vulputate urna cras consectetur cras tellus imperdiet massa lacus at. Facilisis mollis eleifend aenean eget consectetur nisl arcu. Aenean fringilla velit malesuada et non pharetra tristique. Arcu consequat vitae nulla lacus, mattis. Ante diam in dapibus arcu, mauris arcu. Non ultricies nec volutpat dictum. Viverra gravida in egestas congue at vestibulum quis in. Nibh suspendisse mauris volutpat est ultrices mi. Lectus cursus euismod id dictum et eget pharetra in. Purus ullamcorper laoreet mauris pretium lacus ridiculus. Pulvinar vitae elit dignissim vel. Et commodo amet mi, sed vitae enim etiam rutrum bibendum.</p>
                    <h2>About</h2>
                    <p>{ }Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus curabitur id consectetur fringilla. Sed eget hendrerit convallis erat. Sit diam, tincidunt ultricies et mauris morbi. Morbi dolor semper proin eu aenean nunc egestas quam id. Feugiat elit sed erat purus faucibus risus. Elementum velit lorem ullamcorper ultricies velit, massa eu eget. Eget id libero tempus faucibus arcu ullamcorper purus tellus. Vulputate urna cras consectetur cras tellus imperdiet massa lacus at. Facilisis mollis eleifend aenean eget consectetur nisl arcu. Aenean fringilla velit malesuada et non pharetra tristique. Arcu consequat vitae nulla lacus, mattis. Ante diam in dapibus arcu, mauris arcu. Non ultricies nec volutpat dictum. Viverra gravida in egestas congue at vestibulum quis in. Nibh suspendisse mauris volutpat est ultrices mi. Lectus cursus euismod id dictum et eget pharetra in. Purus ullamcorper laoreet mauris pretium lacus ridiculus. Pulvinar vitae elit dignissim vel. Et commodo amet mi, sed vitae enim etiam rutrum bibendum.</p>
                </div>

            </div>
            
        </div>
    );
};

export default Description;