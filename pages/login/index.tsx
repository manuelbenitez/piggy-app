import Button from "@components/ui/Button/Button";
import React, { useEffect } from "react";
import { connectWithSSO } from "../../zksyncSSO";
import styles from "@styles/pages/Login.module.scss";
import { useAccount } from "wagmi";
import { useRouter } from "next/router";
import Typography from "@components/ui/Typography/Typography";
import Image from "next/image";
import piggy from "@public/images/piggy.png";
import piggyLogin from "@public/images/login.png";
import piggyLoggedin from "@public/images/loggedin.png";
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

      const response = await axios.get(API_ENDPOINT + "user", {
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      });

      localStorage.setItem("level", response.data.level);
    } catch (error: any) {
      console.error(error.message);
      if (error.message.includes("User rejected the request")) {
        setError("User rejected the request");
      } else {
        setError("Something went wrong. Please try again.");
      }
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
          {!isDefinitelyConnected && (
            <Image src={piggyLogin} alt={"piggy"} className={styles.image} />
          )}
          {isDefinitelyConnected && (
            <Image src={piggyLoggedin} alt={"piggy"} className={styles.image} />
          )}
          <Image src={bgLogin} alt={"bg-1"} className={styles.bg} />
          <Image src={bgLogin} alt={"bg-2"} className={styles.bg2} />
        </div>
        <div className={styles.footer}>
          {!isDefinitelyConnected && (
            <>
              <div className={styles.textContainer}>
                <Typography text={"Welcome to Piggy Trivia"} type={"h0"} alignSelf="center" />
                <div style={{ maxWidth: "500px", alignSelf: "center" }}>
                  <Typography
                    text={
                      "Save, earn, and grow your money while having fun! Level up with quizzes, challenges, and rewards."
                    }
                    type={"subtext"}
                    alignSelf="center"
                  />
                </div>
              </div>
              <div>
                <Button
                  text={isConnecting ? "Connecting..." : "Let's Play!"}
                  type={"blue"}
                  size={"main"}
                  disabled={isConnecting}
                  onClick={() => handleConnectWithSSO()}
                />
                <br />
                {error && <Typography text={error} type={"subtext"} color="error" />}
              </div>
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
            </>
          )}
        </div>
      </>
    </div>
  );
};

export default LogInPage;
