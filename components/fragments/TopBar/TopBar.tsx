import React from "react";
import styles from "./topBar.module.scss";
import Typography from "@components/ui/Typography/Typography";
const TopBar = () => {
  return (
    <div className={styles.container}>
      <Typography text={"Nivel 0"} type={"h4"} />
      <Typography text={"Ahorros: $0"} type={"h4"} />

      <Typography text={"Avatar"} type={"h4"} />
    </div>
  );
};

export default TopBar;
