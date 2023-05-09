import React from 'react'
import TrendingCourse from './trending course/TrendingCourse'
import FreeCourse from './free course/FreeCourse'
import PopularCertificate from './popular certificate/PopularCertificate'
import GeneralCategory from './general category/GeneralCategory'
import CourseDetail from './course detail/CourseDetail'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './navbar/Navbar'
import MainSection from './main/MainSection'
import CategoryButton from './category button/CategoryButton'
import FormManagment from './form managment/FormManagment'

const Learning = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={
                        <>
                            <MainSection />
                            <CategoryButton />
                            <TrendingCourse />
                            <FreeCourse />
                            <PopularCertificate />
                            <GeneralCategory />
                        </>
                    } />
                    <Route path="/CourseDetail/:matchid" element={<CourseDetail />} />
                    <Route path='/FormManagment' element={<FormManagment />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Learning