import React from 'react'
import './DropdownMenu.css'

const Account = () => {
    return (
        <div style={{
            marginLeft:"50px"
        }}>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fa fa-user" aria-hidden="true" style={{
                        fontSize:"40px",
                        color:"green"
                    }}></i>
                </a>
                <ul class="dropdown-menu">
                    <li>
                        <li><a class="dropdown-item" href="#">Profile</a></li>
                        <li><a class="dropdown-item" href="#">My Courses</a></li>
                        <li><a class="dropdown-item" href="#">Dashboard</a></li>
                        <li><a class="dropdown-item" href="#">Setting</a></li>
                        <li><a class="dropdown-item" href="#">Help</a></li>
                        <li><a class="dropdown-item" href="#">Sign Out</a></li>
                    </li>
                </ul>
            </li >
        </div >
    )
}

export default Account