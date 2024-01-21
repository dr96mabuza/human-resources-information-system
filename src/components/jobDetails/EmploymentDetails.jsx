import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  mdiDeleteCircleOutline,
  mdiOpenInNew,
  mdiFileEditOutline,
} from "@mdi/js";
import Icon from "@mdi/react";

export default function EmployementDetails({
  header,
  nav,
  postRequest,
  getRequest,
  getEmployeeNamesList,
}) {
  const [data, setData] = useState([]);
  const [employeeNames, setEmployeeNames] = useState([]);
  const fetchJobDetailsList = async () => {
    const results = await getRequest(
      `https://hris-qp6t.onrender.com/employmentdetails`,
    );
    setData(results);
  };

  useEffect(() => {
    fetchJobDetailsList();
  }, []);

  useEffect(() => {
    const getEmployeeNames = async () => {
      const employeeNamesList = await getEmployeeNamesList(data);
      setEmployeeNames(employeeNamesList);
    };

    getEmployeeNames();
  }, [data]);

  const handleSubmit = () => {
    e.preventDefault();
  };

  const deleteJobDetail = async (id) => {
    const resJson = await postRequest(
      `https://hris-qp6t.onrender.com/employmentdetail/${id}/delete`,
      {},
    );

    if (resJson.status === "ok") {
      fetchJobDetailsList();
    }
  };

  return (
    <div className="main">
      {/* {header} */}
      {nav}
      <div className="content">
        <div>
          <a href="/employmentdetail/create">
            <button type="submit">ADD JOB DETAILS</button>
          </a>
        </div>
        <h4>Job Descriptions</h4>
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
            {data.map((job, index) => (
              <tr key={job.id}>
                <td>{job.company}</td>
                <td>{job.jobRole}</td>
                <td>
                  <Link to={`/employee/${job.employeeId}`}>
                    {job.reportsTo}
                  </Link>
                </td>
                <td>{job.employmentStatus}</td>
                <td>{job.startDate}</td>
                <td>
                  <Link to={`/employee/${job.employeeId}`}>
                    {employeeNames[index]}
                  </Link>
                </td>
                <td>
                  <Link to={`/employmentdetail/${job.id}/update`}>
                    <Icon path={mdiFileEditOutline} size={1} />
                  </Link>
                  <Icon
                    path={mdiDeleteCircleOutline}
                    size={1}
                    className="deleteBTN"
                    onClick={() => {
                      deleteJobDetail(job.id);
                    }}
                    onSubmit={handleSubmit}
                    type="submit"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
