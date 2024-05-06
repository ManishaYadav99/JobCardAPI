// App.js
import React from 'react';
import { JobsProvider } from './Context/JobsContext';
import JobList from './components/JobList';
import Filter from './components/Filter';

const App = () => {
  return (
    <JobsProvider>
      <div className="app">
        <Filter />
        <JobList />
      </div>
    </JobsProvider>
  );
};

export default App;
