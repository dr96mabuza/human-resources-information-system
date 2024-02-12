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
        name === "postalCode" ||
        name === "employeeId" ||
        name === "salary" ||
        name === "deductions" ||
        name === "bonus"
          ? Number(value)
          : value,
    }));
  };

  const handleEmployeeSubmit = async (e) => {
    e.preventDefault();
    const employeePostJson = await postRequest("employee/create", employeeForm);
    if (employeePostJson.status === "ok") {
      setEmployeeForm(defaultState);
      navigate("/employees");
    }
  };

  /////////////

  ////////////

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
        <form>
          <legend>
            <em>
              <strong>ADD NEW ADDRESS</strong>
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
          <button type="submit">Submit</button>
        </form>
        <form>
          <legend>
            <em>
              <strong>ADD NEW COMPENSATION DETAILS</strong>
            </em>
          </legend>

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
          <button type="submit">Submit</button>
        </form>
        <form>
          <legend>
            <em>
              <strong>ADD NEW CONTACT</strong>
            </em>
          </legend>

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
          <button type="submit">Submit</button>
        </form>
        <form>
          <legend>
            <em>
              <strong>ADD NEW DOCUMENT</strong>
            </em>
          </legend>

          <div>
            <label>Document Type</label>
            <select name="documentName" onChange={handleChange}>
              <option value="">Select an Option</option>
              <option value="Resume">Resume</option>
              <option value="Certificate">Certificate</option>
              <option value="Tax">Tax</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label>Document</label>
            <input type="file" name="document" onChange={handleChange} />
          </div>
          <button type="submit">Submit</button>
        </form>
        <form>
          <legend>
            <em>
              <strong>ADD NEW JOB DETAILS</strong>
            </em>
          </legend>

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
            <input
              type="number"
              name="reportTo"
              id=""
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Employment Status</label>
            <select name="employmentStatus" onChange={handleChange}>
              <option value="">Select an Option</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Remote">Remote</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
