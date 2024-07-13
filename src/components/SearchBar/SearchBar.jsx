import React, { useState } from 'react'

function SearchBar({jobCriteria, setJobCriteria,fetchJobsCustom}) {
   

    const handleChange = (e) => {
        setJobCriteria((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleChange2 =(e)=>{
        const { name, value } = e.target;
        setJobCriteria((prevState) => ({
            ...prevState,
            [name]: value,
          }));
    }
    const search = async() => {
        await fetchJobsCustom(jobCriteria);
    }
    

  return (
    <div className='flex  gap-4 my-10 justify-center px-10'>
          <input type='text' placeholder='Enter the Role' onChange={handleChange2} name="title" value={jobCriteria.title} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'/>
      
        <select onChange={handleChange} name="type" value={jobCriteria.type} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value="" >Job Type</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Intern">Intern</option>
        </select>
        <select onChange={handleChange} name="location" value={jobCriteria.location} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'>
            <option value="">Location</option>
            <option value="Remote">Remote</option>
            <option value="In Office">In Office</option>
            <option value="Hybrid">Hybrid</option>
        </select>
        <input type='text' placeholder='Enter the Company' onChange={handleChange2} name="company" value={jobCriteria.company} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md'/>
            
        
        <button onClick={search} className='w-64 bg-blue-500 text-white font-bold py-3 rounded-md'>Search</button>
    </div>
  )
}

export default SearchBar