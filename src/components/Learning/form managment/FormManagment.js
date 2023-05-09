import React from 'react'
import MainSection from '../main/MainSection'
import CategoryButton from '../category button/CategoryButton'
import CourseSlider from '../screens/CourseSlider'
import CourseCard from '../screens/CourseCard'
import { Data } from '../CoursesAPI'

const FormManagment = () => {
    return (
        <div>
            <MainSection />
            <CategoryButton />
            <CourseSlider Data={Data} />
            <CourseCard Data={Data} />
        </div>
    )
}

export default FormManagment