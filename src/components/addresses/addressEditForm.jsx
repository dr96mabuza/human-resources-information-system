import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiArrowLeft } from "@mdi/js";

export default function AddressEditForm({ nav, getRequest, postRequest }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    street: "",
    suburb: "",
    city: "",
    province: "",
    postalCode: 0,
  });

  const getAddress = async (id) => {
    const result = await getRequest(
      `https://hris-qp6t.onrender.com/address/${id}`,
    );
    setFormData({
      street: result[0].street,
      suburb: result[0].suburb,
      city: result[0].city,
      province: result[0].province,
      postalCode: result[0].postalCode,
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
    const resJson = await postRequest(
      `https://hris-qp6t.onrender.com/address/${id}/update`,
      formData,
    );
    if (resJson.status === "ok") {
      navigate("/addresses");
    }
  };

  return (
    <div className="main">
      {nav}
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
          <div>
            <label>Province</label>
            <input
              type="text"
              value={formData.province}
              name="province"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Postal code</label>
            <input
              type="number"
              value={formData.postalCode}
              name="postalCode"
              onChange={handleChange}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
