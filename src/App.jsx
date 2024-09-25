import Navbar from "./components/Navbar/Navbar..jsx"

import { useEffect, useState } from "react"

import { collection, query, orderBy, where, getDocs } from "firebase/firestore";
import {
  BrowserRouter as Router,
  Routes,
  Route,Link,
  Navigate
 
} from "react-router-dom";

import { db } from "../firebaseConfig"
import Login from './components/Login/Login.jsx'
import Logout from './components/Login/Logout.jsx'
import Register from './components/Login/Register.jsx'
import GoldmanSacs from './components/Companies/GoldmanSacs.jsx';
import Google from './components/Companies/Google.jsx';
import MicroSoft from './components/Companies/MicroSoft.jsx';
import Walmart from './components/Companies/Walmart.jsx';
import Adobe from './components/Companies/Adobe.jsx';
import Atlasein from './components/Companies/Atlasein.jsx';
import Company from './components/Companies/Company.jsx';
import { GoogleLogin } from '@react-oauth/google';
import Search from "./Search.jsx"
import Admin from "./components/Admin/Admin.jsx"
import Skills from "./components/Admin/Skills.jsx"
import Amazon from "./components/Companies/Amazon.jsx";
import Meta from './components/Companies/Meta.jsx'



function App() {
  const [log, setlog] = useState(true);
  const [user, setuser] = useState({});
  const [newuser, setnewuser] = useState({});

  
  return (
    <div>

      <Navbar  user={user}  setuser={setuser} newuser={newuser}  setnewuser={setnewuser}/>
      
       <Routes>
       <Route exact path="/" element={<Logout/>}/>
        <Route exact path="/admin"
         element={(Object.keys(user).length==0 && Object.keys(newuser).length==0 )? (<Navigate to="/login" /> ):(<Admin/>)}
         />

        <Route exact path="/login" element={<Login user={user}  setuser={setuser} />} />
        <Route exact path="/register" element={<Register newuser={newuser}  setnewuser={setnewuser} />} />
        <Route exact path="/company" element={<Company/>}/>
        <Route exact path="/search" element={<Search user={user} setuser={setuser}/>}/>
        <Route exact path="/company/gooogle" element={<Google/>} />
        <Route exact path="/company/microsoft" element={<MicroSoft/>}/>
        <Route exact path="/company/Adobe" element={<Adobe/>} />
        <Route exact path="/company/amazon" element={<Amazon/>} />
        <Route exact path="/company/meta" element={<Meta/>} />
        <Route exact path="/company/Atlasein" element={<Atlasein/>}/>
        <Route exact path="/company/GoldmanSacs" element={<GoldmanSacs/>} />
        <Route exact path="/company/walmart" element={<Walmart/>}/>
     
        
       </Routes>
      

     
    </div>
  )
}

export default App
