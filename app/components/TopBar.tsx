"use client"

import { GoToHomepage } from "../helpers";
import { useState } from "react";

export default function TopBar() {
    return (
        <div className="topbar">
            <img src="logo.png" alt="banner-logo" className="topbar__logo" onClick={GoToHomepage} />
            <MobileMenu />
            <div className="topbar__menu">
                <a href="/" className="topbar__menu__link">Home</a>
                <a href="/services-and-pricing" className="topbar__menu__link">Services and Pricing</a>
                <a href="/about" className="topbar__menu__link">About</a>
                <a href="/contact" className="contact-link">Contact</a>
            </div>
        </div>
    );
}

function MobileMenu() {

    const [displayMobileMenu, setMobileMenuState] = useState(false);

    async function displayMenu() {
        setMobileMenuState(true)
    }

    async function hideMenu() {
        setMobileMenuState(false)
    }

    return (
        <div className="topbar__mobile-view">
            <button className="topbar__mobile-view__open-btn" onClick={displayMenu}>≡</button>
            <div className={displayMobileMenu ? "topbar__mobile-view__menu-show" : "topbar__mobile-view__menu-hide"}>
                <button className="topbar__mobile-view__close-btn" onClick={hideMenu}>╳</button>
                <a href="/" className="topbar__mobile-view__link">Home</a>
                <a href="/services-and-pricing" className="topbar__mobile-view__link">Services and Pricing</a>
                <a href="/about" className="topbar__mobile-view__link">About</a>
            </div>
        </div>
    );
}