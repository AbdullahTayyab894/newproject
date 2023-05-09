import React from 'react'
import Slider from "react-slick";
import './CourseSlider.css'
import { Link } from 'react-router-dom';

const CourseSlider = ({ Data }) => {
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
            padding:"30px"
        }}>
            <h3 className='heading'>
                Top Trending Courses
            </h3>
            <div >
                <Slider {...settings}>
                    {Data.map((item) => {
                        {
                            if (item.category === "Trending Course") {
                                return (
                                    <Link to={`/CourseDetail/${item.id}`} className='trending-link'>
                                        <div className='trending-parent' >
                                            <div>
                                                <video className='trending-video' src={item.video} controls/>
                                            </div>
                                            <div>
                                                <div className='trending-detail'>
                                                    <h1 className='trending-name'>{item.name}</h1>
                                                    <p className='trending-description'>{item.description}</p>
                                                    <h2 className='trending-instructor'>{item.instructor}</h2>
                                                    <h2 className='trending-duration'>{item.duration}</h2>
                                                    <div className='trending-rating-difficulty'>
                                                        <h1 className='trending-rating'>{item.rating}</h1>
                                                        <h3 className='trending-difficulty'>{item.difficulty}</h3>
                                                    </div>
                                                    <h1 className='trending-price'>{item.price}</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            }
                        }
                    })}
                </Slider>
            </div>
        </div>
    )
}

export default CourseSlider