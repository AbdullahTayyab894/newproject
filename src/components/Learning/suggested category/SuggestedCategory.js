import React from 'react'
import "./SuggestedCategory.css"
import video2 from '../../../images/courses/video2.mp4'


const SuggestedCategory = ({ category }) => {
    return (
        <>
            <h1 style={{
                paddingLeft:"10px"
            }}>Suggested Courses For You</h1>
            <div className='category'>
                <div className='category-child'>
                    <div className='category-subchild1'>
                        <video className='category-video' src={video2} />
                    </div>
                    <div className='category-subchild2'>
                        <h1>Module 1</h1>
                        <p>Lorem ipsum dolor sit amet consectetur. Lectus diam pulvinar dignissim cras sem ante quam platea rhoncus</p>
                        <div>
                            <h5>5.0</h5>
                            <h5>All Level</h5>
                        </div>
                    </div>
                </div>

                <div className='category-child'>
                    <div className='category-subchild1'>
                        <video className='category-video' src={video2} />
                    </div>
                    <div className='category-subchild2'>
                        <h1>Module 1</h1>
                        <p>Lorem ipsum dolor sit amet consectetur. Lectus diam pulvinar dignissim cras sem ante quam platea rhoncus</p>
                        <div>
                            <h5>5.0</h5>
                            <h5>All Level</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SuggestedCategory