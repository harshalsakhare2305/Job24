import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from "../../../firebaseConfig.js"
import { GoogleLogin } from '@react-oauth/google';







function Login() {
    const [email, setemail] = useState("");
    const [pass, setpass] = useState("");


    const auth = getAuth(app);
    const googleprovider = new GoogleAuthProvider();
    const signIn = () => {
        signInWithEmailAndPassword(auth, email, pass).then((value) => { console.log(value) }).catch((err) => console.log(err));
    }

    const googlesignIn = () => {
        signInWithPopup(auth, googleprovider);
    }


    return (
        <div className='flex justify-center items-center'>
            <div className='  h-2/3 w-2/5 bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-blur-sm bg-opacity-30 relative'>

                <form action="" className='flex  flex-col justify-center items-center'>
                    <h1 className='text-4xl text-whitefont-bold text-center mb-6'>Login</h1>

                    <div className='relative my-4'>
                        <input
                            type="email" onChange={(e) => { setemail(e.target.value) }}
                            className='block w-80 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer'
                        />
                        <label
                            htmlFor=""
                            className='absolute text-sm text-white duration-300 transform translate-y-[-0.5rem] scale-75 top-0 z-10 origin-[0] peer-focus:left peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                        >
                            Your Email
                        </label>
                    </div>



                    <div className='relative my-4'>
                        <input type="password" onChange={(e) => { setpass(e.target.value) }} className='block w-80 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' />
                        <label htmlFor="" className='absolute text-sm text-white duration-300 transform translate-y-[-0.5rem] scale-75 top-0 z-10 origin-[0] peer-focus:left peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                        > Password</label>
                    </div>

                    <div className='flex justify-between gap-16 items-center'>
                        <div className='flex gap-2 items-center'>
                            <input type="checkbox" />
                            <label htmlFor="Remember Me"> Remember Me</label>
                        </div>

                        <Link to='' className=' text-blue-500'>Forgot Password</Link>
                    </div>

                    <button type="submit" onClick={signIn} className='w-96 mb-4 text-[18px] mt-6 rounded-full bg-blue-500 text-white-600 hover:text-green-500 py-2 transition-colors duration-300'>Login</button>

                    <h3 className='flex justify-start my-1'>OR</h3>
                    <div className='flex flex-col '>
                        <span><GoogleLogin
                            onSuccess={credentialResponse => {
                                console.log(credentialResponse);
                            }}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        />;</span>
                        {/* <button type="submit" className='w-72 mb-4 text-[18px] mt-6 rounded-full bg-white text-black-600 hover:text-blue-500 py-2 transition-colors duration-300'>
                              <span><img src="../../google.png" alt="googlepng" className='h-6 w-6 inline ' /></span>  Signin with Google
                             </button> */}


                    </div>
                    <div>
                        <span className='mt-4'>New Here? <Link to="Register" className='text-blue-500 '>Create An Account</Link></span>
                    </div>
                </form>

            </div>
        </div>

    )
}

export default Login

