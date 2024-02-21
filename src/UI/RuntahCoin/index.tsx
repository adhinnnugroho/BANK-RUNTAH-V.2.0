import SimpleButton from "@/Components/Button/SimpleButton";


const formattedNumber = (number: any) => {
    return number.toLocaleString("en-US");
};
const RuntahCoin = () => {
    return (
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
    );
}

export default RuntahCoin;