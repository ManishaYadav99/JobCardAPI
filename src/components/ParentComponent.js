// ParentComponent.js
import React from 'react';
import JobCard from './JobCard';

const ParentComponent = () => {
  return (
    <div>
      <JobCard job={job1} defaultDescription="Description for Job 1" defaultExperience="Experience for Job 1" />
      <JobCard job={job2} defaultDescription="Description for Job 2" defaultExperience="Experience for Job 2" />
    </div>
  );
};

export default ParentComponent;
