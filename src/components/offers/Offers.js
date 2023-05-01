import React from 'react'
import arrow from '../../images/arrow.png'
import './Offers.css'
import tick1 from '../../images/tick.png'
import tick2 from '../../images/tick2.png'
import premium from '../../images/premium.png'

const Offers = () => {
    return (
        <div className='offer-parent'>
            <h1 className='offer-heading'>Get results first. Pick a plan later.</h1>
            <p className='offer-description'>Choose a convenient plan and enjoy premium services</p>
            <div className='offer-parent-child1'>
                <div>
                    <button className='offer-btn1'>Monthly</button>
                    <button className='offer-btn2'>Annualy</button>
                </div>
                <div>
                    <img src={arrow} className='offer-img' />
                </div>
                <h4 className='offer-discount'>Get 20% OFF</h4>
            </div>
            <div className='offer-parent-child2'>
                <div className='main-subchild'>
                    <div className='offer-parent-child2-subchild'>
                        <h2>Basic <span>(Free)</span></h2>
                        <h1>₦0 <span>/month</span></h1>
                        <hr style={{
                            marginTop: "65px",
                            marginBottom: "40px"
                        }} />
                        <div><img src={tick1} /> <li> Access to website</li></div>
                        <div><img src={tick1} /> <li> Limited Information/Support Request</li></div>
                        <div><img src={tick1} /> <li> Weather Update/Report</li></div>
                        <div><img src={tick1} /> <li> Updates from Value Chain actors</li></div>
                        <div><img src={tick1} /> <li> Basic e-learning courses</li></div>
                        <div><img src={tick1} /> <li> Access to Basic e-learning courses</li></div>
                        <div><img src={tick1} /> <li> Access Marketplace</li></div>
                        <div><img src={tick1} /> <li> Access to post offers</li></div>
                        <div><img src={tick1} /> <li> Eligible to save & invest</li></div>
                        <div><img src={tick1} /> <li> News Letters Update</li></div>
                        <div><img src={tick1} /> <li> Access to Dashboard</li></div>
                        <div><img src={tick1} /> <li> Access to book/hire</li></div>
                    </div>
                    <button>Get Started</button>
                </div>


                <div className='main-subchild subchild' >
                    <div className='offer-parent-child2-subchild'>
                        <h2 style={{
                            color: "#FFFFFF"
                        }}>Classic</h2>
                        <h1 style={{
                            color: "#FFFFFF"
                        }}>₦220 <span style={{
                            color: "#FFFFFF"
                        }}>/month</span></h1>
                        <p>Basic services plus</p>
                        <hr style={{
                            marginTop: "47px",
                            marginBottom: "40px"
                        }} />
                        <div><img src={tick2} /> <li> Access to website</li></div>
                        <div><img src={tick2} /> <li> Limited Information/Support Request</li></div>
                        <div><img src={tick2} /> <li> Weather Update/Report</li></div>
                        <div><img src={tick2} /> <li> Updates from Value Chain actors</li></div>
                        <div><img src={tick2} /> <li> Basic e-learning courses</li></div>
                        <div><img src={tick2} /> <li> Access to Basic e-learning courses</li></div>
                        <div><img src={tick2} /> <li> Access Marketplace</li></div>
                        <div><img src={tick2} /> <li> Access to post offers</li></div>
                        <div><img src={tick2} /> <li> Eligible to save & invest</li></div>
                        <div><img src={tick2} /> <li> News Letters Update</li></div>
                        <div><img src={tick2} /> <li> Access to Dashboard</li></div>
                        <div><img src={tick2} /> <li> Access to book/hire</li></div>
                    </div>
                    <button>Get Started</button>
                </div>


                <div className='main-subchild'>
                    <div className='offer-parent-child2-subchild'>
                        <h2>Premium</h2>
                        <h1>₦460 <span>/month</span></h1>
                        <p>Classic services plus</p>
                        <hr style={{
                            marginTop: "47px",
                            marginBottom: "40px"
                        }} />
                        <div><img src={tick1} /> <li> Connection to Premium Buyers</li></div>
                        <div><img src={tick1} /> <li> Premium e-learning courses</li></div>
                        <div><img src={tick1} /> <li> Post Booking/Hiring services</li></div>
                    </div>
                    <button>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Offers