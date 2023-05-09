import React from 'react';
import './DropdownMenu.css'
export default function Menu() {
    return (
        <div>
            <li class="nav-item dropdown" style={{
                padding:"10px"
            }}>
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Explore
                </a>
                <ul class="dropdown-menu">
                    <li class="nav-item dropend">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Price
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Basic</a></li>
                            <li><a class="dropdown-item" href="#">Classic</a></li>
                            <li><a class="dropdown-item" href="#">Premium</a></li>
                            <li><a class="dropdown-item" href="#">Gold</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropend">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Level
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Bigginer</a></li>
                            <li><a class="dropdown-item" href="#">Intermediate</a></li>
                            <li><a class="dropdown-item" href="#">Advanced</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropend">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Certification
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Certificate</a></li>
                            <li><a class="dropdown-item" href="#">Non-Certificate</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
        </div>
    );
}