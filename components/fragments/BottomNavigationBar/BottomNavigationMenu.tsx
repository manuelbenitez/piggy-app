import React from "react";
import styles from "@styles/pages/Home.module.scss";
import { IoPerson } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";

const BottomNavigationMenu = () => {
  return (
    <div className={styles.bottomNav}>
      <div className={styles.item}>
        <IoPerson />
      </div>
      <div className={styles.item}>
        <IoPerson />
      </div>
      <div className={styles.item}>
        <IoPerson className={styles.icon} />
      </div>
      <div className={styles.item}>
        <IoPerson />
      </div>
      <div className={styles.item}>
        <IoIosSettings />
      </div>
    </div>
  );
};

export default BottomNavigationMenu;
