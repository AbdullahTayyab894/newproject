import React from 'react'
import img1 from '../../../images/ads/img1.png'
import img2 from '../../../images/ads/img2.png'
import img3 from '../../../images/ads/img3.png'
import img4 from '../../../images/ads/img4.png'

import './Ads.css'

const Ads = () => {
    return (
        <div className='parent-ads'>
            <div className='parent-ads-child1'>
                <div className='parent-ads-child1-subchild1'>
                    <img src={img1} className='img1' />
                    <img src={img2} className='img2' />
                </div>
                <div className='parent-ads-child1-subchild2'>
                    <h1>Partner to improve agriculture in Nigeria.</h1>
                    <p>Join us in our mission to improve the agricultural experience in Nigeria. We partner with all actors in the agricultural sector, including individuals, companies, associations, and government agencies. By working together, we can make a positive impact on the industry and ensure a sustainable future for Nigerian agriculture. </p>
                    <button className='ads-btn1'>Get Started</button>
                </div>
            </div>
            <div className='parent-ads-child2'>
                <div className='parent-ads-child2-subchild1'>
                    <h1>We aggregate and connect farmers to premium buyers</h1>
                    <p>Agric360 Aggregation is a revolutionary solution for the food industry. We connect farmers directly to processing companies by aggregating produce from the field to our strategic warehouses. Our tech-enabled network and field specialists ensure that only the highest quality produce is delivered, giving companies access to a wide range of options across the food value chain. Let Agric360 Aggregation be your go-to source for fresh and reliable produce. </p>
                    <button className='ads-btn2'>Get Started</button>
                </div>
                <div className='parent-ads-child2-subchild2'>
                    <img src={img3} className='img3' />
                    <img src={img4} className='img4' />
                </div>
            </div>
        </div>
    )
}

export default Ads