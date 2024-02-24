import { Inter } from "next/font/google";
import AppLayouts from "@/Layouts";
import ListMenu from "@/UI/Home/listmenu";
import RuntahCoin from "@/UI/Home/RuntahCoin";
import SlidePromo from "@/UI/Home/Slider";
import ListTrash from "@/UI/Home/Trash";

const inter = Inter({ subsets: ["latin"] });



export default function Home() {
  return (
    <>
    <AppLayouts>
      <RuntahCoin />
      <SlidePromo />
      <ListMenu />

      <ListTrash />
    </AppLayouts>
    </>
  );
}
