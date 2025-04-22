"use client";

import React from "react";
import "./hero.css";
import { ReactTyped } from "react-typed"; //ReactTypes requires it to be processed on the Client side rather than server side

export default function hero() {
  return (
    <section id="hero" className="d-flex flex-column justify-content-center">
      <div className="container">
        <h1>Anne Elvira Maria</h1>
        <p>
          I am a{" "}
          <ReactTyped
            strings={[
              "Penetration Tester",
              "Incident Responder",
              "Forensic Analyst",
              "Malware Reverse Engineer",
              "Developer",
            ]}
            typeSpeed={100}
            backSpeed={50}
            backDelay={2000}
            loop
          />
        </p>
        <div className="social-links">
          <a href="#" className="github">
            <i className="bx bxl-github"></i>
          </a>
          <a href="#" className="linkedin">
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
