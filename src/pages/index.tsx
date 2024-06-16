
import AppLayouts from "@/Template/Layouts";
import UIManajement from "@/Template/UI/UIManajement";
export default function Home() {
  return (
      <AppLayouts>
        <UIManajement.RuntahCoin />
        <UIManajement.HomeCarousel />
        <UIManajement.MainMenu />
        <UIManajement.ListTrash />
      </AppLayouts>
  );
}
