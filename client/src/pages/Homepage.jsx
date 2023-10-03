import React from "react";
import styles from "./Homepage.module.css";

import PageNav from "../components/PageNav";
import SearchRide from "../components/SearchRide";
import Main from "../components/Main";
function Homepage() {
  return (
    <div className={styles.homepage}>
      <PageNav />
      <Main />
      {/* <SearchRide /> */}
    </div>
  );
}

export default Homepage;
