import React, { useState } from 'react';

const Skills = () => {
  const [formState, setFormState] = useState({
    company: '',
    jobTitle: '',
    jobDescription: '',
    skills: [],
  });

  const [newSkill, setNewSkill] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddSkill = () => {
    if (newSkill.trim() !== '') {
      setFormState((prevState) => ({
        ...prevState,
        skills: [...prevState.skills, newSkill],
      }));
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (index) => {
    setFormState((prevState) => ({
      ...prevState,
      skills: prevState.skills.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formState);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-900">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Add a Job</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Company</label>
            <input
              type="text"
              name="company"
              value={formState.company}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Job Title</label>
            <input
              type="text"
              name="jobTitle"
              value={formState.jobTitle}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Job Description</label>
            <textarea
              name="jobDescription"
              value={formState.jobDescription}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            ></textarea>
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
              {formState.skills.map((skill, index) => (
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

export default Skills;
