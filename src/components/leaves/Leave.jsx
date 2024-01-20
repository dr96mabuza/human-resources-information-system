import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav";
import Header from "../Header";

export default function Leave({header, nav, getRequest, getEmployeeNamesList}) {
    const [data, setData] = useState([]);
    const [employeeNames, setEmployeeNames] = useState([]);
    const fetchLeaveList = async () => {
      const results = await getRequest(`https://hris-qp6t.onrender.com/leaves`);
      setData(results);
    }

    useEffect(() => {
        fetchLeaveList();
    }, []);

    useEffect(() => {
      const getEmployeeNames = async () => {
        const employeeNamesList = await getEmployeeNamesList(data);
        setEmployeeNames(employeeNamesList);
      };

      getEmployeeNames();
    }, [data]);

    return (
      <>
      
        {header}
        {nav}
        <table>
        <thead>
          <tr>
            <th>Days Balance</th>
            <th>Days Absent</th>
            <th>Employee</th>
          </tr>
        </thead>
        <tbody>
          {data.map((job, index) => (
            <tr key={job.id}>
              <td>{job.leaveBalance}</td>
              <td>{job.daysAbsent}</td>
              <td><Link to={`/employee/${job.employeeId}`}>{employeeNames[index]}</Link></td>
              </tr>
          ))}
        </tbody>
      </table></>
    );
}