import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiArrowLeft } from "@mdi/js";

export default function CreateContact({
  nav,
  invalidInputs,
  postRequest,
  fetchEmployees,
}) {
  const navigate = useNavigate();
  const [employeeNames, setEmployeeNames] = useState([]);
  const [contactForm, setContactForm] = useState({
    email: "",
    cellphoneNumber: "",
    companyEmail: "",
    alternateNumber: "",
    employeeId: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prevData) => ({
      ...prevData,
      [name]: name === "employeeId" ? Number(value) : value,
    }));
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    const contactPostJson = await postRequest("contact/create", contactForm);

    if (contactPostJson.status === "ok") {
      setContactForm({
        email: "",
        cellphoneNumber: "",
        companyEmail: "",
        alternateNumber: "",
        employeeId: 0,
      });
      navigate("/contacts");
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
        <a href="/contacts">
          <Icon path={mdiArrowLeft} size={1} />
        </a>
        <form>
          <legend>
            <em>
              <strong>ADD NEW CONTACT</strong>
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
            <label>Email</label>
            <input type="text" name="email" onChange={handleChange} />
          </div>
          <div>
            <label>Contact Number</label>
            <input type="text" name="cellphoneNumber" onChange={handleChange} />
          </div>
          <div>
            <label>Second Email</label>
            <input type="text" name="companyEmail" onChange={handleChange} />
          </div>
          <div>
            <label>Second Contact Number</label>
            <input type="text" name="alternateNumber" onChange={handleChange} />
          </div>
          <button type="submit" onClick={handleContactSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
