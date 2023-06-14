import React from 'react'
import { Data } from '../CoursesAPI'
import CourseCard from '../screens/CourseCard'

const GeneralCategory = () => {
    return (
        <>
            <h1 style={{
                fontSize:"25px",
                fontWeight:"700",
                lineHeight:"1.5em",
                fontFamily:"sans-serif",
                color:"#00541C",
                paddingLeft:"40px",
                paddingTop:"20px"
            }}>General Categories Courses</h1>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent:"space-around",
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