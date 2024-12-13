import React, { useEffect, useState } from "react";
import styles from "./topBar.module.scss";
import Typography from "@components/ui/Typography/Typography";
import { useRouter } from "next/router";
const TopBar = () => {
  const [title, setTitle] = useState<string>("");

  const router = useRouter();

  useEffect(() => {
    switch (router.pathname) {
      case "/home":
        setTitle("Piggy Trivia");
        break;
      case "/profile":
        setTitle("Your Profile");
        break;
    }
  }, [router.pathname]);
  return (
    <div className={styles.container}>
      <Typography text={title} type={"h4"} />
    </div>
  );
};

export default TopBar;
