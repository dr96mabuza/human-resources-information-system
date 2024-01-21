import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import {
  mdiDeleteCircleOutline,
  mdiOpenInNew,
  mdiFileEditOutline,
} from "@mdi/js";

export default function Compensations({
  nav,
  header,
  getRequest,
  getEmployeeNamesList,
}) {
  const [data, setData] = useState([]);
  const [employeeNames, setEmployeeNames] = useState([]);
  const fetchCompansationsList = async () => {
    const results = await getRequest(
      `https://hris-qp6t.onrender.com/compansations`,
    );
    setData(results);
  };

  useEffect(() => {
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
      {/* {header} */}
      {nav}
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
              {/* <th>ID</th> */}
              <th>Salary</th>
              <th>Deductions</th>
              <th>Bonus</th>
              <th>Employee</th>
            </tr>
          </thead>
          <tbody>
            {data.map((compensation, index) => (
              <tr key={compensation.id}>
                <td>{compensation.salary}</td>
                <td>{compensation.deductions}</td>
                <td>{compensation.bonus}</td>
                <td>
                  <Link to={`/employee/${compensation.employeeId}`}>
                    {employeeNames[index]}
                  </Link>
                </td>
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
    </div>
  );
}
