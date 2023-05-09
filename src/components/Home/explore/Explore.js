import React from 'react'
import explore from "../../../images/explore.png"
import './Explore.css'

const Explore = () => {
    return (
        <div className='explore-parent'>
            <h1>We keep you updated with the latest report.</h1>
            <div className='explore-div'>
                <img src={explore} />
            </div>
            <button>Explore more</button>
        </div>
    )
}

export default Explore