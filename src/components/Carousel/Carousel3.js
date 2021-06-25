import React from 'react';
import Slider from "react-slick";
import { useState } from 'react';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import { IconButton } from '@material-ui/core';
import fakeData from "../../fakedata"
import CourseCard from '../CourseCard/CourseCard';
import { useEffect } from 'react';
import courses from "../../courses.json"

const Carousel3 = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        setData(courses.courses)
        


    }, [])
    console.log(data)
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        // initialSlide: 0,

        autoplay: {
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000,
        },

        // nextArrow: <ArrowForwardRoundedIcon></ArrowForwardRoundedIcon>,
        // prevArrow: <ArrowBackRoundedIcon></ArrowBackRoundedIcon>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    // console.log(fakeData)
    return (
        <div>
            <Slider {...settings}>
                {
                    data.map(data =><CourseCard key={data.course_id} props={data}></CourseCard>)
                }
            </Slider>
        </div>
    );
};

export default Carousel3;