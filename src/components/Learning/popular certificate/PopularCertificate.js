import React from 'react'
import { Data } from '../CoursesAPI'
import './PopularCertificate.css'
import { Link } from 'react-router-dom'

const PopularCertificate = () => {
    return (
        <>
            <h1 className='popular-heading'>Polpular Certificate Courses</h1>
            <div className='popular-parent'>
                {
                    Data.map((item) => {
                        if (item.category === "popular certificate") {
                            return (
                                <Link to={`/CourseDetail/${item.id}`} style={{
                                    textDecoration:"none"
                                }}>
                                    <div className='popular-child'>
                                        <img className='popular-img' src={item.img} />
                                        <h1 className='popular-name'>{item.name}</h1>
                                        <p className='popular-description'>{item.description}</p>
                                        <h2 className='popular-instructor'>{item.instructor}</h2>
                                        <h1 className='popular-rating'>{item.rating}</h1>
                                        <div className='popular-duration-difficulty-price'>
                                            <h2 className='popular-duration'>{item.duration}</h2>
                                            <h3 className='popular-difficulty'>{item.difficulty}</h3>
                                            <h1 className='popular-price'>{item.price}</h1>
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

export default PopularCertificate