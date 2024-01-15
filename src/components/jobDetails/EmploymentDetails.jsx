import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav";
import Header from "../Header";

export default function EmployementDetails() {
    const [data, setData] = useState([]);
    const fetchJobDetailsList = async () => {
        const res = await fetch(`http://localhost:5000/employmentdetails`, { method: "GET", mode: "cors" });
        const data = await res.json();
        const results = await data.result;
        setData(results);

    }

    useEffect(() => {
        fetchJobDetailsList();
    }, []);

    return (
      <>
      
      <Header />
        <Nav />
        <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Role</th>
            <th>Senior/Manager</th>
            <th>Status</th>
            <th>Start Date</th>
            <th>Employee ID</th>
          </tr>
        </thead>
        <tbody>
          {data.map((job) => (
            <tr key={job.id}>
              <td>{job.company}</td>
              <td>{job.jobRole}</td>
              <td><Link to={`/employee/${job.employeeId}`}>{job.reportsTo}</Link></td>
              <td>{job.employmentStatus}</td>
              <td>{job.startDate}</td>
              <td><Link to={`/employee/${job.employeeId}`}>{job.employeeId}</Link></td>
                <td><Link to={`/employmentdetail/${job.id}/update`}><button type="submit">edit</button></Link></td>
              </tr>
          ))}
        </tbody>
      </table></>
    );
}