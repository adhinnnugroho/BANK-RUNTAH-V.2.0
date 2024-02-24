import BorderButton from "@/Components/Button/BorderButton";
import SimpleButton from "@/Components/Button/SimpleButton";
import SimpleCard from "@/Components/Card/SimpleCard";
import SimpleInput from "@/Components/Input/simpleInput";
import Image from "next/image";


const Login = () => {
    return (
        <SimpleCard>

            <div className="flex mb-10 mt-10">
                <Image
                    src="/assets/img/logo/logo.png"
                    width={56}
                    height={56}
                    alt="Picture of the author"
                />
                <div className="font-semibold text-2xl ml-2">
                    Selamat Datang <br /> <span className="text-green-600">di Bank Runtah</span>
                </div>
            </div>



            <SimpleInput type="text" name="email" label="Email" placeholder="mail@runtah.com" />
            <SimpleInput type="password" name="password" label="Password" placeholder="****" />
            <SimpleButton type="submit" className="w-full" bg_color="bg-green-500">Login</SimpleButton>
            <div className="flex">
                <div className="border border-gray-600 mb-5 mt-5 w-[45%]"></div>
                <div className="mt-2 ml-2 mr-2">Or</div>
                <div className="border border-gray-600 mb-5 mt-5  w-[45%]  float-end"></div>
            </div>
            <BorderButton icons="google">
                Login with Google
            </BorderButton>
        </SimpleCard>
    )
}
export default Login;