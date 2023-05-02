import MenuIcon from '@mui/icons-material/Menu';
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { CSSTransition } from "react-transition-group";
import logo from '../../images/logo.png'

export default function Navbar() {
    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 820px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);

    const handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    };

    const toggleNav = () => {
        setNavVisibility(!isNavVisible);
    };

    return (
        <header className="Header">
            <img src={logo} className="Logo" alt="logo" />
            <CSSTransition
                in={!isSmallScreen || isNavVisible}
                timeout={350}
                classNames="NavAnimation"
                unmountOnExit
            >
                <nav className="Nav">
                    <h1 href="/">Home</h1>
                    <h1 href="/">Solution</h1>
                    <h1 href="/">Book/Hire</h1>
                    <h1 href="/">E-market</h1>
                    <h1 href="/">E-learning</h1>
                    <h1 href="/">Co-operatives</h1>
                    <h1 href="/">About us</h1>
                    <button className="btn1">Sign up</button>
                    <button className="btn2">Sign in</button>
                </nav>
            </CSSTransition>
            <button onClick={toggleNav} className="Burger">
                <MenuIcon />
            </button>
        </header>
    );
}