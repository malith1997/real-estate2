import React from 'react';
import './RealEstatePromo.css';

const RealEstatePromo = () => {
    return (
        <section className="real-estate-promo">
            <div className="real-estate-promo-image"></div>
            <div className="real-estate-promo-content">
                <h1>We make it easy for sellers and buyers.</h1>
                <p>Whether it's selling your home, getting financing, or buying a new home, we make it easy and efficient. The best part? You'll...</p>
                <button className="btn-primary">See more</button>
            </div>
        </section>
    );
}

export default RealEstatePromo;
