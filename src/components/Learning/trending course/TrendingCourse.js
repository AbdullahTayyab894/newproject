import React from 'react'
import { Data } from '../CoursesAPI'
import CourseSlider from '../screens/CourseSlider';

const TrendingCourse = () => {
    return (
        <div>
            <CourseSlider Data={Data} />
        </div>
    )
}

export default TrendingCourse