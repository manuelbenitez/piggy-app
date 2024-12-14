import Button from "@components/ui/Button/Button";
import React, { useEffect } from "react";
import { connectWithSSO } from "../../zksyncSSO";
import styles from "@styles/pages/Login.module.scss";
import { useAccount } from "wagmi";
import { useRouter } from "next/router";
import Typography from "@components/ui/Typography/Typography";
import Image from "next/image";
import piggy from "@public/images/piggy.png";
import bgLogin from "@public/images/bg-login.png";
import axios from "axios";
import { API_ENDPOINT } from "../../service/api.constants";
const LogInPage = () => {
  const { isConnected } = useAccount();

  const [isConnecting, setIsConnecting] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);
  const [isDefinitelyConnected, setIsDefinitelyConnected] = React.useState<boolean>(false);
  const router = useRouter();
  const handleConnectWithSSO = async () => {
    try {
      setIsConnecting(true);
      const { accounts } = await connectWithSSO();
      const { data } = await axios.post(API_ENDPOINT + "login", {
        wallet: accounts[0],
      });

      localStorage.setItem("token", data.token);
    } catch (error) {
      console.error(error);
      setError("Error connecting with SSO");
    } finally {
      setIsConnecting(false);
    }
  };

  useEffect(() => {
    setIsDefinitelyConnected(isConnected);
  }, [isConnected]);

  return (
    <div className={styles.container}>
      <>
        <div className={styles.header}>
          <Image src={piggy} alt={"piggy"} className={styles.image} />
          <Image src={bgLogin} alt={"bg-1"} className={styles.bg} />
          <Image src={bgLogin} alt={"bg-2"} className={styles.bg2} />
        </div>
        <div className={styles.footer}>
          {!isDefinitelyConnected && (
            <>
              <div className={styles.textContainer}>
                <Typography text={"Welcome to Piggy Trivia"} type={"h0"} alignSelf="center" />
                <Typography
                  text={"Manage savings, invest wisely, and grow together as a family."}
                  type={"subtext"}
                  alignSelf="center"
                />
              </div>
              <Button
                text={isConnecting ? "Connecting..." : "Let's Play!"}
                type={"blue"}
                size={"main"}
                disabled={isConnecting}
                onClick={() => handleConnectWithSSO()}
              />
              {error && <Typography text={error} type={"subtext"} color="error" />}
            </>
          )}
          {isDefinitelyConnected && (
            <>
              <div className={styles.textContainer}>
                <Typography text={"All setup!"} type={"h0"} alignSelf="center" />
                <Typography
                  text={
                    "Let’s start growing your savings, earning rewards, and becoming a money master!"
                  }
                  type={"subtext"}
                  alignSelf="center"
                />
              </div>
              <Button
                text={"Lets GO!"}
                type={"blue"}
                size={"main"}
                onClick={() => router.push("/home")}
              />
              {error && <Typography text={error} type={"subtext"} color="error" />}
            </>
          )}
        </div>
      </>
    </div>
  );
};

export default LogInPage;
