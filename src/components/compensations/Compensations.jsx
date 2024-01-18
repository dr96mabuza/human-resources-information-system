import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Compensations({nav, header, getRequest}) {
    const [data, setData] = useState([]);
    const fetchCompansationsList = async () => {
      const results = await getRequest(`https://hris-qp6t.onrender.com/compansations`);
      setData(results);
    }

    useEffect(() => {
        fetchCompansationsList();
    }, []);

    return (
      <>
        {header}
        {nav}
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
