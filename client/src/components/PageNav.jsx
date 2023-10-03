import React from "react";
import styles from "./PageNav.module.css"; // Import the CSS module
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function PageNav() {
  return (
    <>
      <nav className={styles.nav}>
        {/* <div className={styles.logo}>
          <h1 className={styles.logoImage}>Safarii</h1>
        </div> */}
        <Logo />
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/publish-a-ride">Publish-a-ride</NavLink>
          </li>
          <li>
            <NavLink to="/registerform">Registeration</NavLink>
          </li>
          <li>
            <NavLink to="/login" className={styles.ctaLink}>
              <img
                src="public\Profile pic.png"
                alt="Profile"
                className={styles.profileimage}
              />
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default PageNav;
