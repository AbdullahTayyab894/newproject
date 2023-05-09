import React from 'react'
import { Data } from '../CoursesAPI'
import CourseCard from '../screens/CourseCard'

const GeneralCategory = () => {
    return (
        <>
           <CourseCard  Data={Data}/>
        </>
    )
}

export default GeneralCategory