import React from "react";
import styles from "@styles/pages/Home.module.scss";
import { IoPerson } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { useRouter } from "next/router";
import { IoList } from "react-icons/io5";

const BottomNavigationMenu = () => {
  const router = useRouter();
  return (
    <div className={styles.bottomNav}>
      <div className={styles.item} onClick={() => router.push("/home")}>
        <IoList />
      </div>
      <div className={styles.item}>
        <IoPerson />
      </div>
      <div
        className={styles.item}
        onClick={() => {
          router.push("/perfil");
        }}
      >
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
