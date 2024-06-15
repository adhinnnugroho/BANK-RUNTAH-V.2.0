import { Inter } from "next/font/google";
import AppLayouts from "@/Template/Layouts";
import MainMenu from "@/Template/UI/Home/main-menu";
import RuntahCoin from "@/Template/UI/Home/runtah-coin";
import HomeCarousel from "@/Template/UI/Home/home-carousel";
import ListTrash from "@/Template/UI/Home/list-trash";

const inter = Inter({ subsets: ["latin"] });



export default function Home() {
  return (
    <>
      <AppLayouts>
        
        <RuntahCoin />
        <HomeCarousel />

        <MainMenu />


        {/* 
        <ListTrash />*/}
      </AppLayouts>
    </>
  );
}
