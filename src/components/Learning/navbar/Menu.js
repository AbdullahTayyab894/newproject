import React from 'react';
import './DropdownMenu.css'
export default function Menu() {
    return (
        <div>
            <li className="nav-item dropdown" style={{
                padding: "10px 10px 10px 10px"
            }}>
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Explore
                </a>
                <ul className="dropdown-menu">
                    <li className="nav-item dropend">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Price
                        </a>
                        <ul className="dropdown-menu" style={{ marginLeft: "50px" }}>
                            <li><a className="dropdown-item" href="#">Basic</a></li>
                            <li><a className="dropdown-item" href="#">Classic</a></li>
                            <li><a className="dropdown-item" href="#">Premium</a></li>
                            <li><a className="dropdown-item" href="#">Gold</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropend">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Level
                        </a>
                        <ul className="dropdown-menu" style={{ marginLeft: "50px" }}>
                            <li><a className="dropdown-item" href="#">Bigginer</a></li>
                            <li><a className="dropdown-item" href="#">Intermediate</a></li>
                            <li><a className="dropdown-item" href="#">Advanced</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropend">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Certification
                        </a>
                        <ul className="dropdown-menu" style={{ marginLeft: "50px" }}>
                            <li><a className="dropdown-item" href="#">Certificate</a></li>
                            <li><a className="dropdown-item" href="#">Non-Certificate</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
        </div>
    );
}