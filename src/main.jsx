import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from './components/Navbar/Navbar..jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';

import './index.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
 
} from "react-router-dom";
import Login from './components/Login/Login.jsx'
import GoldmanSacs from './components/Companies/GoldmanSacs.jsx';
import Google from './components/Companies/Google.jsx';
import MicroSoft from './components/Companies/MicroSoft.jsx';
import Walmart from './components/Companies/Walmart.jsx';
import Adobe from './components/Companies/Adobe.jsx';
import Atlasein from './components/Companies/Atlasein.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <GoogleOAuthProvider clientId="<345031804783-j1echir139npkplk88r3ktijoghagdqs.apps.googleusercontent.com>">
    <Router>
      <Navbar />
       <Routes>
        <Route exact path="/app" element={ <App />} />
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/company" element={<Atlasein/>}/>
       </Routes>
      </Router>
      </GoogleOAuthProvider>;

  </React.StrictMode>,
)
