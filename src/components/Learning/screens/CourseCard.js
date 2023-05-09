import React from 'react'
import './CourseCard.css'
import { Link } from 'react-router-dom'

const CourseCard = ({Data}) => {
    return (
        <>
            <h1 className='general-heading'>General Categories Courses</h1>
            <div className='general-parent'>
                {
                    Data.map((item) => {
                        if (item.category === "general category") {
                            return (
                                <Link to={`/CourseDetail/${item.id}`} style={{
                                    textDecoration:"none"
                                }}>
                                    <div className='general-child'>
                                        <img className='general-img' src={item.img} />
                                        <h1 className='general-name'>{item.name}</h1>
                                        <p className='general-description'>{item.description}</p>
                                        <h2 className='general-instructor'>{item.instructor}</h2>
                                        <h1 className='general-rating'>{item.rating}</h1>
                                        <div className='general-duration-difficulty-price'>
                                            <h2 className='general-duration'>{item.duration}</h2>
                                            <h3 className='general-difficulty'>{item.difficulty}</h3>
                                            <h1 className='general-price'>{item.price}</h1>
                                        </div>
                                    </div>
                                </Link>
                            )
                        }
                    })
                }
            </div>
        </>
    )
}

export default CourseCard