import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { app } from '../../../firebaseConfig';
import userimg from '../Assets/user.png'

import Profile from '../Login/Profile';

function Navbar({ user, setuser, newuser, setnewuser }) {
 

  const isAuthenticated = Object.keys(user).length !== 0 || Object.keys(newuser).length !== 0;

  

  return (
    <>
      <div className='h-20 flex fixed top-0 left-0 right-0 items-center w-full bg-blue-950 text-white z-10'>
        <div className='text-3xl pl-20 font-bold'>Job24</div>
        <ul className='flex flex-row justify-end text-xl mx-5 w-full'>
          <li className='mx-4 hover:text-green-400'><Link to='/'>Home</Link></li>
          <li className='mx-4 hover:text-green-400'><Link to='/search'>Search</Link></li>
          <li className='mx-4 hover:text-green-400'><Link to='/admin'>Admin Portal</Link></li>
          <li className='mx-4 hover:text-green-400'><Link to='/company'>Company</Link></li>
          {isAuthenticated
            ? <li className='mx-4 hover:text-green-400'>
               <Profile user={user} setuser={setuser}  newuser={newuser} setnewuser={setnewuser}/>
            </li>

            : <li className='mx-4 hover:text-green-400'><Link to='/login'>Login</Link></li>

            // <button onClick={handleLogout}>Logout</button>
            //<button onClick={handleprofile}><img src={userimg} alt="user" className='h-8 w-8 rounded-full inline' /><p className='inline ml-2'>Profile</p></button>
          }
        </ul>
      </div>
      <div className='pt-28'>
        {/* Your main content goes here */}
      </div>
    </>
  );
}

export default Navbar;
