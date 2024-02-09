import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";


const Registetion = () => {
    const { createUser, googleSignIn } = useContext(AuthContext)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        // console.log(data);
        createUser(data.email, data.password)
            .then(() => {
                toast.success('Successfully Login!!')
                navigate('/')
                // updateUserProfile(data.name, data.photo)
                //     .then(() => {
                //         const userInfo = {
                //             name: data.name,
                //             email: data.email
                //         }
                //         axiosPublic.post('/users', userInfo)
                //             .then(res => {
                //                 if (res.data.insertedId) {
                //                     toast.success('Successfully Login!!')
                //                     navigate('/home')
                //                 }
                //             })
                //     })
            })
            .catch(err => {
                toast.error(err.message)
            })
        reset()

    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => {
                toast.success("Login Successfully");
                // toast.success('Successfully toasted!')
                navigate(from, { replace: true })
            })
    }

    return (
        <div className="h-auto py-12 flex items-center justify-center">
            <div className="bg-white shadow-lg shadow-gray-400 px-8 py-4 rounded-lg w-full sm:w-96">
                {/* <h1 className="text-4xl font-bold text-blue-600 text-center py-6">SignUp</h1> */}
                <img className="pb-4" src="https://media.discordapp.net/attachments/1177886803424976896/1187365090618511442/image.png?ex=65969ee9&is=658429e9&hm=0649a2e95842831b7cbf00aca54af762040bb187d7de9b306a668a5115a40f6c&=&format=webp&quality=lossless" alt="" />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label htmlFor="" className="text-base font-semibold mb-1 pl-1">Name:</label>
                        <input
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                            placeholder="Enter Your Name..."
                            type="text"
                            id="name"
                            name="name"
                            {...register('name', { required: 'Name is required!' })}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="" className="text-base font-semibold mb-1 pl-1">Photo URL:</label>
                        <input
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                            placeholder="Enter Your Photo URL..."
                            type="text"
                            id="photo"
                            name="photo"
                            {...register('photo', { required: 'Photo URL is required!' })}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="" className="text-base font-semibold mb-1 pl-1">Emal:</label>
                        <input
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                            placeholder="Enter Your Email..."
                            type="email"
                            id="email"
                            name="email"
                            {...register('email', { required: 'Email is required!' })}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="" className="text-base font-semibold mb-1 pl-1">Password:</label>
                        <input
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                            placeholder="Enter Your Password..."
                            type="password"
                            id="password"
                            name="password"
                            {...register('password', { required: 'Password is required!' })}
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                    </div>
                    <button type="submit" radius="full"
                        className="bg-gradient-to-tr from-blue-300 to-blue-600 w-full mb-4 font-bold text-lg text-white rounded-lg py-2 hover:to-blue-700">
                        Submit
                    </button>
                    <hr />
                    <button
                        onClick={handleGoogleSignIn}
                        className="w-full text-lg font-bold mt-4 rounded-full flex gap-2 items-center justify-center border py-1 hover:bg-gray-100"
                    >
                        <FcGoogle className="text-xl" /> GOOGLE
                    </button>
                </form>
                <p className="text-sm mt-3 text-center">New here to go?<Link to='/login' className="text-red-600 font-semibold underline"> SignUp</Link></p>
            </div>
        </div>
    );
};

export default Registetion;