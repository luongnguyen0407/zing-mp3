import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "@next/font/google";
import NextNProgress from "nextjs-progressbar";
import MainLayout from "../components/layout/MainLayout";
const roboto = Roboto({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "700"],
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <MainLayout>
        <main className={roboto.className}>
          <Component {...pageProps} />
        </main>
      </MainLayout>
    </>
  );
}
