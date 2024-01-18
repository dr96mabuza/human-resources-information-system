import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav";
import Header from "../Header";

export default function EmployementDetails({header, nav, postRequest, getRequest}) {
    const [data, setData] = useState([]);
    const fetchJobDetailsList = async () => {
      const results = await getRequest(`https://hris-qp6t.onrender.com/employmentdetails`);
      setData(results);
    }

    useEffect(() => {
        fetchJobDetailsList();
    }, []);

    const handleSubmit = () => {e.preventDefault();};

    const deleteJobDetail = async (id) => {
      const resJson = await postRequest(`https://hris-qp6t.onrender.com/employmentdetail/${id}/delete`, {});

      if (resJson.status === "ok") {
        fetchJobDetailsList()
      }
    }

    return (
      <>
      
        {header}
        {nav}
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
                <td><Link to={`/employmentdetail/${job.id}/update`}><button type="submit">DELETE</button></Link></td>
                <td><button className="deleteBTN" onClick={() => {deleteJobDetail(job.id)}} onSubmit={handleSubmit} type="submit">DELETE</button></td>
              
              </tr>
          ))}
        </tbody>
      </table></>
    );
}