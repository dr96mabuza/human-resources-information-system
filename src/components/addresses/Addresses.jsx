import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Nav from "../Nav";

export default function Addresses() {
    const [data, setData] = useState([]);
    const fetchAddressesList = async () => {
        const res = await fetch(`http://localhost:5000/addresses`, { method: "GET", mode: "cors" });
        const data = await res.json();
        const results = await data.result;
        setData(results);

    }

    useEffect(() => {
        fetchAddressesList();
    }, []);

    return (
      <>
      
      <Header />
        <Nav />
        <table>
        <thead>
          <tr>
            <th>Street</th>
            <th>Suburb</th>
            <th>City</th>
            <th>Province</th>
            <th>Postal Code</th>
            <th>Employee ID</th>
          </tr>
        </thead>
        <tbody>
          {data.map((address) => (
            <tr key={address.id}>
              <td>{address.street}</td>
              <td>{address.suburb}</td>
              <td>{address.city}</td>
              <td>{address.province}</td>
              <td>{address.postalCode}</td>
              <td><Link to={`/employee/${address.employeeId}`}>{address.employeeId}</Link></td>
                <td><Link to={`/address/${address.id}/update`}><button type="submit">edit</button></Link></td>
              </tr>
          ))}
        </tbody>
      </table></>
    );
}