import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiArrowLeft } from "@mdi/js";

export default function CreateAddress({ nav, postRequest, fetchEmployees }) {
  const navigate = useNavigate();
  const [employeeNames, setEmployeeNames] = useState([]);
  const defaultState = {
    street: "",
    suburb: "",
    city: "",
    province: "",
    postalCode: 0,
    employeeId: 0,
  };
  const [addressForm, setAddressForm] = useState(defaultState);

  if (localStorage.getItem("hrmsToken") === undefined) {
    navigate("/login")
  }

  // const loaderContainer = document.querySelector(".loaderContainer").;
  // loaderContainer.style.display = "none"

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddressForm((prevData) => ({
      ...prevData,
      [name]:
        name === "postalCode" || name === "employeeId" ? Number(value) : value,
    }));
  };

  const handleAddressSubmit = async (e) => {
    e.preventDefault();
    if (
      addressForm.postalCode < 1 ||
      addressForm.employeeId < 1 ||
      addressForm.street.length < 1 ||
      addressForm.suburb.length < 1 ||
      addressForm.city.length < 1 ||
      addressForm.province.length < 1
    ) {
      const addressCreateForm = document.querySelector("form");
      const invalidFields = addressCreateForm.querySelectorAll(
        "input:invalid, select:invalid",
      );
      invalidFields.forEach((field) => {
        setTimeout(() => {
          field.style.border = "1px solid #ccc";
        }, 1000);

        field.style.border = "solid red 5px";
      });
      return;
    }

    if (
      addressForm.postalCode != 0 &&
      addressForm.employeeId != 0 &&
      addressForm.street != "" &&
      addressForm.suburb != "" &&
      addressForm.city != "" &&
      addressForm.province != ""
    ) {
      console.log(addressForm);
      const addressPostJson = await postRequest(
        "https://hris-qp6t.onrender.com/address/create",
        addressForm,
      );

      if (addressPostJson.status === "ok") {
        setAddressForm(defaultState);
        navigate("/addresses");
      }
    }
  };

  return (
    <div className="main" id="addressCreateForm">
      {nav}
      {/* <section className="loaderContainer">
          <div className="loader"></div>
        </section> */}
      <div className="content edit">
        <a href="/addresses">
          <Icon path={mdiArrowLeft} size={1} />
        </a>
        <form>
          <legend>
            <em>
              <strong>ADD NEW ADDRESS</strong>
            </em>
          </legend>
          <div>
            <label>Select a Employee:</label>
            <select name="employeeId" onChange={handleChange} required={true}>
              <option key="0"></option>
              {employeeNames.map((name) => {
                return (
                  <option key={name.id} value={name.id}>
                    {name.fullname}
                  </option>
                );
              })}
            </select>
            <span>Select current employee</span>
          </div>
          <div>
            <label>Street</label>
            <input
              type="text"
              name="street"
              onChange={handleChange}
              minLength={8}
              required={true}
            />
            <span>
              Street should be a minimun length of 6 and should include a
              number.
            </span>
          </div>
          <div>
            <label>Suburb</label>
            <input
              type="text"
              name="suburb"
              onChange={handleChange}
              minLength={3}
              required={true}
            />
            <span>Suburb should be a minimum length of 3.</span>
          </div>
          <div>
            <label>City</label>
            <input
              type="text"
              name="city"
              onChange={handleChange}
              minLength={3}
              required={true}
            />
            <span>City should be a minimum length of 3.</span>
          </div>
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
          <div>
            <label>Postal code</label>
            <input
              type="number"
              name="postalCode"
              onChange={handleChange}
              minLength={1}
              required={true}
            />
            <span>Enter valid postal code.</span>
          </div>
          <button type="submit" onClick={handleAddressSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
