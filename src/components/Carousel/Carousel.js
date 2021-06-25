import React from 'react';
import Slider from "react-slick";
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import { IconButton } from '@material-ui/core';
import fakeData from "../../fakedata"
import SingleCardElement from '../SingleCardElement/SingleCardElement';

const Carousel = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        // initialSlide: 0,

        autoplay:{
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
                        fakeData.map(data => <SingleCardElement key={data.id} props={data}></SingleCardElement>)
                    }               
            </Slider>            
        </div>
    );
};

export default Carousel;