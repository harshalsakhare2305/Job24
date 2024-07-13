import Header from "./components/Header/Header.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import JobCard from "./components/jobcard/JobCard.jsx";
import { useEffect, useState } from "react";

// Import Firebase Realtime Database methods
import { ref, get, onValue, query, orderByChild } from "firebase/database";
import { database } from "../firebaseConfig.js";

function Search() {
  const [jobCriteria, setJobCriteria] = useState({
    title: "",
    location: "",
    company:"",
    type:""
})
  const [jobs, setJobs] = useState([]);
  const [customSearch, setCustomSearch] = useState(false);

  const fetchJobs = () => {
    setCustomSearch(false);
    const jobsRef = ref(database, 'jobs');
    const q = query(jobsRef, orderByChild("postedOn"));

    onValue(q, (snapshot) => {
      const tempJobs = [];
      snapshot.forEach((childSnapshot) => {
        const job = childSnapshot.val();
        job.id = childSnapshot.key;
        tempJobs.push(job);
      });
      setJobs(tempJobs.reverse()); // Reverse to get the latest jobs first
    });
  };

  const fetchJobsCustom = (jobCriteria) => {
    setCustomSearch(true);
    const jobsRef = ref(database, 'jobs');

    get(jobsRef).then((snapshot) => {
      const tempJobs = [];
      snapshot.forEach((childSnapshot) => {
        const job = childSnapshot.val();
        job.id = childSnapshot.key;
        tempJobs.push(job);
      });

      // Filter jobs based on criteria, comparing in lowercase
      const filteredJobs = tempJobs.filter((job) => {
        let matches = true;
        
        if (jobCriteria.type && job.type.split(" ").join("").toLowerCase() !== jobCriteria.type.split(" ").join("").toLowerCase()) {
          matches = false;
        }
        if (jobCriteria.title && job.title.split(" ")[0].toLowerCase() !== jobCriteria.title.split(" ")[0].toLowerCase()) {
          matches = false;
        }
        if (jobCriteria.company && job.company.split(" ")[0].toLowerCase() !== jobCriteria.company.split(" ")[0].toLowerCase()) {
          matches = false;
        }
        if (jobCriteria.location && job.location.split(" ").join("").toLowerCase() !== jobCriteria.location.split(" ").join("").toLowerCase()) {
          matches = false;
        }
        return matches;
      });

      setJobs(filteredJobs.sort((a, b) => new Date(b.postedOn) - new Date(a.postedOn))); // Sort by postedOn date descending
    });
  };

  useEffect(() => {
    fetchJobs();
  }, []);
  
  const handleReset = () => {
    setJobCriteria({
      type: "",
      title: "",
      company: "",
      location: "",
    });
    resetFilters();
  };

  const resetFilters = () => {
    fetchJobs();
  };

  return (
    <div>
      <Header />
      <SearchBar  jobCriteria={jobCriteria} setJobCriteria={setJobCriteria} fetchJobsCustom={fetchJobsCustom} />
      {customSearch && 
        <button  type="reset" onClick={handleReset} className="flex pl-[1250px] mb-2">
          <p className="bg-blue-500 px-10 py-2 rounded-md text-white">Clear Filters</p>
        </button>
      }
      {jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  );
}

export default Search;
