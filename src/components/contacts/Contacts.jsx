import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import {
  mdiDeleteCircleOutline,
  mdiOpenInNew,
  mdiFileEditOutline,
} from "@mdi/js";

export default function Contacts({
  nav,
  header,
  getRequest,
  postRequest,
  getEmployeeNamesList,
}) {
  const [data, setData] = useState([]);
  const [employeeNames, setEmployeeNames] = useState([]);
  const fetchContactsList = async () => {
    const results = await getRequest(`https://hris-qp6t.onrender.com/contacts`);
    setData(results);
  };

  useEffect(() => {
    fetchContactsList();
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

  const deleteContact = async (id) => {
    const resJson = await postRequest(
      `https://hris-qp6t.onrender.com/contact/${id}/delete`,
      {},
    );

    if (resJson.status === "ok") {
      fetchContactsList();
    }
  };

  return (
    <div className="main">
      {nav}
      <div className="content">
        <div>
          <a href="/contact/create">
            <button type="submit">ADD CONTACT</button>
          </a>
        </div>
        <h4>Contacts</h4>
        <table>
          <thead>
            <tr>
              <th>Emp. ID</th>
              <th>Employee</th>
              <th>Email</th>
              <th>Number</th>
              <th>Work Email</th>
              <th>Alt Number</th>
            </tr>
          </thead>
          <tbody>
            {data.map((contact, index) => (
              <tr key={contact.id}>
                <td>{contact.employeeId}</td>
                <td>
                  <Link to={`/employee/${contact.employeeId}`}>
                    {employeeNames[index]}
                  </Link>
                </td>
                <td>{contact.email}</td>
                <td>{contact.cellphoneNumber}</td>
                <td>{contact.companyEmail}</td>
                <td>{contact.alternateNumber}</td>
                <td>
                  <Link to={`/contact/${contact.id}/update`}>
                    <Icon path={mdiFileEditOutline} size={1} />
                  </Link>
                  <Icon
                    path={mdiDeleteCircleOutline}
                    size={1}
                    className="deleteBTN"
                    onClick={() => {
                      deleteContact(contact.id);
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
