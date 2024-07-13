import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { app } from "../../../firebaseConfig.js";
import {jwtDecode} from 'jwt-decode';

function Login({ user, setuser }) {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth(app);
    setPersistence(auth, browserLocalPersistence).then(() => {
      const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
        if (firebaseUser) {
          const userObject = {
            email: firebaseUser.email,
            // Add more user details here if needed
          };
          setuser(userObject);
          localStorage.setItem('user', JSON.stringify(userObject));
          navigate('/search');
        } else {
          setuser({});
          localStorage.removeItem('user');
        }
      });

      // Clean up subscription to avoid memory leaks
      return () => unsubscribe();
    });
  }, [setuser, navigate]);

  const handleResponse = (response) => {
    console.log(response.credential);
    let userobject = jwtDecode(response.credential);
    setuser(userobject);
    console.log(userobject);
    localStorage.setItem('user', JSON.stringify(userobject)); // Save user to local storage
    navigate('/search');
    alert("You have been Logged in Successfully");
  };

  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id: "471681141394-fsrbu3qr9d4urd9eqs7v4jc7cjjjs58g.apps.googleusercontent.com",
      callback: handleResponse
    });

    window.google.accounts.id.renderButton(document.getElementById('signIn'), {
      theme: 'outline',
      size: 'large'
    });
  }, []);

  const signIn = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const auth = getAuth(app); // Initialize auth here
    signInWithEmailAndPassword(auth, email, pass)
      .then((value) => {
        const userObject = {
          email: value.user.email,
          // Add more user details here if needed
        };
        setuser(userObject);
        localStorage.setItem('user', JSON.stringify(userObject));
        console.log('Firebase login successful:', value);
        alert("Logged in");
        navigate('/search');
      })
      .catch((err) => {
        console.log('Firebase login failed:', err);
        alert("Login Failed: " + err.message);
      });
  };
  return (
    <>
      <div className='flex justify-center items-center '>
        <div id='logbox' className='  h-2/3 w-2/5 bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-blur-sm bg-opacity-30 relative'>

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
              <div id="signIn">
              </div>
            </div>
            <div>
              <span className='mt-4'>New Here? <Link to="/register" className='text-blue-500 '>Create An Account</Link></span>
            </div>
          </form>

        </div>
      </div>
    </>
  )
}


export default Login;
