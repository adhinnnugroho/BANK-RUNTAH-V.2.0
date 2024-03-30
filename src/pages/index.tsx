import { Inter } from "next/font/google";
import AppLayouts from "@/Layouts";
import MainMenu from "@/UI/Home/main-menu";
import RuntahCoin from "@/UI/Home/runtah-coin";
import HomeCarousel from "@/UI/Home/home-carousel";
import TransactionHistory from "@/UI/Home/transaction-history";

const inter = Inter({ subsets: ["latin"] });



export default function Home() {
  return (
    <>
    <AppLayouts>
      <RuntahCoin />
      <HomeCarousel />
      <MainMenu />

      <TransactionHistory />
    </AppLayouts>
    </>
  );
}
