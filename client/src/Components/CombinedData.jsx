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

      const mergedData = assignments.map(assignment => {
        const matchedEmployee = employees.find(employee => employee.employee_id === assignment.employee_id);
        const matchedProject = projects.find(project => project.project_code === assignment.project_code);
        return {
          employeeID: assignment.employee_id,
          employeeName: matchedEmployee ? matchedEmployee.full_name : 'Name undefined',
          projectName: matchedProject ? matchedProject.project_name : 'Name undefined',
          startDate: assignment.start_date.split('T')[0]
        };
      });

      //get only 5 entries
      const latestData = mergedData.slice(0, 5);
      setCombinedEntries(latestData);
    } catch (error) {
      console.error('problem fetching and combining data:', error);
    }
  };

  useEffect(() => {
    fetchAndCombineData();
    const refreshInterval = setInterval(fetchAndCombineData, 60000);
    return () => clearInterval(refreshInterval);
  }, []);

  return (
    <div className="table-container">
      <h2 className="title">List of projects:</h2>
      <table className="combined-table">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Assigned To:</th>
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
