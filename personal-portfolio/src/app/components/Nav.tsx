/*---------------------------------------
NAVIGATION COMPONENTS
---------------------------------------*/

"use client";

import React, { useState, useEffect } from "react";
import "./nav.css";
import { navs } from "../data/data";

export default function Nav() {
  const [navList, setNavList] = useState(navs);

  const handleScrollTo = (section: string) => {};

  return (
    <nav id="navbar" className="navbar nav-menu">
      <ul>
        {navList.map((nav) => (
          <li>
            <a
              onClick={() => handleScrollTo(nav.target)}
              className={`nav-link scrollto ${
                // Show the actve icon in a different color
                // The following is an if else function. If True then show 'active', else is undefined
                nav.active ? "active" : undefined
              }`}
            >
              {/* use i tag for icon */}
              <i className={nav.icon}></i> <span>{nav.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
