import SimpleButton from "@/Components/Button/SimpleButton";
import SimpleCard from "@/Components/Card/SimpleCard";
import SimpleInput from "@/Components/Input/simpleInput";

const Login = () => {
    return (
        <SimpleCard>
            <SimpleInput type="text" name="email" label="Email" placeholder="mail@runtah.com" />
            <SimpleInput type="password" name="password" label="Password" placeholder="****" />
            <SimpleButton type="submit" className="w-full" bg_color="bg-green-500">Login</SimpleButton>
            <h5 className="text-center mt-5 ">Or</h5>
            <a className="flex items-center justify-center w-full py-4 mb-6 text-sm font-medium transition duration-300 
            rounded-2xl text-grey-900 bg-grey-300 hover:bg-grey-400 focus:ring-4 focus:ring-grey-300 border border-green-600 mt-5">
                <i className='bx bxl-google text-xl'></i>
                Sign in with Google
            </a>
        </SimpleCard>
    )
}
export default Login;