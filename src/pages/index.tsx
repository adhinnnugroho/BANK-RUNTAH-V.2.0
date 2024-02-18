import Image from "next/image";
import { Inter } from "next/font/google";
import AppLayouts from "@/Layouts";
import SimpleButton from "@/Components/Button/SimpleButton";

const inter = Inter({ subsets: ["latin"] });

const formattedNumber = (number: any) => {
  return number.toLocaleString("en-US");
};

export default function Home() {
  return (
    <AppLayouts>
      <div className="bg-gray-300 ml-2 mr-2 -mt-5 rounded-lg">
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <h5 className="ml-4 font-semibold pt-1 text-lg">
              Runtah Coin
            </h5>

            <h6 className="ml-4 font-semibold pb-2 text-lg">
              {formattedNumber(10000)}
            </h6>
          </div>
          <div className="col-span-1">
            <div className="float-right mt-3 mr-5">
              <SimpleButton type="button" className="bg-green-800">
                Tukar
              </SimpleButton>
            </div>
          </div>
        </div>
      </div>

      {/* slider */}
      <div className="ml-2 mr-2 mt-5 overflow-y-auto flex">
        <Image
          src="/assets/img/slider/1.png"
          width={506}
          height={106}
          alt="Picture of the author"
        />
        <Image
          src="/assets/img/slider/2.png"
          width={506}
          height={506}
          alt="Picture of the author"
        />
        <Image
          src="/assets/img/slider/3.png"
          width={506}
          height={506}
          alt="Picture of the author"
        />
      </div>

      <div className="grid grid-cols-3 gap-5 ml-2 mr-2 mt-5">
        <div className="col-span-1">
          <div className="border border-gray-500 text-center">
            All
          </div>
        </div>
        <div className="col-span-1">
          <div className="border border-gray-500 text-center">
            All
          </div>
        </div>
        <div className="col-span-1">
          <div className="border border-gray-500 text-center">
            All
          </div>
        </div>
        <div className="col-span-1">
          <div className="border border-gray-500 text-center">
            All
          </div>
        </div>
        <div className="col-span-1">
          <div className="border border-gray-500 text-center">
            All
          </div>
        </div>
        <div className="col-span-1">
          <div className="border border-gray-500 text-center">
            All
          </div>
        </div>
      </div>
    </AppLayouts>
  );
}
