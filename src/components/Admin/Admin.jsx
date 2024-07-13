// AddJobForm.js
import React, { useState } from 'react';
import dayjs from 'dayjs'
import { ref,set,push } from "firebase/database";
import { database } from '../../../firebaseConfig';

const Admin = () => {
    const date1 = dayjs().format('YYYY-MM-DDTHH:mm:ssZ'); // Format the date string correctly
  const [formData, setFormData] = useState({
    company: '',
    experience:'',
    title: '',
    jobDescription:'',
    skill:[],
    location: '',
    type: '',
    job_link: '',
    email: '',
    postedOn:date1
  });

  
  const [newSkill, setNewSkill] = useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const handleAddSkill = () => {
    if (newSkill.trim() !== '') {
      setFormData((prevState) => ({
        ...prevState,
        skill: [...prevState.skill, newSkill],
      }));
      setNewSkill('');
    }
  };

  
  const handleRemoveSkill = (index) => {
    setFormData((prevState) => ({
      ...prevState,
      skill: prevState.skill.filter((_, i) => i !== index),
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.skill.length === 0) {
        alert("User must add atleast One Skil");
        return;
      }
    const newJobRef = push(ref(database, 'jobs/')); // Using 'jobs/' path and unique key
    set(newJobRef, formData)
      .then(() => {
        alert('Data Sent');
      })
      .catch((err) => {
        alert('Error Occurred');
      });
      e.target.reset();
      setFormData({
        company: '',
        title: '',
        type:'',
        skill: [],
        location: '',
        experience: '',
        job_link: '',
        email: '',
      });
      setNewSkill('');
    };
    
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-red-200 p-10 rounded-lg shadow-lg w-1/2">
        <h2 className="flex justify-center text-2xl font-bold mb-6">Add a Job</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Job Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700"> Job Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            >
              <option value="">Select</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Intern">Intern</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Skills</label>
            <div className="flex">
              <input
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                
              />
              <button
                type="button"
                onClick={handleAddSkill}
                className="ml-2 bg-yellow-500 text-white p-2 rounded"
              >
                Add
              </button>
            </div>
            <ul className="mt-4">
              {formData.skill.map((skill, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-gray-100 p-2 rounded mt-2"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => handleRemoveSkill(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Location</label>
            <select
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            >
              <option value="">Select</option>
              <option value="Remote">Remote</option>
              <option value="In Office">InOffice</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Experience</label>
            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            >
              <option value="">Select</option>
              <option value="Fresher">Fresher</option>
              <option value="Mid-Level">Mid-Level</option>
              <option value="Senior-Level">Senior-Level</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Link to the Job</label>
            <input
              type="url"
              name="job_link"
              value={formData.job_link}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white p-2 rounded mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin
