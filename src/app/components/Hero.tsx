"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(true), 100);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className={`hero-section ${loaded ? "hero-loaded" : ""}`}
    >
      <div className="hero-content">
        <div className="hero-status">
          <span className="hero-status-dot" />
          AVAILABLE FOR OPPORTUNITIES
        </div>

        <p className="hero-intro">HELLO, WORLD. I'M</p>

        <h1 className="hero-name">
          KUNAL
          <br />
          <span>YELGATE.</span>
        </h1>

        <div className="hero-role">
          <span className="hero-role-line" />
          AI & FULL-STACK DEVELOPER
        </div>

        <p className="hero-description">
          I build intelligent applications, scalable web experiences,
          and solutions that connect AI with the real world.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="hero-btn hero-btn-primary">
            EXPLORE PROJECTS
            <span>↗</span>
          </a>

          <a href="#contact" className="hero-btn hero-btn-secondary">
            LET'S CONNECT
            <span>↗</span>
          </a>
        </div>

        <div className="hero-bottom">
          <span>BASED IN INDIA</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </div>

      <div className="hero-decoration" aria-hidden="true">
        <span className="hero-decoration-number">01</span>
        <span className="hero-decoration-circle" />
        <span className="hero-decoration-text">BUILD. BREAK. INNOVATE.</span>
      </div>
    </section>
  );
}