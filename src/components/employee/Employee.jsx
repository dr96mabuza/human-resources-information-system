import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav";
import Header from "../Header";

export default function Employee() {
    const [data, setData] = useState([]);
    const fetchEmployeesList = async () => {
        const res = await fetch(`http://localhost:5000/employees`, { method: "GET", mode: "cors" });
        const data = await res.json();
        const results = await data.result;
        setData(results);

    }

    useEffect(() => {
        fetchEmployeesList();
    }, []);

    const handleSubmit = () => {e.preventDefault();};

    const deleteEmployee = async (id) => {
        const response = await fetch(`http://localhost:5000/employee/${id}/delete`, {
            method: "post",
            mode: "cors"
        });
        const resJson = await response.json();

        if (resJson.status === "ok") {
          fetchEmployeesList()
        }
    }

    return (
      <>
      
      <Header />
        <Nav />
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
              <td><Link to={`/employee/${person.id}/update`}><button type="submit">EDIT</button></Link></td>
              <td><button className="deleteBTN" onClick={() => {deleteEmployee(person.id)}} onSubmit={handleSubmit} type="submit">DELETE</button></td>
              </tr>
          ))}
        </tbody>
        <tfoot></tfoot>
      </table></>
    );
}