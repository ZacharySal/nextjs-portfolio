"use client";

import styles from "../page.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <nav className={styles.navigation}>
      <h1>ZRS</h1>
      <div className={styles.desktopHidden}>
        {showMobileMenu ? (
          <FontAwesomeIcon
            style={{ fontSize: "1.5rem", zIndex: "10" }}
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            icon={faXmark}
          />
        ) : (
          <FontAwesomeIcon
            style={{ fontSize: "1.5rem", zIndex: "10" }}
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            icon={faBars}
          />
        )}
      </div>

      {showMobileMenu && (
        <div className={`${styles.mobileNav} ${styles.desktopHidden}`}>
          <ul>
            <a href="#about" onClick={() => setShowMobileMenu(false)}></a>
            <li>About</li>
            <a href="#skills" onClick={() => setShowMobileMenu(false)}>
              <li>Skills</li>
            </a>
            <a href="#projects" onClick={() => setShowMobileMenu(false)}>
              <li>Projects</li>
            </a>
            <a href="#contact" onClick={() => setShowMobileMenu(false)}>
              <li className={styles.btn} data-button-type="contact">
                Contact
              </li>
            </a>
          </ul>
        </div>
      )}
      <div className={`${styles.mobileHidden} ${styles.desktopNav}`}>
        <ul>
          <a href="#about"></a>
          <li>About</li>
          <a href="#skills">
            <li>Skills</li>
          </a>
          <a href="#projects">
            <li>Projects</li>
          </a>
          <a href="#contact">
            <li className={styles.btn} data-button-type="contact">
              Contact
            </li>
          </a>
        </ul>
      </div>
    </nav>
  );
}
