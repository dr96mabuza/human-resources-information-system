import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Nav from "../Nav";

export default function Contacts() {
    
    const [data, setData] = useState([]);
    const fetchContactsList = async () => {
        const res = await fetch(`http://localhost:5000/contacts`, { method: "GET", mode: "cors" });
        const data = await res.json();
        const results = await data.result;
        setData(results);
    }

    useEffect(() => {
        fetchContactsList();
    }, []);

    return (
        <>
        <Header />
        <Nav />
        <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Contact Number</th>
            <th>Work Email</th>
            <th>Alternate Contact Number</th>
            <th>Employee ID</th>
          </tr>
        </thead>
        <tbody>
          {data.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.email}</td>
              <td>{contact.cellphoneNumber}</td>
              <td>{contact.companyEmail}</td>
              <td>{contact.alternateNumber}</td>
              <td><Link to={`/employee/${contact.employeeId}`}>{contact.employeeId}</Link></td>
              <td><Link to={`/contact/${contact.id}/update`}><button type="submit">edit</button></Link></td>
            </tr>
          ))}
        </tbody>
      </table>
      
        </>
    );
}


