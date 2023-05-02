import React from 'react'
import './Description.css'
import description1 from '../../images/description1.png'
import description2 from '../../images/description2.png'

const Description = () => {
    return (
        <div container className='parent-div' >
            <div className='parent-div-first-child'>
                <h1 className='description'>An All-In-One Solution to All Your Agricultural Problems</h1>
                <p className='peragraph'>Stay on top of your agricultural business and access a one stop shop for all things agriculture.</p>
                <div className='parent-div-first-child-subchild'>
                    <button className='description-btn1'>Get Started</button>
                    <button className='description-btn2'>How it works?</button>
                </div>
            </div>
            <div className='parent-div-second-child'>
                <img className='first-img' src={description2} />
                <img className='second-img' src={description1} />
            </div>
        </div>
    )
}

export default Description