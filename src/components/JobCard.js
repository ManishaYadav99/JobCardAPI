// JobCard.js
import React, { useState } from 'react';
import css from "../styles/JobCard.css";

const JobCard = ({ job }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  // Check if job exists before accessing its properties
  const { companyName, location, jobDetailsFromCompany, minExp, maxExp } = job || {};
  
  // Function to limit the description text
  const truncateText = (text, maxLength) => {
    if (!text) return '';
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  // Truncate jobDetailsFromCompany to 200 characters
  const truncatedDetails = truncateText(jobDetailsFromCompany, 200);

  return (
    <div className="job-card">
      <h2>{companyName}</h2>
      <p><strong>Location:</strong> {location}</p>
      <div className="description">
        <p><strong>Job Details:</strong> {expanded ? jobDetailsFromCompany : truncatedDetails}</p>
        {jobDetailsFromCompany.length > 200 && (
          <button onClick={toggleExpand}>{expanded ? 'Read less' : 'Read more'}</button>
        )}
      </div>
      <p><strong>Experience:</strong> {minExp ? minExp : 'Not specified'} - {maxExp ? maxExp : 'Not specified'} years</p>
      <button className="apply-btn">Apply</button>
    </div>
  );
};

export default JobCard;
