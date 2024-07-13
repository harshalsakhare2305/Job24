import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from "../../../firebaseConfig.js";

function Register({ newuser, setnewuser }) {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const navigate = useNavigate();

  const register = () => {
    if (pass !== confirmPass) {
      alert("Passwords do not match");
      return;
    }

    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        const userObject = {
          email: userCredential.user.email,
          pass: userCredential.user.pass,
          // You can add more user details here if needed
        };
        setnewuser(userObject);
        localStorage.setItem('user', JSON.stringify(userObject));
        navigate('/search');
        alert("You have been registered successfully");
      })
      .catch((err) => {
        if (err.code === 'auth/email-already-in-use') {
          alert('This email is already in use. Please try logging in or use a different email.');
          navigate('/login');
        } else {
          console.error(err);
          alert("Registration failed");
        }
      });
  }

  return (
    <>
      <div className='flex justify-center items-center '>
        <div id='logbox' className='h-2/3 w-2/5 bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-blur-sm bg-opacity-30 relative'>
          <form action="" className='flex flex-col justify-center items-center'>
            <h1 className='text-4xl text-white font-bold text-center mb-6'>Register</h1>

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
              >Password</label>
            </div>

            <div className='relative my-4'>
              <input type="password" onChange={(e) => { setConfirmPass(e.target.value) }} className='block w-80 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' />
              <label htmlFor="" className='absolute text-sm text-white duration-300 transform translate-y-[-0.5rem] scale-75 top-0 z-10 origin-[0] peer-focus:left peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >Confirm Password</label>
            </div>

            <button type="button" onClick={register} className='w-96 mb-4 text-[18px] mt-6 rounded-full bg-blue-500 text-white-600 hover:text-green-500 py-2 transition-colors duration-300'>Register</button>

            <div>
              <span className='mt-4'>Already have an account? <Link to="/login" className='text-blue-500'>Login</Link></span>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}


export default Register;
