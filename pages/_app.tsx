import type { AppProps } from "next/app";
import "@styles/styles.scss";
import BottomNavigationMenu from "@components/fragments/BottomNavigationBar/BottomNavigationMenu";
import TopBar from "@components/fragments/TopBar/TopBar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <TopBar />
      <Component {...pageProps} />
      <BottomNavigationMenu />
    </>
  );
}
