import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import {
  mdiDeleteCircleOutline,
  mdiOpenInNew,
  mdiFileEditOutline,
} from "@mdi/js";
import SearchBar from "../../SearchBar";
import { date } from "../../../helpers/dateHelper";

export default function Employee({ nav, header, getRequest, postRequest }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getRequest(
        "https://hris-qp6t.onrender.com/employees",
      );
      setData(result);
    };

    fetchData();

    return () => {};
  }, [getRequest]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const deleteEmployee = async (id) => {
    const resJson = await postRequest(
      `https://hris-qp6t.onrender.com/employee/${id}/delete`,
      {},
    );
    if (resJson.status === "ok") {
      setData(await getRequest("https://hris-qp6t.onrender.com/employees"));
    }
  };

  return (
    <div className="main">
      {nav}
      {data.toString() === [].toString() ? (
        <section className="loaderContainer">
          <div className="loader"></div>
        </section>
      ) : (
        <div className="content">
          <div>
            <a href="/employee/create">
              <button type="submit">CREATE EMPLOYEE</button>
            </a>
          </div>
          <h4>Employees</h4>
          <SearchBar postRequest={postRequest} />
          <table>
            <thead>
              <tr>
                <th>Emp. ID</th>
                <th>Name</th>
                <th>Surname</th>
                <th>ID Number</th>
                <th>Gender</th>
                <th>Date of birth</th>
              </tr>
            </thead>
            <tbody>
              {data.map((person) => (
                <tr key={person.id}>
                  <td>{person.id}</td>
                  <td>{person.firstName}</td>
                  <td>{person.lastName}</td>
                  <td>{person.idNumber}</td>
                  <td>{person.gender}</td>
                  <td>{date().ISOToDate(person.dateOfBirth)}</td>
                  <td>
                    {/* <Link>
                    <Icon path={mdiOpenInNew} size={1} />
                  </Link> */}
                    <Link to={`/employee/${person.id}/update`}>
                      <Icon path={mdiFileEditOutline} size={1} />
                    </Link>

                    <Icon
                      path={mdiDeleteCircleOutline}
                      size={1}
                      className="deleteBTN"
                      onClick={() => {
                        deleteEmployee(person.id);
                      }}
                      onSubmit={handleSubmit}
                      type="submit"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot></tfoot>
          </table>
        </div>
      )}
    </div>
  );
}
