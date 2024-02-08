import { useState } from "react";
import Icon from "@mdi/react";
import { mdiArrowLeft } from "@mdi/js";
import { useNavigate } from "react-router-dom";

export default function CreateEmployee({ nav, header, postRequest }) {
  const navigate = useNavigate();
  const defaultState = {
    firstName: "",
    lastName: "",
    idNumber: "",
    gender: "",
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
      employeeForm,
    );
    if (employeePostJson.status === "ok") {
      setEmployeeForm(defaultState);
      navigate("/employees");
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
              <option value="">Select an Option</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Prefer not to state">Prefer not to state</option>
            </select>
          </div>
          <button type="submit" onClick={handleEmployeeSubmit}>
            Next
          </button>
        </form>
      </div>
    </div>
  );
}
