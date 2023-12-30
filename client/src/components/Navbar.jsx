import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";
const Navbar = () => {
    const {isLoggedIn} = useAuth();
    return (
        <>
            <header>
                <div className="container">
                    <div className="logo-brand">
                        <NavLink to="/" className="logo">MAID AT HOME</NavLink>
                    </div>
                    <nav>
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                            
                            {isLoggedIn ? (<><li><NavLink to="/service">Services</NavLink></li><li><NavLink to="/requirement">Requirement-Form</NavLink></li><li><NavLink to="/logout">Logout</NavLink></li> </>) : (<> <li><NavLink to="/register">Register</NavLink></li>
                            <li><NavLink to="/login">Login</NavLink></li></>)}
                            
                        </ul>

                    </nav>

                </div>
            </header>
        </>

    );
}

export default Navbar;


