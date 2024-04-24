//routing and layout logic
import React from 'react';
import Employee from './Employee';
import Project from './Project';
import ProjectAssignment from './ProjectAssignement';
import CombinedData from './CombinedData';

function App() {
  return(
    <div className="header-container">
      <h1 className="header-title">My Company Information</h1>
      <CombinedData />
    </div>
  )
}

export default App
