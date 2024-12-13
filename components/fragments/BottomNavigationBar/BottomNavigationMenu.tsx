import React from "react";
import styles from "@styles/pages/Home.module.scss";
import { useRouter } from "next/router";
import { GoPerson } from "react-icons/go";
import { FaRegFlag } from "react-icons/fa";
import Typography from "@components/ui/Typography/Typography";

const BottomNavigationMenu = () => {
  const router = useRouter();
  return (
    <div className={styles.bottomNav}>
      <div className={styles.item} onClick={() => router.push("/home")}>
        <FaRegFlag width={50} height={50} className={styles.icon} />
        <Typography text={"Game"} type={"subtext"} />
      </div>
      <div className={styles.item} onClick={() => router.push("/profile")}>
        <GoPerson width={50} height={50} className={styles.icon} />
        <Typography text={"Profile"} type={"subtext"} />
      </div>
    </div>
  );
};

export default BottomNavigationMenu;
