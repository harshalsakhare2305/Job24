import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from './components/Navbar/Navbar..jsx'

import './index.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
 
} from "react-router-dom";
import Login from './components/Login/Login.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Navbar />
       <Routes>
        <Route exact path="/app" element={ <App />} />
        <Route exact path="/login" element={<Login/>}/>
       </Routes>
      </Router>

  </React.StrictMode>,
)
