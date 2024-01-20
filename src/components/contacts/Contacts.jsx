import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Nav from "../Nav";

export default function Contacts({nav, header, getRequest, postRequest, getEmployeeNamesList}) {
    
    const [data, setData] = useState([]);
    const [employeeNames, setEmployeeNames] = useState([]);
    const fetchContactsList = async () => {
      const results = await getRequest(`https://hris-qp6t.onrender.com/contacts`);
      setData(results);
    }

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

    const handleSubmit = () => {e.preventDefault();};

    const deleteContact = async (id) => {
      const resJson = await postRequest(`https://hris-qp6t.onrender.com/contact/${id}/delete`, {});

      if (resJson.status === "ok") {
        fetchContactsList()
      }
    }

    return (
        <>
        {header}
        {nav}
        <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Contact Number</th>
            <th>Work Email</th>
            <th>Alternate Contact Number</th>
            <th>Employee</th>
          </tr>
        </thead>
        <tbody>
          {data.map((contact, index) => (
            <tr key={contact.id}>
              <td>{contact.email}</td>
              <td>{contact.cellphoneNumber}</td>
              <td>{contact.companyEmail}</td>
              <td>{contact.alternateNumber}</td>
              <td><Link to={`/employee/${contact.employeeId}`}>{employeeNames[index]}</Link></td>
              <td><Link to={`/contact/${contact.id}/update`}><button type="submit">EDIT</button></Link></td>
              <td><button className="deleteBTN" onClick={() => {deleteContact(contact.id)}} onSubmit={handleSubmit} type="submit">DELETE</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      
        </>
    );
}


