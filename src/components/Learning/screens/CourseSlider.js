import React from 'react'
import './CourseSlider.css'
import { Link } from 'react-router-dom';

const CourseSlider = ({ Data }) => {

    return (
        <div style={{
            padding: "30px"
        }}>
            <div >
                    <Link to={`/CourseDetail/${Data.id}`} className='trending-link'>
                        <div className='trending-parent' >
                            <div>
                                <video className='trending-video' src={Data.video} controls />
                            </div>
                            <div>
                                <div className='trending-detail'>
                                    <h1 className='trending-name'>{Data.name}</h1>
                                    <p className='trending-description'>{Data.description}</p>
                                    <h2 className='trending-instructor'>{Data.instructor}</h2>
                                    <h2 className='trending-duration'>{Data.duration}</h2>
                                    <div className='trending-rating-difficulty'>
                                        <h1 className='trending-rating'>{Data.rating}</h1>
                                        <h3 className='trending-difficulty'>{Data.difficulty}</h3>
                                    </div>
                                    <h1 className='trending-price'>{Data.price}</h1>
                                </div>
                            </div>
                        </div>
                    </Link>
            </div>
        </div>
    )
}

export default CourseSlider