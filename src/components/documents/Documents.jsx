import {
  mdiDeleteCircleOutline,
  mdiOpenInNew,
  mdiFileEditOutline,
} from "@mdi/js";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Icon from "@mdi/react";

export default function Documents({
  nav,
  header,
  getRequest,
  postRequest,
  getEmployeeNamesList,
}) {
  const [data, setData] = useState([]);
  const [employeeNames, setEmployeeNames] = useState([]);
  const fetchDocumentsList = async () => {
    const results = await getRequest(
      `https://hris-qp6t.onrender.com/documents`,
    );
    setData(results);
  };

  useEffect(() => {
    fetchDocumentsList();
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

  const deleteDocument = async (id) => {
    const resJson = await postRequest(
      `https://hris-qp6t.onrender.com/document/${id}/delete`,
      {},
    );

    if (resJson.status === "ok") {
      fetchDocumentsList();
    }
  };

  return (
    <div className="main">
      {/* {header} */}
      {nav}
      <div className="content">
        <div>
          <a href="/document/create">
            <button type="submit">ADD DOCUMENT</button>
          </a>
        </div>
        <h4>Documents</h4>
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>content</th>
              <th>Employee</th>
            </tr>
          </thead>
          <tbody>
            {data.map((doc, index) => (
              <tr key={doc.id}>
                <td>{doc.documentName}</td>
                <td>{}</td>
                <td>
                  <Link to={`/employee/${doc.employeeId}`}>
                    {employeeNames[index]}
                  </Link>
                </td>
                <td>
                  <Link to={`/document/${doc.id}/update`}>
                    <Icon path={mdiFileEditOutline} size={1} />
                  </Link>
                  <Icon
                    path={mdiDeleteCircleOutline}
                    size={1}
                    className="deleteBTN"
                    onClick={() => {
                      deleteDocument(doc.id);
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
