import React from 'react'
import TrendingCourse from './trending course/TrendingCourse'
import FreeCourse from './free course/FreeCourse'
import PopularCertificate from './popular certificate/PopularCertificate'
import GeneralCategory from './general category/GeneralCategory'
import CourseDetail from './course detail/CourseDetail'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './navbar/Navbar'

const Learning = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={
                        <>
                            <TrendingCourse />
                            <FreeCourse />
                            <PopularCertificate />
                            <GeneralCategory />
                        </>
                    } />
                    <Route path="/CourseDetail/:matchid" element={<CourseDetail />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Learning