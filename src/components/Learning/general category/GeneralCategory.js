import React from 'react'
import { Data } from '../CoursesAPI'
import CourseCard from '../screens/CourseCard'

const GeneralCategory = () => {
    return (
        <>
            <h1 className='general-heading'>General Categories Courses</h1>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent:"space-around"
            }}>

                {
                    Data.map((item) => {
                        if (item.category === "general category") {
                            return (
                                <CourseCard Data={item} />
                            )
                        }
                    })
                }
            </div>
        </>
    )
}

export default GeneralCategory