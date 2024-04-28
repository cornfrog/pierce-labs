"use client"

import { GoToServices } from "../helpers";

export default function CoverImage() {
    return (
        <div className="cover-image-container">
            <img src="homepage-cover-img.jpeg" alt="cover-image" className="cover-image"/>
            <div className="overlay-text">
                <h1 className="overlay-header">Your Laboratory for Online Growth</h1>
                <button className="overlay-btn" onClick={GoToServices}>See Services</button>
            </div>
        </div>
    );
}