import AppLayouts from "@/Template/Layouts";
import UIManagement from "@/Template/UI/UIManagement";

export default function Home() {
  return (
      <AppLayouts>
        <UIManagement.RuntahCoin />
        <UIManagement.HomeCarousel />
        <UIManagement.MainMenu />
        <UIManagement.ListTrash />
      </AppLayouts>
  );
}
