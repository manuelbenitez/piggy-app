import type { AppProps } from "next/app";
import "@styles/styles.scss";
import BottomNavigationMenu from "@components/fragments/BottomNavigationBar/BottomNavigationMenu";
import TopBar from "@components/fragments/TopBar/TopBar";
import Web3ModalProvider from "../context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Web3ModalProvider>
        <TopBar />
        <Component {...pageProps} />
        <BottomNavigationMenu />
      </Web3ModalProvider>
    </>
  );
}
