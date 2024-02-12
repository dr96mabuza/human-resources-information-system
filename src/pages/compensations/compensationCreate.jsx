import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiArrowLeft } from "@mdi/js";

export default function CreateCompensation({
  nav,
  postRequest,
  fetchEmployees,
  invalidInputs,
}) {
  const navigate = useNavigate();
  const [employeeNames, setEmployeeNames] = useState([]);
  const [compensationForm, setCompensationForm] = useState({
    salary: 0,
    deductions: 0,
    bonus: 0,
    employeeId: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompensationForm((prevData) => ({
      ...prevData,
      [name]: Number(value),
    }));
  };

  const handleCompensationSubmit = async (e) => {
    e.preventDefault();
    const compensationPostJson = await postRequest(
      "compansation/create",
      compensationForm,
    );
    if (compensationPostJson.status === "ok") {
      setCompensationForm({
        salary: 0,
        deductions: 0,
        bonus: 0,
        employeeId: 0,
      });
      navigate("/compensations");
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
      {nav}
      <div className="content edit">
        <a href="/compensations">
          <Icon path={mdiArrowLeft} size={1} />
        </a>
        <form>
          <legend>
            <em>
              <strong>ADD NEW COMPENSATION DETAILS</strong>
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
            <label>Salary</label>
            <input type="number" name="salary" onChange={handleChange} />
          </div>
          <div>
            <label>Deductions</label>
            <input type="number" name="deductions" onChange={handleChange} />
          </div>
          <div>
            <label>Bonus</label>
            <input type="number" name="bonus" onChange={handleChange} />
          </div>
          <button type="submit" onClick={handleCompensationSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
