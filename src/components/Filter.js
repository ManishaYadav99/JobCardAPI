import React, { useContext, useState } from 'react';
import { JobsContext } from '../Context/JobsContext';
import css from '../styles/Filter.css';

const Filter = () => {
  const { jobs, applyFilters } = useContext(JobsContext);
  const [filters, setFilters] = useState({
    minExperience: '',
    companyName: '',
    location: '',
    remote: '',
    techStack: '',
    role: '',
    minBasePay: ''
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
    applyFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="filter">
      <select name="minExperience" onChange={handleChange} value={filters.minExperience}>
        <option value="">Min Experience</option>
        <option value="0-1">0-1 years</option>
        <option value="1-3">1-3 years</option>
        <option value="3-5">3-5 years</option>
        <option value="5+">5+ years</option>
      </select>
      <input type="text" name="companyName" placeholder="Company Name" onChange={handleChange} value={filters.companyName} />
      <input type="text" name="location" placeholder="Location" onChange={handleChange} value={filters.location} />
      <select name="remote" onChange={handleChange} value={filters.remote}>
        <option value="">Remote/On-site</option>
        <option value="remote">Remote</option>
        <option value="on-site">On-site</option>
      </select>
      <input type="text" name="techStack" placeholder="Tech Stack" onChange={handleChange} value={filters.techStack} />
      <input type="text" name="role" placeholder="Role" onChange={handleChange} value={filters.role} />
      <input type="text" name="minBasePay" placeholder="Min Base Pay" onChange={handleChange} value={filters.minBasePay} />
    </div>
  );
};

export default Filter;
