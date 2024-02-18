import Image from "next/image";
import { Inter } from "next/font/google";
import AppLayouts from "@/Layouts";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <AppLayouts>
      Test Hello
    </AppLayouts>
  );
}
