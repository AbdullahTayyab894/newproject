import React from 'react'
import { Data } from '../CoursesAPI'
import CourseSlider from '../screens/CourseSlider';
import Slider from "react-slick";

const TrendingCourse = () => {
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
        <div style={{
            width:"98%",
            marginBottom: "40px"
        }}>
            <h1 className='general-heading' style={{
                fontSize:"35px",
                fontFamily:"san serif"
            }}>Top Trending Farm Management Courses</h1>
            <Slider {...settings}>

                {
                    Data.map((item) => {
                        if (item.category === "Trending Course")
                            return (
                                <CourseSlider Data={item} />
                            )
                    })
                }
            </Slider>
        </div>
    )
}

export default TrendingCourse