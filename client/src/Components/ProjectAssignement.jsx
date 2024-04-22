import React, { useState, useEffect } from 'react';

function ProjectAssignmentTable() {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    fetch('/api/project-assignments')
      .then(response => response.json())
      .then(data => {
        setAssignments(data);
      })
      .catch(error => {
        console.error('Error fetching project assignments:', error);
      });
  }, []);

  return (
    <div>
      <h2>Project Assignment Table</h2>
      <table>
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Project Name</th>
            <th>Start Date</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map(assignment => (
            <tr key={assignment._id}>
              <td>{assignment.employee_id.full_name}</td>
              <td>{assignment.project_id.project_name}</td>
              <td>{new Date(assignment.start_date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectAssignmentTable;
