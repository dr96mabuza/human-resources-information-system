import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Addresses({nav, header, getRequest, postRequest, getEmployeeNamesList}) {
    const [data, setData] = useState([]);
    const [employeeNames, setEmployeeNames] = useState([]);
    const fetchAddressesList = async () => {
      const results = await getRequest(`https://hris-qp6t.onrender.com/addresses`);
      setData(results);
    }

    useEffect(() => {
      fetchAddressesList();
    }, []);

    useEffect(() => {
      const getEmployeeNames = async () => {
        const employeeNamesList = await getEmployeeNamesList(data);
        setEmployeeNames(employeeNamesList);
      };

      getEmployeeNames();
    }, [data]);

    const handleSubmit = () => {e.preventDefault();};

    const deleteAddress = async (id) => {
      const resJson = await postRequest(`https://hris-qp6t.onrender.com/address/${id}/delete`, {});
      if (resJson.status === "ok") {
        fetchAddressesList()
      }
    }

    return (
      <>
        {header}
        {nav}
        <table>
        <thead>
          <tr>
            <th>Street</th>
            <th>Suburb</th>
            <th>City</th>
            <th>Province</th>
            <th>Postal Code</th>
            <th>Employee</th>
          </tr>
        </thead>
        <tbody>
          {data.map((address, index) => (
            <tr key={address.id}>
              <td>{address.street}</td>
              <td>{address.suburb}</td>
              <td>{address.city}</td>
              <td>{address.province}</td>
              <td>{address.postalCode}</td>
              <td><Link to={`/employee/${address.employeeId}`}>{employeeNames[index]}</Link></td>
              <td><Link to={`/address/${address.id}/update`}><button type="submit">EDIT</button></Link></td>
              <td><button className="deleteBTN" onClick={() => {deleteAddress(address.id)}} onSubmit={handleSubmit} type="submit">DELETE</button></td>
              </tr>
          ))}
        </tbody>
      </table></>
    );
}