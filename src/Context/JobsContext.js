// JobsContext.js
import React, { createContext, useState, useEffect } from 'react';

export const JobsContext = createContext();

export const JobsProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({});
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    fetchJobs();
  }, [filters]); // Trigger fetchJobs whenever filters change

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      
      const body = JSON.stringify({
        "limit": 10,
        "offset": 0,
        ...filters // Add filters to the request body
      });
      
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body
      };

      const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);

      if (!response.ok) {
        throw new Error('Failed to fetch jobs');
      }

      const result = await response.json();
      console.log("Fetched result:", result);

      setJobs(result.jdList);
      setTotalCount(result.totalCount);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
      console.error("Error fetching jobs:", error);
    }
  };

  const applyFilters = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <JobsContext.Provider value={{ jobs, loading, error, totalCount, applyFilters }}>
      {children}
    </JobsContext.Provider>
  );
};
