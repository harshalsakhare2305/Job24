import React from 'react';
import thumbsUpMan from '../Assets/aiman.png'
import slackIcon from '../Assets/slack.png'
import google from '../Assets/google.png'
import amazon from '../Assets/Amazon.png'
import Netflix from '../Assets/Netflix.png'
import apple from '../Assets/Apple.png'
import meta from '../Assets/meta.png'
import microsoft from '../Assets/Mslogo.png';
import unstop from '../Assets/unstop.png'
import Slider from './Slider';
import { Link } from 'react-router-dom';


function Logout() {
  return (
    <div className=" flex flex-col items-center  text-white overflow-hidden   -z-[9999999] ">
    <h1 className="text-4xl font-bold mb-4">Find Your Perfect Job Match</h1>
    <p className="mb-8">Find Jobs, Employment & Career Opportunities</p>

<main className="flex justify-between  text-center w-full px-4">

<div className="mt-20 flex items-center justify-center relative">
<img src={thumbsUpMan} alt="Thumbs up" className="w-96 h-96  top-1/2 mx-10 rounded-full border-4 border-white" />
<div className="absolute top-[-75px] left-[200px] w-16 h-16 rounded-full bg-white flex items-center justify-center">
  <img src={meta} alt="Behance" className="w-full h-full rounded-full" />
</div>
<div className="absolute top-0 left-96 w-16 h-16 rounded-full bg-white flex items-center justify-center">
  <img src={microsoft} alt="Slack" className="w-full h-full rounded-full" />
</div>
<div className="absolute top-[-55px] left-[300px] w-16 h-16 rounded-full bg-white flex items-center justify-center">
  <img src={google} alt="Behance" className="w-full h-full rounded-full" />
</div>
<div className="absolute top-24 left-[95%] w-16 h-16 rounded-full bg-white flex items-center justify-center">
  <img src={amazon} alt="Figma" className="w-full h-full rounded-full" />
</div>
<div className="absolute bottom-[120px] right-[-40px] w-16 h-16 rounded-full bg-white flex items-center justify-center">
  <img src={Netflix} alt="Amazon" className="w-full h-full rounded-full" />
</div>
<div className="absolute bottom-8 left-[85%] w-16 h-16 rounded-full bg-white flex items-center justify-center">
  <img src={apple} alt="Wordpress" className="w-full h-full rounded-full" />
</div>
<div className="absolute bottom-[-40px] left-[70%] w-16 h-16 rounded-full bg-white flex items-center justify-center">
  <img src={slackIcon} alt="Wordpress" className="w-full h-full rounded-full" />
</div>

</div>

<div className='flex flex-col justify-center items-center'>
<h1 className="text-6xl font-bold text-blue-700 mb-7 mr-52">Unlock Ambition !</h1>
<p className="text-xl mb-8 mr-40">
Apply to a plethora of hiring opportunities & work with your dream companies!
</p>
<div className="flex gap-4 mr-36">
<Link to='/login'>
<button className="bg-blue-700 text-white py-2 px-4 rounded-md w-36 h-14 left-1/2">
Signin/SignUp</button></Link>

<Link to='/search'><button className="bg-blue-700 text-white py-2 px-4 rounded-md w-28 h-14 left-1/2">Find Jobs</button></Link>
<Link to='/admin'><button className="bg-white text-blue-400 py-2 px-4 rounded-md w-36 h-16 left-1/2">Post Jobs
/Internships</button></Link>


</div>
</div>


</main>

<main className='w-full h-full  flex justify-between mt-16'>
<div className=' bg-[rgb(74 11 200)]  w-full h-[550px] mt-20 rounded-lg ml-5'>
  <h1 className='flex justify-center text-white text-3xl'>About Us</h1>
  <h2 className='mt-3 text-xl flex justify-center'>Welcome to Job24! </h2>
  <div className='pl-5'>  <p className='mt-2'>At Job24, we believe in connecting the right people with the right opportunities. Our mission is to simplify the job search process, making it easier and faster for job seekers and employers to find their perfect match.
  </p>
  <p>Our mission is to bridge the gap between talent and opportunity. We strive to create a seamless, efficient, and user-friendly platform where job seekers can find their dream jobs and employers can discover the ideal candidates to drive their businesses forward.</p>
  <p>At Job24, we prioritize your success. Our dedicated team works tirelessly to ensure that our platform remains reliable, current, and valuable for all users. We continuously innovate and improve to meet the ever-changing needs of the job market.
Join Job24 today and take the next step towards achieving your career goals or finding the perfect addition to your team!</p>
<h2 className='flex justify-center my-4 text-xl'>What We Offer</h2>
<ul className='list-disc'>
  <li>Comprehensive Job Listings: With a vast array of job opportunities across various industries, we provide a platform that caters to every career aspiration.</li>
  <li>User-Friendly Experience: Our intuitive interface ensures that both job seekers and employers can navigate the site effortlessly, find what they need, and connect quickly.</li>
   <li>Career Resources: From resume tips to interview guides, we offer a wealth of resources to help job seekers succeed at every step of their career journey.
   </li>
  </ul></div>
</div>
<img src={unstop} alt=""  className='w-1/2 h-full right-1'/>

</main>

<div className='my-10 w-full h-52 bg-[rgb(42, 5, 70)]'>
  <h1 className='w-full flex justify-center text-3xl my-5'>Industry Veterans Trust us</h1>
  <Slider/>
</div>


</div>
   
  );
}

export default Logout;
