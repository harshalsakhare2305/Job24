import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import profilePic from '../Assets/user.png'
import { useNavigate } from 'react-router-dom';
import { getAuth,signOut } from 'firebase/auth';
import { app } from '../../../firebaseConfig';

const Profile = ({user,setuser , newuser ,setnewuser}) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      setuser({});
      const auth = getAuth(app);
      await signOut(auth).then(() => {
        setnewuser({});
        alert("Signed out successfully");
      }).catch((err) => {
        alert("Sign out failed");
        console.log(err);
      });
      
      navigate('/');
    } catch (err) {
      alert("Sign out failed");
      console.log(err);
    }
  };

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center">
        <img
          src={profilePic}
          alt="Profile"
          className="w-8 h-8 rounded-full"
        />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-blue-600 rounded-lg shadow-lg overflow-hidden z-20">
          <div className="px-4 py-3 text-center border-b">
            <img
              src={profilePic}
              alt="Profile"
              className="w-8 h-8 rounded-full mx-auto"
            />
            <p className="mt-2 text-gray-900">{user.email}</p>
          
          </div>
          <div className="px-4 py-3 border-t">
            
            
           
            <button onClick={handleLogout} className="flex items-center">
              <span role="img" aria-label="Sign Out" className="mr-2">🚪</span>
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;