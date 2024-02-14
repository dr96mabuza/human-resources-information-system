import { useState } from "react";
import Icon from "@mdi/react";
import { mdiArrowLeft } from "@mdi/js";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";

export default function CreateEmployee({
  nav,
  header,
  postRequest,
  invalidInputs,
}) {
  const navigate = useNavigate();
  const defaultState = {
    firstName: "",
    lastName: "",
    idNumber: "",
    gender: "",
    street: "",
    suburb: "",
    city: "",
    province: "",
    postalCode: 0,
    salary: 0,
    deductions: 0,
    bonus: 0,
    email: "",
    cellphoneNumber: "",
    companyEmail: "",
    alternateNumber: "",
    documentName: "",
    document: null,
    company: "",
    jobRole: "",
    reportsTo: 0,
    employmentStatus: "",
    employeeId: 0,
  };
  const [employeeForm, setEmployeeForm] = useState(defaultState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeForm((prevData) => ({
      ...prevData,
      [name]:
        name === "employeeId" ||
        name === "reportsTo" ||
        name === "bonus" ||
        name === "deductions" ||
        name === "salary" ||
        name === "postalCode"
          ? Number(value)
          : value,
    }));
  };

  const handleEmployeeSubmit = async (e) => {
    e.preventDefault();
    if (
      employeeForm.firstName.length < 2 ||
      employeeForm.lastName.length < 2 ||
      employeeForm.idNumber.length < 13 ||
      employeeForm.gender.length < 4
    ) {
      invalidInputs();
      return;
    }

    const employeePostJson = await postRequest("employee/create", {
      firstName: employeeForm.firstName,
      lastName: employeeForm.lastName,
      idNumber: employeeForm.idNumber,
      gender: employeeForm.gender,
    });
    if (employeePostJson.status === "ok") {
      employeeForm.employeeId = employeePostJson.result.id;
      document.querySelectorAll(".employeeForm").forEach((item) => {
        item.style.display = "none";
      });
      document.querySelector("#employeeForm2").style.display = "block";
    }
  };


  const handleEmploymentDetailsSubmit = (e) => {
    if (
      employeeForm.company.length < 3 ||
      employeeForm.jobRole.length < 3 ||
      employeeForm.reportsTo > 0 ||
      employeeForm.employmentStatus.length < 6
    ) {
      invalidInputs();
      return;
    }
    // setEmployeeForm(defaultState)
    console.log(employeeForm);
    navigate("/employees");
  };

  return (
    <div className="main">
      {nav}
      <div className="content edit">
        <a href="/employees">
          <Icon path={mdiArrowLeft} size={1} />
        </a>
        <form className="employeeForm" id="employeeForm1">
          <legend>
            <strong>
              <em>PERSONAL DETAILS</em>
            </strong>
          </legend>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="firstName"
              onChange={handleChange}
              minLength={2}
              required={true}
            />
            <span>
              Name has to be a minimum length of 2 and must not contain any
              special charecters.
            </span>
          </div>
          <div>
            <label>Surname</label>
            <input
              type="text"
              name="lastName"
              onChange={handleChange}
              minLength={2}
              required={true}
            />
            <span>
              Name has to be a minimum length of 2 and must not contain any
              special charecters.
            </span>
          </div>
          <div>
            <label>ID Number</label>
            <input
              type="text"
              name="idNumber"
              onChange={handleChange}
              minLength={13}
              maxLength={13}
              required={true}
            />
            <span>Enter valid id. id must be 13 characters long.</span>
          </div>
          <div>
            <label>Gender</label>
            <select
              name="gender"
              onChange={handleChange}
              required={true}
              minLength={4}
            >
              <option value="">Select an Option</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Prefer not to state">Prefer not to state</option>
            </select>
            <span>Select valid option above.</span>
          </div>
          <button type="submit" onClick={handleEmployeeSubmit}>
            Next
          </button>
        </form >
        <form className="employeeForm" id="employeeForm2">
          <legend>
            <em>
              <strong>ADDRESS</strong>
            </em>
          </legend>

          <Input
            type={"text"}
            label={"Street"}
            name={"street"}
            onChange={(event) => handleChange(event)}
            minLength={8}
            required={true}
            span={
              "Street should be a minimun length of 6 and should include a number."
            }
          />

          <Input
            label={"Suburb"}
            type={"text"}
            name={"suburb"}
            // value={""}
            onChange={(event) => handleChange(event)}
            minLength={3}
            required={true}
            span={"Suburb should be a minimum length of 3."}
          />

          <Input
            type={"text"}
            label={"City"}
            name={"city"}
            onChange={(event) => handleChange(event)}
            minLength={3}
            required={true}
            span={"City should be a minimum length of 3."}
          />

          <div>
            <label>Select a Province:</label>
            <select
              name="province"
              onChange={handleChange}
              minLength={7}
              required={true}
            >
              <option key="0" value=""></option>
              <option value="Eastern Cape">Eastern Cape</option>
              <option value="Free State">Free State</option>
              <option value="Gauteng">Gauteng</option>
              <option value="KwaZulu-Natal">KwaZulu-Natal</option>
              <option value="Limpopo">Limpopo</option>
              <option value="Mpumalanga">Mpumalanga</option>
              <option value="Northern Cape">Northern Cape</option>
              <option value="North West">North West</option>
              <option value="Western Cape">Western Cape</option>
            </select>
            <span>Select valid province.</span>
          </div>
          <Input
            type={"number"}
            label={"Postal code"}
            name={"postalCode"}
            onChange={(event) => handleChange(event)}
            minLength={1}
            required={true}
            span={"Enter valid postal code."}
          />
          

          <legend>
            <em>
              <strong>COMPENSATION DETAILS</strong>
            </em>
          </legend>

          <div>
            <label>Salary</label>
            <input
              type="number"
              name="salary"
              onChange={handleChange}
              min={50000}
              minLength={4}
              required={true}
            />
          </div>
          <div>
            <label>Deductions</label>
            <input
              type="number"
              name="deductions"
              onChange={handleChange}
              minLength={4}
              required={true}
            />
          </div>
          <div>
            <label>Bonus</label>
            <input
              type="number"
              name="bonus"
              onChange={handleChange}
              minLength={2}
              required={true}
            />
          </div>
          

          <legend>
            <em>
              <strong>CONTACT</strong>
            </em>
          </legend>

          <div>
            <label>Email</label>
            <input
              type="email"
              minLength={15}
              name="email"
              placeholder="example@example.com"
              onChange={handleChange}
              required={true}
            />
            <span>Enter valid email address.</span>
          </div>
          <div>
            <label>Contact Number</label>
            <input
              type="text"
              name="cellphoneNumber"
              minLength={10}
              maxLength={10}
              onChange={handleChange}
              required={true}
            />
            <span>Enter valid cellphone number</span>
          </div>
          <div>
            <label>Second Email</label>
            <input
              type="email"
              minLength={15}
              name="companyEmail"
              placeholder="example@example.com"
              onChange={handleChange}
              required={true}
            />
            <span>Enter valid email address.</span>
          </div>
          <div>
            <label>Second Contact Number</label>
            <input
              type="text"
              name="alternateNumber"
              minLength={10}
              maxLength={10}
              onChange={handleChange}
              required={true}
            />
            <span>Enter valid cellphone number</span>
          </div>

          <legend>
            <em>
              <strong>DOCUMENT</strong>
            </em>
          </legend>

          <div>
            <label>Document Type</label>
            <select
              name="documentName"
              onChange={handleChange}
              required={true}
              minLength={3}
            >
              <option value="">Select an Option</option>
              <option value="Resume">Resume</option>
              <option value="Certificate">Certificate</option>
              <option value="Tax">Tax</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label>Document</label>
            <input
              type="file"
              name="document"
              onChange={handleChange}
              required={true}
            />
          </div>

          <legend>
            <em>
              <strong>JOB DETAILS</strong>
            </em>
          </legend>

          <div>
            <label>Company</label>
            <input
              type="text"
              name="company"
              minLength={3}
              onChange={handleChange}
              required={true}
            />
          </div>
          <div>
            <label>Role</label>
            <input
              type="text"
              name="jobRole"
              minLength={3}
              onChange={handleChange}
              required={true}
            />
          </div>
          <div>
            <label>Senior/Manager</label>
            <input
              type="number"
              name="reportsTo"
              id=""
              onChange={handleChange}
              min={1}
            />
          </div>
          <div>
            <label>Employment Status</label>
            <select
              name="employmentStatus"
              minLength={6}
              onChange={handleChange}
              required={true}
            >
              <option value="">Select an Option</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Remote">Remote</option>
            </select>
          </div>
          <button type="submit" onClick={handleEmploymentDetailsSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
