import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Nav from "../Nav";

export default function Compensations() {
    const [data, setData] = useState([]);
    const fetchCompansationsList = async () => {
        const res = await fetch(`https://hris-qp6t.onrender.com/compansations`, { method: "GET", mode: "cors" });
        const data = await res.json();
        const results = await data.result;
        setData(results);

    }

    useEffect(() => {
        fetchCompansationsList();
    }, []);

    return (
      <>
        <Header />
        <Nav />
        <table>
          <thead>
            <tr>
              {/* <th>ID</th> */}
              <th>Salary</th>
              <th>Deductions</th>
              <th>Bonus</th>
              <th>Employee ID</th>
            </tr>
          </thead>
          <tbody>
            {data.map((compensation) => (
              <tr key={compensation.id}>
                <td>{compensation.salary}</td>
                <td>{compensation.deductions}</td>
                <td>{compensation.bonus}</td>
                <td><Link to={`/employee/${compensation.employeeId}`}>{compensation.employeeId}</Link></td>
                <td><Link to={`/compensation/${compensation.id}/update`}><button type="submit">edit</button></Link></td>
              </tr>
              
            ))}
          </tbody>
        </table>
      </>
    );
}
