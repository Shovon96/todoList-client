import { useContext } from "react";
import { useForm } from "react-hook-form"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";


const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => {
                toast.success("Login Successfully");
                // toast.success('Successfully toasted!')
                navigate(from, { replace: true })
            })
    }
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()
    const onSubmit = (data) => {
        signIn(data.email, data.password)
            .then(() => {
                toast.success('Successfully Login!')
            })
            .catch(err => {
                toast.error(err.message)
                navigate('/login')
            })
        navigate(from, { replace: true })
    };

    return (
        <div className="h-[90vh] flex items-center justify-center"  style={{backgroundImage: 'url(https://t3.ftcdn.net/jpg/04/17/77/78/360_F_417777825_v7o8RvkQhxpZkE0ZBD4xwzri5hGFHkO3.jpg)'}}>
            <div className="border shadow-lg shadow-gray-400 px-8 py-4 rounded-lg w-full sm:w-96 text-white">
                {/* <h1 className="text-4xl font-bold text-blue-600 text-center py-6">SignIn</h1> */}
                <img className="pb-4" src="https://media.discordapp.net/attachments/1177886803424976896/1187365090618511442/image.png?ex=65969ee9&is=658429e9&hm=0649a2e95842831b7cbf00aca54af762040bb187d7de9b306a668a5115a40f6c&=&format=webp&quality=lossless" alt="" />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label htmlFor="" className="text-base font-semibold mb-1 pl-1">Email:</label>
                        <input
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                            placeholder="Type Your Email..."
                            type="email"
                            id="email"
                            name="email"
                            {...register('email', { required: 'Email is required!' })}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="" className="text-base font-semibold mb-1 pl-1">Password</label>
                        <input
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                            placeholder="Type Your Password..."
                            type="password"
                            id="password"
                            name="password"
                            {...register('password', { required: 'Password is required!' })}
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                    </div>
                    <div>
                        <p className="text-blue-400 text-sm underline mb-3">Forget your password?</p>
                    </div>
                    <button type="submit" radius="full" 
                    className="bg-gradient-to-tr from-blue-300 to-blue-600 w-full mb-4 font-bold text-lg text-white rounded-lg py-2 hover:to-blue-700">
                        Submit
                    </button>
                    <hr />
                    <button
                        onClick={handleGoogleSignIn}
                        className="w-full text-lg font-bold mt-4 rounded-full flex gap-2 items-center justify-center border py-1 hover:bg-gray-300 hover:text-black"
                    >
                        <FcGoogle className="text-xl" /> GOOGLE
                    </button>
                </form>
                <p className="text-sm mt-3 text-center">New here to go?<Link to='/registetion' className="text-red-600 font-semibold underline"> SignUp</Link></p>
            </div>
        </div>
    );
};

export default Login;