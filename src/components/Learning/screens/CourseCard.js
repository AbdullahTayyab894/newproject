import React from 'react'
import './CourseCard.css'
import { Link } from 'react-router-dom'

const CourseCard = ({ Data }) => {
    console.log("id", Data.id)
    return (
        <>
            <div className='general-parent'>
                <Link to={`/CourseDetail/${Data.id}`} style={{
                    textDecoration: "none"
                }}>
                    <div className='general-child'>
                        <img className='general-img' src={Data.img} />
                        <h1 className='general-name'>{Data.name}</h1>
                        <p className='general-description'>{Data.description}</p>
                        <h2 className='general-instructor'>{Data.instructor}</h2>
                        <h1 className='general-rating'>{Data.rating}</h1>
                        <div className='general-duration-difficulty-price'>
                            <h2 className='general-duration'>{Data.duration}</h2>
                            <h3 className='general-difficulty'>{Data.difficulty}</h3>
                            <h1 className='general-price'>{Data.price}</h1>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default CourseCard