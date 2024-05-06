// JobList.js
import React, { useContext } from 'react';
import { JobsContext } from '../Context/JobsContext';
import JobCard from './JobCard';

const JobList = () => {
  const { jobs = [], loading, error } = useContext(JobsContext);

  // Handle loading state
  if (loading) {
    return <p>Loading...</p>;
  }

  // Handle error state
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // Check if jobs is empty
  if (jobs.length === 0) {
    return <p>No jobs found.</p>;
  }

  // Render job cards
  return (
    <div className="job-list">
      {jobs.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </div>
  );
};

export default JobList;
