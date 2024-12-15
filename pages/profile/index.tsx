import React from "react";
import styles from "@styles/pages/Profile.module.scss";
import Typography from "@components/ui/Typography/Typography";
import Button from "@components/ui/Button/Button";
import { useDisconnect } from "wagmi";
import { useRouter } from "next/router";
import Image from "next/image";
import University from "@public/images/uni.png";
import General from "@public/images/general.png";
const ProfilePage = () => {
  const { disconnect } = useDisconnect();

  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Typography text={"Your Savings"} type={"h5"} color="black" />

        <Typography text={"$ 1,300"} type={"h1"} />
      </div>
      <div className={styles.savings}>
        <Typography text={"Savings Accounts"} type={"h5"} color="black" alignSelf="flex-start" />
        <div className={styles.savingsItem}>
          <div className={styles.left}>
            <Image src={General} alt={""} />
          </div>
          <div className={styles.right}>
            <Typography text={"General Savings"} type={"h5"} />
            <Typography text={"$ 800"} type={"h1"} />
            <Typography text={"Autosave 50%"} type={"h6"} />
          </div>
        </div>
        <div className={styles.savingsItem}>
          <div className={styles.left}>
            <Image src={University} alt={""} />
          </div>
          <div className={styles.right}>
            <Typography text={"University"} type={"h5"} />
            <Typography text={"$ 500"} type={"h1"} />

            <div className={styles.progress}>
              <div className={styles.progressFill}></div>
            </div>
            <div className={styles.bottom}>
              <Typography text={"Autosave 50%"} type={"h6"} />
              <Typography text={"Goal $500.000"} type={"h6"} />
            </div>
          </div>
        </div>
      </div>
      <Button
        text={"LOGOUT"}
        type={"blue"}
        size={"main"}
        onClick={() => {
          disconnect();
          router.push("/login");
        }}
      />
    </div>
  );
};

export default ProfilePage;
