import Button from "@components/ui/Button/Button";
import React, { useEffect } from "react";
import { connectWithSSO } from "../../zksyncSSO";
import styles from "@styles/pages/Login.module.scss";
import { useAccount, useDisconnect } from "wagmi";
import { useRouter } from "next/router";
import Typography from "@components/ui/Typography/Typography";

const LogInPage = () => {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  const [isConnecting, setIsConnecting] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);
  const router = useRouter();
  const handleConnectWithSSO = async () => {
    try {
      setIsConnecting(true);
      await connectWithSSO();

      console.log(address);
      router.push("/home");
    } catch (error) {
      console.error(error);
      setError("Error connecting with SSO");
    } finally {
      setIsConnecting(false);
    }
  };

  useEffect(() => {
    console.log(address);
    console.log(isConnected);
  }, [address]);

  return (
    <div className={styles.container}>
      {isConnecting && <div>Connecting...</div>}
      {!isConnecting && (
        <>
          <Button
            text={"LOGIN"}
            type={"blue"}
            size={"small"}
            onClick={() => handleConnectWithSSO()}
          />

          <Button text={"LOGOUT"} type={"blue"} size={"small"} onClick={() => disconnect()} />
        </>
      )}
      {error && <Typography text={error} type={"subtext"} color="error" />}
    </div>
  );
};

export default LogInPage;
