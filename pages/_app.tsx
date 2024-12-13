import type { AppProps } from "next/app";
import "@styles/styles.scss";
import BottomNavigationMenu from "@components/fragments/BottomNavigationBar/BottomNavigationMenu";
import TopBar from "@components/fragments/TopBar/TopBar";
import Web3ModalProvider from "../context";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [visible, setVisible] = useState<boolean>(false);
  useEffect(() => {
    if (router.pathname === "/login") {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, [router.pathname]);
  return (
    <>
      <Web3ModalProvider>
        {visible && <TopBar />}
        <Component {...pageProps} />
        {visible && <BottomNavigationMenu />}
      </Web3ModalProvider>
    </>
  );
}
