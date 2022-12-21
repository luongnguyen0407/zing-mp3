import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "@next/font/google";
import MainLayout from "../components/layout/MainLayout";
const roboto = Roboto({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "700"],
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </MainLayout>
  );
}
