import React from 'react'
import explore1 from "../../images/explore 1.png"
import explore2 from "../../images/explore 2.png"
import explore3 from "../../images/explore 3.png"
import explore4 from "../../images/explore 4.png"
import './Explore.css'

const Explore = () => {
    return (
        <div className='explore-parent'>
            <h1>We keep you updated with the latest report.</h1>
            <div className='explore-first-div'>
                <img src={explore1} />
                <img src={explore2} />

            </div>
            <div className='explore-second-div'>
                <img src={explore3} />
                <img src={explore4} />
            </div>
            <button>Explore more</button>
        </div>
    )
}

export default Explore