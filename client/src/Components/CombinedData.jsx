import React, { useState, useEffect } from 'react';

function CombinedData() {
  const [combinedEntries, setCombinedEntries] = useState([]);

  //fetching data from different apis to combine them
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

      //getting the projects based on the project id and get employee name base don employee id by matching
      const mergedData = assignments.map(assignment => {
        const matchedEmployee = employees.find(employee => employee.employee_id === assignment.employee_id);
        const matchedProject = projects.find(project => project.project_code === assignment.project_code);
        return {
          employeeID: assignment.employee_id,
          employeeName: matchedEmployee ? matchedEmployee.full_name : 'No name available',
          projectName: matchedProject ? matchedProject.project_name : 'No project name available',
          startDate: assignment.start_date
        };
      });

      setCombinedEntries(mergedData);
    } catch (error) {
      console.error('problem fetching and combining data:', error);
    }
  };

  useEffect(() => {
    fetchAndCombineData();
    //refresh every minute or so
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
