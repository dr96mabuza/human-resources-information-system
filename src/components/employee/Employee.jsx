import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Employee({ nav, header, getRequest, postRequest }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getRequest(
        "https://hris-qp6t.onrender.com/employees"
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
    const resJson = await postRequest(`https://hris-qp6t.onrender.com/employee/${id}/delete`, {});
    if (resJson.status === "ok") {
      setData(await getRequest(
        "https://hris-qp6t.onrender.com/employees"
      ));
    }
  };

  return (
    <>
      {header}
      {nav}
      <table>
        <thead>
          <tr>
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
              <td>{person.firstName}</td>
              <td>{person.lastName}</td>
              <td>{person.idNumber}</td>
              <td>{person.gender}</td>
              <td>{person.dateOfBirth}</td>
              <td>
                <Link to={`/employee/${person.id}/update`}>
                  <button type="submit">EDIT</button>
                </Link>
              </td>
              <td>
                <button
                  className="deleteBTN"
                  onClick={() => {
                    deleteEmployee(person.id);
                  }}
                  onSubmit={handleSubmit}
                  type="submit"
                >
                  DELETE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot></tfoot>
      </table>
    </>
  );
}
