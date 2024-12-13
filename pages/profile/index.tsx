import React from "react";
import styles from "@styles/pages/Perfil.module.scss";
import Typography from "@components/ui/Typography/Typography";
import Button from "@components/ui/Button/Button";
import { useAccount, useDisconnect } from "wagmi";
import { zksyncSepoliaTestnet } from "viem/chains";
import { useRouter } from "next/router";
const ProfilePage = () => {
  const { disconnect } = useDisconnect();
  const { address } = useAccount();
  const router = useRouter();
  function truncateAddress(address: string | undefined) {
    if (!address) return "";
    return address.slice(0, 6) + "..." + address.slice(-4);
  }

  // console.log(zksyncSepoliaTestnet.blockExplorers);
  // console.log(zksyncSepoliaTestnet.rpcUrls.default.http);
  // console.log(address);
  return (
    <div className={styles.container}>
      <Typography text={"Perfil de ..."} type={"h1"} />
      <Typography
        text={truncateAddress(address!)}
        type={"h4"}
        onClick={() => {
          if (typeof window !== undefined) {
            window.open(`${zksyncSepoliaTestnet.blockExplorers.default.url}address/` + address);
          }
        }}
      />

      <Button
        text={"LOGOUT"}
        type={"blue"}
        size={"small"}
        onClick={() => {
          disconnect();
          router.push("/login");
        }}
      />
    </div>
  );
};

export default ProfilePage;
