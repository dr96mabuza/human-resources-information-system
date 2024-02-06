import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { date } from "./../../../helpers/dateHelper";
const dateFormatter = date();

export default function Leave({
  header,
  nav,
  getRequest,
  getEmployeeNamesList,
}) {
  const [data, setData] = useState([]);
  const [employeeNames, setEmployeeNames] = useState([]);
  const fetchLeaveList = async () => {
    const results = await getRequest(`https://hris-qp6t.onrender.com/leaves`);
    setData(results);
  };

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
    <div className="main">
      {nav}
      {data.toString() === [].toString() &&
      employeeNames.toString() === [].toString() ? (
        <section className="loaderContainer">
          <div className="loader"></div>
        </section>
      ) : (
        <div className="content">
          {/* <div>
          <a href="/leave/create">
            <button type="submit">ADD LEAVE</button>
          </a>
        </div> */}
          <h4>Leave Management</h4>
          <table>
            <thead>
              <tr>
                <th>Emp. ID</th>
                <th>Employee</th>
                <th>Type</th>
                <th>Reason</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Days Absent</th>
                <th>Approval</th>
              </tr>
            </thead>
            <tbody>
              {data.map((leave, index) => (
                <tr key={leave.leave_id}>
                  <td>{leave.employee_id}</td>
                  <td>
                    <Link to={`/employee/${leave.employee_id}`}>
                      {employeeNames[index]}
                    </Link>
                  </td>
                  <td>{leave.leave_type}</td>
                  <td>{leave.reason}</td>
                  <td>{dateFormatter.ISOToDate(leave.start_date)}</td>
                  <td>{dateFormatter.ISOToDate(leave.end_date)}</td>
                  <td>{leave.days_absent}</td>
                  <td>{leave.approval ? "Approved" : "Declined"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
