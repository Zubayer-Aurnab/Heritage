import { Divider, Input } from 'antd';
import img1 from '../../assets/images/img5.jpg'
import Footer from "../../Components/Shared/Footer/Footer";
import NavBar from "../../Components/Shared/NavBar/NavBar";
// import Password from 'antd/es/input/Password';
import { IoIosLogIn } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import useAuth from '../../Hooks/useAuth';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useAxiosURL from '../../Hooks/useAxiosURL';

const Login = () => {
    const API = useAxiosURL()
    const navigate = useNavigate()
    const location = useLocation()
    const { GoogleAuth, LogInUser } = useAuth()
    const [Email, setEmail] = useState()
    const [Password, setPassword] = useState()


    const GoogleLogin = () => {
        GoogleAuth()
            .then(res => {
                const userInfo = {
                    email: res?.user?.email,
                    name: res?.user?.displayName,
                    photo: res?.user?.photoURL,
                    role: ""
                }
                console.log(userInfo)

                API.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data)
                        toast.success("Log in successful")
                        navigate(location?.state ? location.state : '/')
                    })
            })
            .catch(err => {
                toast.error(`error: ${err.message}`)
            })
    }
    const handelSubmit = (e) => {
        e.preventDefault()
        if (!Email) {
            return toast.error("Email is Required")
        }
        if (!Password) {
            return toast.error("Password is Required")
        }
        LogInUser(Email, Password)
            .then(res => {
                setEmail('');
                setPassword('');
                toast.success("Log In successful")
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                toast.error(`error: ${err.message}`)
            })

    }
    return (
        <div>
            
            <div className='relative mb-72'>
                <img className='h-[40vh] w-full object-cover' src={img1} alt="" />
                <div className='bg-[#ECF5FF]  w-[50%] mx-auto p-8 absolute -bottom-52 left-1/2 transform -translate-x-1/2 rounded-lg shadow-xl z-50'>
                    <form
                        onSubmit={handelSubmit}
                    >
                        <h1 className='text-[#0051A1] font-[Montserrat] text-4xl font-semibold text-center'>Log In </h1>
                        <div>
                            <h1 className='text-[#0051A1] font-[Poppies] text-lg'>Email</h1>
                            <Input onChange={() => setEmail(event.target.value)} value={Email} size="large" type='email' />
                        </div>
                        <div className='mt-4'>
                            <h1 className='text-[#0051A1] font-[Poppies] text-lg'>Password</h1>
                            <Input.Password onChange={() => setPassword(event.target.value)} value={Password} size="large" />
                        </div>
                        <div className='flex justify-center'>
                            <button className='bg-[#0059B1] text-white font-[Poppins] py-2 px-3 lg:py-3 lg:px-5 rounded-[4px] flex items-center mt-8 lg:mt-8  gap-2'>
                                <IoIosLogIn className='text-2xl ' /> Log In
                            </button>
                        </div>
                        <Divider>or</Divider>


                    </form>
                    <div className='flex justify-center'>
                        <button
                            onClick={GoogleLogin}
                            className='bg-[#ECF5FF] text-[#0059B1]  font-[Poppins] py-3 px-5 rounded-[4px] flex items-center border border-[#0059B1]  gap-2'>
                            <FcGoogle className='text-2xl ' /> Google
                        </button>
                    </div>
                    {/*  eslint-disable-next-line react/no-unescaped-entities */}
                    <p>Don't Have Account ? <span><Link className='underline' to={'/registration'}>Register</Link></span></p>
                </div>
            </div>

           
        </div>
    );
};

export default Login;