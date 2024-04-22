//routing and layout logic
import React from 'react';
import Employee from './Employee';
import Project from './Project';
import ProjectAssignment from './ProjectAssignement';

function App() {
  return(
    <div>
      <h1>Welcome to My App</h1>
      <Employee />
      <Project />
      <ProjectAssignment />
    </div>
  )
}

export default App
