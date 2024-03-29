import {
  mdiDeleteCircleOutline,
  mdiOpenInNew,
  mdiFileEditOutline,
} from "@mdi/js";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Icon from "@mdi/react";

export default function Documents({
  nav,
  isLoggedIn,
  getRequest,
  postRequest,
  getEmployeeNamesList,
}) {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [employeeNames, setEmployeeNames] = useState([]);
  const fetchDocumentsList = async () => {
    const results = await getRequest(`documents`);
    setData(results);
  };

  useEffect(() => {
    if (isLoggedIn()) {
      navigate("/login");
    }
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
    const resJson = await postRequest(`document/${id}/delete`, {});

    if (resJson.status === "ok") {
      fetchDocumentsList();
    }
  };

  return (
    <div className="main">
      {nav}
      {data.toString() === [].toString() &&
      employeeNames.toString() === [].toString() ? (
        <section className="loaderContainer">
          <div className="loader"></div>
        </section>
      ) : (
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
                <th>Emp. ID</th>
                <th>Employee</th>
                <th>Doc. Name</th>
                <th>Content</th>
              </tr>
            </thead>
            <tbody>
              {data.map((doc, index) => (
                <tr key={doc.id}>
                  <td>{doc.employeeId}</td>
                  <td>
                    <Link to={`/employee/${doc.employeeId}`}>
                      {employeeNames[index]}
                    </Link>
                  </td>
                  <td>{doc.documentName}</td>
                  <td>{}</td>
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
      )}
    </div>
  );
}
