import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to TechVision</h1>
        <p>
         TechVision -- Web and mobile applications to AI-powered systems, our team leverages the latest technologies to deliver scalable, secure, and user-friendly products.
        </p>
        <button className="hero-btn">Get Started</button>
      </div>
    </section>
  );
}

export default HeroSection;
