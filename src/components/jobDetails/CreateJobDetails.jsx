import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateEmploymentDetails({
  nav,
  header,
  postRequest,
  fetchEmployees,
}) {
  const navigate = useNavigate();
  const [employeeNames, setEmployeeNames] = useState([]);
  const [employmentDetailsForm, setEmploymentDetailsForm] = useState({
    company: "",
    jobRole: "",
    reportsTo: 0,
    employmentStatus: "",
    employeeId: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmploymentDetailsForm((prevData) => ({
      ...prevData,
      [name]:
        name === "reportsTo" || name === "employeeId" ? Number(value) : value,
    }));
  };

  const handleEmploymentDetailsSubmit = async (e) => {
    e.preventDefault();
    const employmentDetailsPostJson = await postRequest(
      "https://hris-qp6t.onrender.com/employmentdetail/create",
      employmentDetailsForm,
    );
    if (employmentDetailsPostJson.status === "ok") {
      setEmploymentDetailsForm({
        company: "",
        jobRole: "",
        reportsTo: 0,
        employmentStatus: "",
        employeeId: 0,
      });
      navigate("/employmentdetails");
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
            <strong>ADD NEW JOB DETAILS</strong>
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
          <label>Company</label>
          <input type="text" name="company" onChange={handleChange} />
        </div>
        <div>
          <label>Role</label>
          <input type="text" name="jobRole" onChange={handleChange} />
        </div>
        <div>
          <label>Senior/Manager</label>
          <input type="number" name="reportTo" id="" onChange={handleChange} />
        </div>
        <div>
          <label>Employment Status</label>
          <input type="text" name="employmentStatus" onChange={handleChange} />
        </div>
        <button type="submit" onClick={handleEmploymentDetailsSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
