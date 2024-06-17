import { React,useState } from 'react'
import { Link } from 'react-router-dom'

  
function Navbar() {
  const [auth,setauth]=new useState(false);
  const [vari,setvari] =new useState("Login");
 
  

  const authlogin=()=>{
     if(auth===false){
      setauth(true);
      setvari("Logout");
     }else{
      // setauth(false);
      setvari("Login");
     }
  }
  return (
    <div className='h-20 flex items-center w-full text-white'>
        <div className='text-3xl pl-20 font-bold'>Job24</div>
        <ul className='flex flex-row justify-end text-xl mx-5
         w-full ' >
            <li className='mx-4 hover:text-green-400'><Link to='/app'>Search</Link></li>
          <li className='mx-4 hover:text-green-400'>Admin Portal</li>
        <li className='mx-4 hover:text-green-400'>Company</li> 
        <li className='mx-4  hover:text-green-400'>Contact Us</li>
        <li className='mx-4  hover:text-green-400'><Link to="/login" onClick={authlogin}>Login</Link></li>

        </ul>

    </div>
  )

}

export default Navbar