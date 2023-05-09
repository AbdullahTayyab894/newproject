import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Data } from "../CoursesAPI";
import './FreeCourse.css'
import { Link } from "react-router-dom";

const FreeCourse = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <h2 className="free-heading"> Get Started with Amazing Free Courses</h2>
            <div style={{
                width: "100%",
                display: "flex",
                justifyContent:"space-around",
                margin: "auto"
            }}>
                <div className="free-parent" style={{
                    width: "90%",
                }}>
                    <Slider {...settings}>
                        {
                            Data.map((item) => {
                                {
                                    if (item.category === "Free") {
                                        return (
                                            <Link to={`/CourseDetail/${item.id}`} className="free-link" style={{
                                                textDecoration: "none"
                                            }}>
                                                <div className='free-parent-child' >
                                                    <img className='free-img' src={item.img} />
                                                    <h1 className='free-name'>{item.name}</h1>
                                                    <p className='free-description'>{item.description}</p>
                                                    <h2 className='free-instructor'>{item.instructor}</h2>
                                                    <h2 className='free-duration'>{item.duration}</h2>
                                                    <div className='free-rating-difficulty-paid'>
                                                        <h1 className='free-rating'>{item.rating}</h1>
                                                        <h3 className='free-difficulty'>{item.difficulty}</h3>
                                                        <h1 className='free-price'>{item.price}</h1>
                                                    </div>
                                                    <h1 className="free-ispaid">{item.isPaid}</h1>
                                                </div>
                                            </Link>
                                        );
                                    }
                                }
                            })
                        }
                    </Slider>
                </div>
            </div>
        </>
    );
};

export default FreeCourse;
