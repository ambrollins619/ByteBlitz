import React from "react";
import styles from "../styles/Homesidebar.module.css";
import Usersearch from "../ui/Usersearch";
import Toprankings from "../ui/Toprankings";
import Upcomingcontest from "../ui/Upcomingcontest";

const Homesidebar = ({ data, timeData }) => {
  return (
    <div className={styles.container}>
      <Upcomingcontest timeData={timeData} />
      {<Usersearch />}
      <Toprankings data={data} />
    </div>
  );
};

export default Homesidebar;
