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

    const handleSubmit = () => {e.preventDefault();};

    const deleteDocument = async (id) => {
      const response = await fetch(`http://localhost:5000/document/${id}/delete`, {
          method: "post",
          mode: "cors"
      });
      const resJson = await response.json();

      if (resJson.status === "ok") {
        fetchDocumentsList()
      }
    }

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
                <td><Link to={`/document/${doc.id}/update`}><button type="submit">EDIT</button></Link></td>
                <td><button className="deleteBTN" onClick={() => {deleteDocument(doc.id)}} onSubmit={handleSubmit} type="submit">DELETE</button></td>
              </tr>
              
            ))}
          </tbody>
        </table>
        </>
        
    );
}