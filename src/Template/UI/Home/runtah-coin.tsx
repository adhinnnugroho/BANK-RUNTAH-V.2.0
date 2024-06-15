import SimpleButton from "@/Template/Components/Button/SimpleButton";


const formattedNumber = (number: any) => {
    return number.toLocaleString("en-US");
};

const RuntahCoin = () => {
    return (
        <div className="bg-gray-200 drop-shadow-lg ml-3 mr-3 -mt-20  rounded-lg">
            <div className="grid grid-cols-3 gap-5">
                <div className="col-span-2 mt-4 mb-4">
                    <h5 className="ml-4 font-bold pt-1 text-2xl">
                        Runtah Koin
                    </h5>

                    <h6 className="ml-4 font-semibold pb-2 text-3xl">
                        RC. {formattedNumber(10000)}
                    </h6>
                </div>
                <div className="col-span-1">
                    <SimpleButton type="button" bg_color="bg-green-500" className="mt-10 w-24">
                        Tukar
                    </SimpleButton>
                </div>
            </div>
        </div>
    );
}

export default RuntahCoin;