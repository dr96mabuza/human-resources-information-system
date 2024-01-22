import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import {
  mdiDeleteCircleOutline,
  mdiOpenInNew,
  mdiFileEditOutline,
} from "@mdi/js";

export default function Addresses({
  nav,
  header,
  getRequest,
  postRequest,
  getEmployeeNamesList,
}) {
  const [data, setData] = useState([]);
  const [employeeNames, setEmployeeNames] = useState([]);
  const fetchAddressesList = async () => {
    const results = await getRequest(
      `https://hris-qp6t.onrender.com/addresses`,
    );
    setData(results);
  };

  useEffect(() => {
    fetchAddressesList();
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

  const deleteAddress = async (id) => {
    const resJson = await postRequest(
      `https://hris-qp6t.onrender.com/address/${id}/delete`,
      {},
    );
    if (resJson.status === "ok") {
      fetchAddressesList();
    }
  };

  return (
    <div className="main">
      {/* {header} */}
      {nav}
      <div className="content">
        <div>
          <a href="/address/create">
            <button type="submit">ADD ADDRESS</button>
          </a>
        </div>
        <h4>Addresses</h4>
        <table>
          <thead>
            <tr>
              <th>Emp. ID</th>
              <th>Employee</th>
              <th>Street</th>
              <th>Suburb</th>
              <th>City</th>
              <th>Province</th>
              <th>Postal Code</th>
            </tr>
          </thead>
          <tbody>
            {data.map((address, index) => (
              <tr key={address.id}>
                <td>{address.employeeId}</td>
                <td>
                  <Link to={`/employee/${address.employeeId}`}>
                    {employeeNames[index]}
                  </Link>
                </td>
                <td>{address.street}</td>
                <td>{address.suburb}</td>
                <td>{address.city}</td>
                <td>{address.province}</td>
                <td>{address.postalCode}</td>
                <td>
                  <Link to={`/address/${address.id}/update`}>
                    <Icon path={mdiFileEditOutline} size={1} />
                  </Link>
                  <Icon
                    path={mdiDeleteCircleOutline}
                    size={1}
                    className="deleteBTN"
                    onClick={() => {
                      deleteAddress(address.id);
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
