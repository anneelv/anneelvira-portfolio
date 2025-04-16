import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <h3>Anne Elvira Maria</h3>
        <p>AAAAAAAAAAAAAAAA</p>
        <div className="social-links">
          <a href="#" className="github">
            <i className="bx bxl-github"></i>
          </a>
          <a href="#" className="linkedin">
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Personal Profile</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="#">DStudio Technology</a>
        </div>
      </div>
    </footer>
  );
}
