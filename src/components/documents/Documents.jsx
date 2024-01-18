import Header from "../Header";
import Nav from "../Nav";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Documents({nav, header, getRequest, postRequest}) {
    const [data, setData] = useState([]);
    const fetchDocumentsList = async () => {
        const results = await getRequest(`https://hris-qp6t.onrender.com/documents`);
        setData(results);
    }

    useEffect(() => {
        fetchDocumentsList();
    }, []);

    const handleSubmit = () => {e.preventDefault();};

    const deleteDocument = async (id) => {
      const resJson = await postRequest(`https://hris-qp6t.onrender.com/document/${id}/delete`, {});

      if (resJson.status === "ok") {
        fetchDocumentsList()
      }
    }

    return (
        <>
        {header}
        {nav}
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