import React from 'react'
import bg from '../../../images/bg.png'
import './MainSection.css'
import { Link } from 'react-router-dom'

const MainSection = () => {
    const styles = {
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: "327px",
        color: "#FFFFFF",
        marginBottom: "50px",
        marginTop: "50px"
    };
    return (
        <div className='main-parent' style={styles}>
            <h1 style={{
                padding: "70px 0px 0px 50px"
            }}>Courses</h1>
            <ul className='main-navbar' >
                <li>All COurse</li>
                <li>Crop Production</li>
                <li>lifeStock Production</li>
                <li>Soil Science</li>
                <li>Agronomy</li>
                <li>Horticulture</li>
                <Link to="/FormManagment" style={{
                    textDecoration: "none",
                    color: "white"
                }}>
                    <li>Form managment</li>
                </Link>
                <li>Other</li>
            </ul>
        </div>
    )
}

export default MainSection