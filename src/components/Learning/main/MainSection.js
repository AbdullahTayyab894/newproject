import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import bg from '../../../images/bg.png';
import './MainSection.css';
import { Link } from 'react-router-dom';

const MainSection = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const styles = {
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        color: '#FFFFFF',
        marginBottom: '50px',
        marginTop: '50px',
    };

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <>
            <div style={styles} className='main-parent'>
                <div className='main-child1'>
                    <h1>Courses</h1>
                    <button onClick={toggleNav}><MenuIcon style={{
                        fontSize: "40px"
                    }} /></button>
                </div>
                <ul className={`main-child2 ${isNavOpen ? 'open' : ''}`}>
                    <li href='/'>All Course</li>
                    <li href='/'>Cropt Production</li>
                    <li href='/'>lifeStock Production</li>
                    <li href='/'>Soil Science</li>
                    <li href='/'>Agronomy</li>
                    <li href='/'>Horticulture</li>
                    <Link to="/FormManagment" style={{
                        textDecoration:"none",
                        color:"#FFFFFF"
                    }}>
                        <li href='/'>Form managment</li>
                    </Link>
                    <li href='/'>Other</li>
                </ul>
            </div>
        </>
    );
};

export default MainSection;
