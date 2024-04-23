//routing and layout logic
import React from 'react';
import Employee from './Employee';
import Project from './Project';
import ProjectAssignment from './ProjectAssignement';
import CombinedData from './CombinedData';

function App() {
  return(
    <div>
      <h1>Welcome to My App</h1>
      <Employee />
      <Project />
      <ProjectAssignment />
      <CombinedData />
    </div>
  )
}

export default App
