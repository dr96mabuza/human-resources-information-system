import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateLeaveDetails({
  nav,
  header,
  postRequest,
  fetchEmployees,
}) {
  const navigate = useNavigate();
  const [employeeNames, setEmployeeNames] = useState([]);
  const [leaveDetailsForm, setLeaveDetailsForm] = useState({
    balance: 0,
    daysAbsent: 0,
    reportsTo: 0,
    employeeId: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLeaveDetailsForm((prevData) => ({
      ...prevData,
      [name]: Number(value),
    }));
  };

  const handleLeaveDetailsSubmit = async (e) => {
    e.preventDefault();
    const leaveDetailsPostJson = await postRequest(
      "https://hris-qp6t.onrender.com/leave/create",
      leaveDetailsForm,
    );
    if (leaveDetailsPostJson.status === "ok") {
      setLeaveDetailsSuccess(true);
      setLeaveDetailsForm({
        balance: 0,
        daysAbsent: 0,
        reportsTo: 0,
        employeeId: 0,
      });
      navigate("/leaves");
    }
  };

  useEffect(() => {
    const requestData = async () => {
      try {
        const res = await fetchEmployees();
        setEmployeeNames(res);
      } catch (error) {
        console.log("Error fetching employees:", error);
      }
    };

    requestData();
  }, [fetchEmployees]);

  return (
    <div className="main">
      {/* {header} */}
      {nav}
      <form>
        <legend>
          <em>
            <strong>ADD NEW LEAVE DETAILS</strong>
          </em>
        </legend>
        <div>
          <label>Employee</label>
          <select name="employeeId" onChange={handleChange}>
            <option key="0">Select an Option</option>
            {employeeNames.map((name) => {
              return (
                <option key={name.id} value={name.id}>
                  {name.fullname}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label>Available days</label>
          <input type="number" name="balance" onChange={handleChange} />
        </div>
        <button type="submit" onClick={handleLeaveDetailsSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
