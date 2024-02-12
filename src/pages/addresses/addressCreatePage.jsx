import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiArrowLeft } from "@mdi/js";
import Input from "../../components/Input";

export default function CreateAddressPage({
  nav,
  postRequest,
  fetchEmployees,
  invalidInputs,
}) {
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

  useEffect(() => {
    const requestData = async () => {
      try {
        const res = await fetchEmployees();
        setEmployeeNames(res);
      } catch (error) {
        console.log("Error fetching employees:", error);
      }
    };

    if (localStorage.getItem("hrmsToken") === undefined) {
      navigate("/login");
    }

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
      invalidInputs();
      return;
    }

    const addressPostJson = await postRequest("address/create", addressForm);

    if (addressPostJson.status === "ok") {
      setAddressForm(defaultState);
      navigate("/addresses");
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
          <Input type={"number"}
              label={"Postal code"}
              name={"postalCode"}
              onChange={event => handleChange(event)}
              minLength={1}
              required={true}
              span={"Enter valid postal code."}
              />
          <button type="submit" onClick={handleAddressSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
