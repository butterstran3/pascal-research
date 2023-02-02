import React, { useEffect, useState } from "react";
import './nav.css';
import { NavLink } from 'react-router-dom';
import { IoLogoApple } from 'react-icons/io';
import {AiOutlineMenu} from 'react-icons/ai';
import {RxCross1} from 'react-icons/rx';

const Nav = () => {

    const [mobileActive, setMobileActive] = useState(false);
    const [mobileNav, setMobileNav] = useState(false);

    useEffect(() => {
        const checkIsPhone = () => {
            if (window.innerWidth <= 1030) {
                setMobileActive(true);
            } else {
                setMobileActive(false);
            }
        };

        checkIsPhone();
        window.addEventListener('resize', checkIsPhone);
        
        return () => {
            window.removeEventListener('resize', checkIsPhone);
        };
    }, []);

    if (mobileActive && !mobileNav) {
        return (
            <nav className="container mobile-nav_container">
                <div className="empty_container"></div>
                <div className="mobile-nav_contents">
                    <NavLink className="mobile-nav_content" to="/" end>
                        <IoLogoApple />
                    </NavLink>
                </div>
                <div className="btn_container">
                    <button className="modal_btn" onClick={() => setMobileNav(!mobileNav)}><AiOutlineMenu /></button>
                </div>
            </nav>
        )
    } else if (mobileActive && mobileNav) {
        return (
            <div className="container modal_container">
                <header className="mobile-nav_container">
                    <div className="empty_container"></div>
                    <div className="mobile-nav_contents">
                        <NavLink className="mobile-nav_content" to="/" end>
                            <IoLogoApple />
                        </NavLink>
                    </div>
                    <div className="btn_container">
                        <button className="modal_btn" onClick={() => setMobileNav(!mobileNav)}><RxCross1 /></button>
                    </div>
                </header>
                <div className='mobile-pages__container'>
                    <div className='mobile-about'>
                        <NavLink className="nav_content" to="/about">About</NavLink>
                    </div>
                    <div className='modal-nav_content mobile-products'>
                        <NavLink className="nav_content" to="/products">Products</NavLink>
                    </div>
                    <div className="modal-nav_content mobile-testimonials">
                        <NavLink className="nav_content" to="/testimonials">Testimonials</NavLink>
                    </div>
                    <div className="modal-nav_content mobile-contact">
                        <NavLink className="nav_content" to="/contact">Contact</NavLink>
                    </div>
                    <div className="mobile-faq">
                        <NavLink className="nav_content" to="/faqs">FAQs</NavLink>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <nav className="container nav_container">
                <div className="nav_contents">
                    <NavLink className="nav_content nav_title" to="/" end>
                        <IoLogoApple />
                    </NavLink>
                    <NavLink className="nav_content" to="/about">About</NavLink>
                    <NavLink className="nav_content" to="/products">Products</NavLink>
                    <NavLink className="nav_content" to="/testimonials">Testimonials</NavLink>
                    <NavLink className="nav_content" to="/contact">Contact</NavLink>
                    <NavLink className="nav_content" to="/faqs">FAQs</NavLink>
                </div>
            </nav>
        )
    };
};

export default Nav;
