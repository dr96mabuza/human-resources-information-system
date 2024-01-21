import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiArrowLeft } from "@mdi/js";

export default function CreateEmployee({ nav, header, postRequest }) {
  const [employeeSuccess, setEmployeeSuccess] = useState(false);
  const [id, setId] = useState(0);
  const defaultState = {
    firstName: "",
    lastName: "",
    idNumber: "",
    gender: "",
    dateOfBirth: "",
    passwordSalt: "",
  };
  const [employeeForm, setEmployeeForm] = useState(defaultState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEmployeeSubmit = async (e) => {
    e.preventDefault();
    const employeePostJson = await postRequest(
      "https://hris-qp6t.onrender.com/employee/create",
      {},
    );
    if (employeePostJson.status === "ok") {
      setEmployeeSuccess(true);
      setId(employeePostJson.result.insertId);
      setEmployeeForm(defaultState);
    }
  };

  return (
    <div className="main">
      {nav}
      <div className="content edit">
        <a href="/employees">
          <Icon path={mdiArrowLeft} size={1} />
        </a>
        <form method="post">
          <legend>
            <strong>
              <em>PERSONAL DETAILS</em>
            </strong>
          </legend>
          <div>
            <label>Name</label>
            <input type="text" name="firstName" onChange={handleChange} />
          </div>
          <div>
            <label>Surname</label>
            <input type="text" name="lastName" onChange={handleChange} />
          </div>
          <div>
            <label>ID Number</label>
            <input type="text" name="idNumber" onChange={handleChange} />
          </div>
          <div>
            <label>Gender</label>
            <select name="gender" onChange={handleChange}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Prefer not to state">Prefer not to state</option>
            </select>
          </div>
          <div>
            <label>Date of birth</label>
            <input type="date" name="dateOfBirth" onChange={handleChange} />
          </div>
          <button type="submit" onClick={handleEmployeeSubmit}>
            Next
          </button>
        </form>
      </div>
    </div>
  );
}
