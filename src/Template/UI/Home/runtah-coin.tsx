import SimpleButton from "@/Template/Components/Button/SimpleButton";


const formattedNumber = (number: any) => {
    return number.toLocaleString("en-US");
};

const RuntahCoin = () => {
    return (
        <div className="bg-gray-300 ml-3 mr-3 -mt-10  rounded-lg">
            <div className="grid grid-cols-3">
                <div className="col-span-2 mb-5">
                    <h5 className="ml-4 font-semibold pt-1 text-xl">
                        Runtah Coin
                    </h5>

                    <h6 className="ml-4 font-semibold pb-2 text-3xl">
                        {formattedNumber(10000)}
                    </h6>
                </div>
                <div className="col-span-1">
                    <div className="float-right mt-5 mr-5">
                        <SimpleButton type="button" className="bg-green-800">
                            Tukar
                        </SimpleButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RuntahCoin;