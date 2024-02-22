import { Inter } from "next/font/google";
import AppLayouts from "@/Layouts";
import ListMenu from "@/UI/listmenu";
import RuntahCoin from "@/UI/RuntahCoin";
import SlidePromo from "@/UI/Slider";
import ListTrash from "@/UI/Trash";

const inter = Inter({ subsets: ["latin"] });



export default function Home() {
  return (
    <AppLayouts>
      <RuntahCoin />
      <SlidePromo />
      <ListMenu />

      <ListTrash />
    </AppLayouts>
  );
}
