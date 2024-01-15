import Header from "../Header";
import Nav from "../Nav";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Documents() {
    const [data, setData] = useState([]);
    const fetchDocumentsList = async () => {
        const res = await fetch(`http://localhost:5000/documents`, { method: "GET", mode: "cors" });
        const data = await res.json();
        const results = await data.result;
        setData(results);
    }

    useEffect(() => {
        fetchDocumentsList();
    }, []);

    return (
        <>
        <Header />
        <Nav />
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>content</th>
              <th>Employee ID</th>
            </tr>
          </thead>
          <tbody>
            {data.map((doc) => (
              <tr key={doc.id}>
                <td>{doc.documentName}</td>
                <td>{}</td>
                <td><Link to={`/employee/${doc.employeeId}`}>{doc.employeeId}</Link></td>
                <td><Link to={`/document/${doc.id}/update`}><button type="submit">edit</button></Link></td>
              </tr>
              
            ))}
          </tbody>
        </table>
        </>
        
    );
}