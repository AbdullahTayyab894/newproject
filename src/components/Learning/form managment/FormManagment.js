import React from 'react'
import MainSection from '../main/MainSection'
import CategoryButton from '../category button/CategoryButton'
import CourseSlider from '../screens/CourseSlider'
import CourseCard from '../screens/CourseCard'
import { Data } from '../CoursesAPI'
import Slider from "react-slick";
import './FormManagment.css'


const FormManagment = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className='form-managment-parent'>
            <MainSection />
            <CategoryButton />
            <div className='form-managment-child1'>
                <h1 className='trending-heading' style={{
                    fontSize:"25px",
                    fontFamily:"San Serif"
                }}>Top Trending Farm Management Courses</h1>
                <Slider {...settings}>

                    {
                        Data.map((item) => {
                            if (item.category === "Form Management")
                                return (
                                    <CourseSlider Data={item} />
                                )
                        })
                    }
                </Slider>
            </div>
            <div className='form-managment-child2'>
                {
                    Data.map((item) => {
                        if (item.category === "Form Management")
                            return (
                                <CourseCard Data={item} />
                            )
                    })
                }
            </div>
        </div>
    )
}

export default FormManagment