import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false)
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, [])



    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="netflix logo" />
            <img className="nav__avatar"
                src="https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg" alt="netflix logo" />
        </div>
    )
}

export default Nav