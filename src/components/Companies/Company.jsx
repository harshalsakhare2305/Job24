import React from 'react'
import { Link } from 'react-router-dom'
import google  from '../Assets/google.png'
import Microsoft  from '../Assets/Mslogo.png'
import Adobe from '../Assets/Adobelogo.png'
import GS from '../Assets/GSlogo.png'
import Atlassian from '../Assets/Atlassian-Logo.png'
import walmart from '../Assets/walmartlogo.png'
import meta from '../Assets/meta.png'
import Amazon from '../Assets/Amazon.png'
import BNY from '../Assets/BNY.png'
import Netflix from '../Assets/Netflix.png'
import Nvidia from '../Assets/Nvidia.png'
import cs from '../Assets/CS.png'
import apple from '../Assets/Apple.png'
import { app } from '../../../firebaseConfig'
import Walmart from './Walmart'









function Company() {
  
  return (
    <>
     <div className=' flex flex-col gap-5 items-center justify-center text-white '>
         <h1 className='text-4xl font-bold'>Wanna Master the Technical Interviews?</h1>
         <p className='text-2xl my-5'>Ace Your Interview Preparation with Some Of Best Questions And Resources !</p>
     </div>

     <div className="flex justify-center items-center">
      <div className="grid grid-cols-5 gap-4">
        <div className="bg-blue-100 rounded-lg shadow-md p-6 text-center">
          <div className="flex justify-center items-center mb-4">
            <img src={Amazon} alt="Amazon logo" className="w-20 h-20" />
          </div>
          <h2 className="text-xl font-bold mb-2">Amazon</h2>
          <p className="text-gray-600 text-sm">Amazon is an e-commerce platform founded in 1994 by Jeff Bezos</p>
          <div className="flex justify-center items-center mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2a1 1 0 002 0v-2zm-1 7a1 1 0 10-2 0v2a1 1 0 002 0v-2z" />
            </svg>
            <span className="ml-2 text-sm font-medium">Trusted by 52,108</span>
          </div>
          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"><Link to='/company/amazon'>Start now</Link></button>
        </div>

        <div className="bg-pink-100 rounded-lg shadow-md p-6 text-center">
          <div className="flex justify-center items-center mb-4">
            <img src={google} alt="Google logo" className="w-20 h-20" />
          </div>
          <h2 className="text-xl font-bold mb-2">Google</h2>
          <p className="text-gray-600 text-sm">Google is a tech giant working on artificial intelligence, search engine, e-commerce.</p>
          <div className="flex justify-center items-center mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2a1 1 0 002 0v-2zm-1 7a1 1 0 10-2 0v2a1 1 0 002 0v-2z" />
            </svg>
            <span className="ml-2 text-sm font-medium">Trusted by 52,590 </span>
          </div>
          <button className="mt-4 bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full"><Link to='/company/gooogle'>Start now</Link></button>
        </div>

        <div className="bg-cyan-100 rounded-lg shadow-md p-6 text-center">
          <div className="flex justify-center items-center mb-4">
            <img src={Microsoft} alt="Microsoft logo" className="w-20 h-20" />
          </div>
          <h2 className="text-xl font-bold mb-2">Microsoft</h2>
          <p className="text-gray-600 text-sm">Microsoft develops a range of products, including personal computers and software</p>
          <div className="flex justify-center items-center mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2a1 1 0 002 0v-2zm-1 7a1 1 0 10-2 0v2a1 1 0 002 0v-2z" />
            </svg>
            <span className="ml-2 text-sm font-medium">Trusted by 53,402</span>
          </div>
          <button className="mt-4 bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-full"><Link to='/company/microsoft'>Start now</Link></button>
        </div>

        <div className="bg-yellow-100 rounded-lg shadow-md p-6 text-center">
          <div className="flex justify-center items-center mb-4">
            <img src={meta} alt="Meta logo" className="w-20 h-20" />
          </div>
          <h2 className="text-xl font-bold mb-2">Meta</h2>
          <p className="text-gray-600 text-sm">Meta is a social media and network service provider based in the United States</p>
          <div className="flex justify-center items-center mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2a1 1 0 002 0v-2zm-1 7a1 1 0 10-2 0v2a1 1 0 002 0v-2z" />
            </svg>
            <span className="ml-2 text-sm font-medium">Trusted 52,022</span>
          </div>
          <button className="mt-4 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full"><Link to='/company/meta'>Start now</Link></button>
        </div>

        <div className="bg-red-100 rounded-lg shadow-md p-6 text-center">
          <div className="flex justify-center items-center mb-4">
            <img src={apple} alt="Apple logo" className="w-20 h-20" />
          </div>
          <h2 className="text-xl font-bold mb-2">Apple Inc</h2>
          <p className="text-gray-600 text-sm">Apple Inc. founded in 1976 is known for selling computer and mobile phone devices</p>
          <div className="flex justify-center items-center mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2a1 1 0 002 0v-2zm-1 7a1 1 0 10-2 0v2a1 1 0 002 0v-2z" />
            </svg>
            <span className="ml-2 text-sm font-medium">Trusted by 48,370</span>
          </div>
          <button className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"><Link to='/company/apple'>Start now</Link></button>
        </div>

        <div className="bg-red-100 rounded-lg shadow-md p-6 text-center">
          <div className="flex justify-center items-center mb-4">
            <img src={Adobe} alt="Apple logo" className="w-20 h-20" />
          </div>
          <h2 className="text-xl font-bold mb-2">Adobe</h2>
          <p className="text-gray-600 text-sm">Adobe, founded in 1982 ,it is a leading software company known for its innovative digital media and marketing solution</p>
          <div className="flex justify-center items-center mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2a1 1 0 002 0v-2zm-1 7a1 1 0 10-2 0v2a1 1 0 002 0v-2z" />
            </svg>
            <span className="ml-2 text-sm font-medium">Trusted by 48,980</span>
          </div>
          <button className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"><Link to='/company/Adobe'>Start now</Link></button>
        </div>

        <div className="bg-yellow-100 rounded-lg shadow-md p-6 text-center">
          <div className="flex justify-center items-center mb-4">
            <img src={GS} alt="Meta logo" className="w-20 h-20" />
          </div>
          <h2 className="text-xl font-bold mb-2">Goldman Sachs</h2>
          <p className="text-gray-600 text-sm">Goldman Sachs, founded in 1869,is a leading global investment banking, securities, and investment management firm</p>
          <div className="flex justify-center items-center mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2a1 1 0 002 0v-2zm-1 7a1 1 0 10-2 0v2a1 1 0 002 0v-2z" />
            </svg>
            <span className="ml-2 text-sm font-medium">Trusted 56,084</span>
          </div>
          <button className="mt-4 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full"><Link to='/company/GoldmanSacs'>Start now</Link></button>
        </div>

        <div className="bg-pink-100 rounded-lg shadow-md p-6 text-center">
          <div className="flex justify-center items-center mb-4">
            <img src={walmart} alt="Google logo" className="w-20 h-20" />
          </div>
          <h2 className="text-xl font-bold mb-2">Walmart</h2>
          <p className="text-gray-600 text-sm">Walmart, founded in 1962, is a multinational retail corporation known for its chain of hypermarkets, discount department stores, and grocery stores..</p>
          <div className="flex justify-center items-center mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2a1 1 0 002 0v-2zm-1 7a1 1 0 10-2 0v2a1 1 0 002 0v-2z" />
            </svg>
            <span className="ml-2 text-sm font-medium">Trusted by 54,820 </span>
          </div>
          <button className="mt-4 bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full"><Link to='/company/walmart'>Start now</Link></button>
        </div>

        <div className="bg-blue-100 rounded-lg shadow-md p-6 text-center">
          <div className="flex justify-center items-center mb-4">
            <img src={Atlassian} alt="Amazon logo" className="w-20 h-20" />
          </div>
          <h2 className="text-xl font-bold mb-2">Atlassein</h2>
          <p className="text-gray-600 text-sm">
          Atlassian, founded in 2002 by Mike Cannon-Brookes and Scott , is an Australian enterprise software company</p>
          <div className="flex justify-center items-center mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2a1 1 0 002 0v-2zm-1 7a1 1 0 10-2 0v2a1 1 0 002 0v-2z" />
            </svg>
            <span className="ml-2 text-sm font-medium">Trusted by 52,785</span>
          </div>
          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"><Link to='/company/Atlasein'>Start now</Link></button>
        </div>

        <div className="bg-cyan-100 rounded-lg shadow-md p-6 text-center">
          <div className="flex justify-center items-center mb-4">
            <img src={Netflix} alt="Microsoft logo" className="w-20 h-20" />
          </div>
          <h2 className="text-xl font-bold mb-2">Netflix</h2>
          <p className="text-gray-600 text-sm">Netflix, founded in 1997 by Reed Hastings, 
            is a leading global streaming entertainment service</p>
          <div className="flex justify-center items-center mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2a1 1 0 002 0v-2zm-1 7a1 1 0 10-2 0v2a1 1 0 002 0v-2z" />
            </svg>
            <span className="ml-2 text-sm font-medium">Trusted by 53,402</span>
          </div>
          <button className="mt-4 bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-full"><Link to='/company/microsoft'>Start now</Link></button>
        </div>

        

        

        
      </div>
    </div>

    </>
  )
}

export default Company
