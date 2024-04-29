import React, { useState, useEffect } from 'react';

function CombinedData() {
  const [combinedEntries, setCombinedEntries] = useState([]);

  const fetchAndCombineData = async () => {
    try {
      const [employeesResponse, projectsResponse, assignmentsResponse] = await Promise.all([
        fetch('/api/employees'),
        fetch('/api/projects'),
        fetch('/api/project_assignments')
      ]);
      
      const employees = await employeesResponse.json();
      const projects = await projectsResponse.json();
      const assignments = (await assignmentsResponse.json()).proj;
  
      const recentAssignments = assignments.slice(-5);
  
      const mergedData = recentAssignments.map(assignment => {
        const matchedEmployee = employees.find(employee => employee.employee_id === assignment.employee_id);
        const matchedProject = projects.find(project => project.project_code === assignment.project_code);
        return {
          employeeID: assignment.employee_id,
          employeeName: matchedEmployee ? matchedEmployee.full_name : 'Name undefined',
          projectName: matchedProject ? matchedProject.project_name : 'Name undefined',
          startDate: assignment.start_date.split('T')[0]
        };
      });
  
      setCombinedEntries(mergedData);
    } catch (error) {
      console.error('Problem fetching and combining data:', error);
    }
  };

  useEffect(() => {
    fetchAndCombineData();
    //10 second update to check better
    const refreshInterval = setInterval(fetchAndCombineData, 10000);
    return () => clearInterval(refreshInterval);
  }, []);

  return (
    <div className="table-container">
      <h2 className="title">List of Projects</h2>
      <table className="combined-table">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Project Name</th>
            <th>Project Start Date</th>
          </tr>
        </thead>
        <tbody>
          {combinedEntries.map((entry, index) => (
            <tr key={index}>
              <td>{entry.employeeID}</td>
              <td>{entry.employeeName}</td>
              <td>{entry.projectName}</td>
              <td>{entry.startDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CombinedData;
