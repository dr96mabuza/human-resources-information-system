import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiArrowLeft } from "@mdi/js";
import Input from "../../components/Input";

export default function AddressEditForm({ nav, getRequest, postRequest }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const defaultState = {
    street: "",
    suburb: "",
    city: "",
    province: "",
    postalCode: 0,
  };
  const [formData, setFormData] = useState(defaultState);

  const getAddress = async (id) => {
    const result = await getRequest(`address/${id}`);
    setFormData({
      street: result.street,
      suburb: result.suburb,
      city: result.city,
      province: result.province,
      postalCode: result.postalCode,
    });
  };

  useEffect(() => {
    const g = async () => {
      await getAddress(id);
    };
    g();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "postalCode" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resJson = await postRequest(`address/${id}/update`, formData);
    if (resJson.status === "ok") {
      navigate("/addresses");
    }
  };

  return (
    <div className="main">
      {nav}
      {defaultState === formData ? (
        <section className="loaderContainer">
          <div className="loader"></div>
        </section>
      ) : (
        <div className="content edit">
          <a href="/addresses">
            <Icon path={mdiArrowLeft} size={1} />
          </a>
          <form>
            <legend>
              <em>
                <strong>EDIT ADDRESS INFORMATION</strong>
              </em>
            </legend>
            <div>
              <label>Street</label>
              <input
                type="text"
                value={formData.street}
                name="street"
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Suburb</label>
              <input
                type="text"
                value={formData.suburb}
                name="suburb"
                onChange={handleChange}
              />
            </div>
            <div>
              <label>City</label>
              <input
                type="text"
                value={formData.city}
                name="city"
                onChange={handleChange}
              />
            </div>

              <Input
              label={"Province"}
                type={"text"}
                value={formData.province}
                name="province"
                onChange={event => handleChange(event)}
                required={true}
                span={"enter valid province"}
              />

            <Input type={"number"}
              label={"Postal code"}
              name={"postalCode"}
              value={formData.postalCode}
              onChange={event => handleChange(event)}
              minLength={1}
              required={true}
              span={"Enter valid postal code."}
              />
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
