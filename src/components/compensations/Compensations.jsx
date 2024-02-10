import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Icon from "@mdi/react";
import {
  mdiDeleteCircleOutline,
  mdiOpenInNew,
  mdiFileEditOutline,
} from "@mdi/js";

export default function Compensations({
  nav,
  isLoggedIn,
  getRequest,
  getEmployeeNamesList,
}) {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [employeeNames, setEmployeeNames] = useState([]);
  const fetchCompansationsList = async () => {
    const results = await getRequest(`compansations`);
    setData(results);
  };

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
    fetchCompansationsList();
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
          <div>
            <a href="/compensation/create">
              <button type="submit">ADD COMPENSATION</button>
            </a>
          </div>
          <h4>Compensations</h4>
          <table>
            <thead>
              <tr>
                <th>Emp. ID</th>
                <th>Employee</th>
                <th>Salary</th>
                <th>Deductions</th>
                <th>Bonus</th>
              </tr>
            </thead>
            <tbody>
              {data.map((compensation, index) => (
                <tr key={compensation.id}>
                  <td>{compensation.employeeId}</td>
                  <td>
                    <Link to={`/employee/${compensation.employeeId}`}>
                      {employeeNames[index]}
                    </Link>
                  </td>
                  <td>{compensation.salary}</td>
                  <td>{compensation.deductions}</td>
                  <td>{compensation.bonus}</td>
                  <td>
                    <Link to={`/compensation/${compensation.id}/update`}>
                      <Icon path={mdiFileEditOutline} size={1} />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
