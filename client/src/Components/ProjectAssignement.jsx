import React, { useState, useEffect } from 'react';

function ProjectAssignments() {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    fetch('/api/project_assignments')
      .then(response => response.json())
      .then(data => {
        setAssignments(data.proj); // Assuming your API wraps the assignments in a 'proj' object
      })
      .catch(error => {
        console.error('Error fetching project assignments:', error);
      });
  }, []);

  return (
    <div>
      <h2>Project Assignments</h2>
      <table>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Project Code</th>
            <th>Start Date</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map(assignment => (
            <tr key={assignment._id}>
              <td>{assignment.employee_id}</td>
              <td>{assignment.project_code}</td>
              <td>{assignment.start_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectAssignments;
