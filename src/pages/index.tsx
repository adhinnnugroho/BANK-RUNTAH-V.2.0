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
        <div className="grid grid-cols-3 gap-5">
          <div className="col-span-2">
              <HomeCarousel />
          </div>
          <div className="col-span-1">

          </div>
        </div>




        {/* 
        <MainMenu />
        <ListTrash />

        <div className="mb-20">
          <HomeCarousel />
        </div> */}
      </AppLayouts>
    </>
  );
}
