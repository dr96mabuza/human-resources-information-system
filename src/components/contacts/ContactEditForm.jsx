import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiArrowLeft } from "@mdi/js";
import Nav from "../Nav";

export default function ContactEditForm({nav, getRequest, postRequest}) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    email: "",
    cellphoneNumber: "",
    companyEmail: "",
    alternateNumber: "",
  });

  const getContact = async (id) => {
    const result = await getRequest(`https://hris-qp6t.onrender.com/contact/${id}`);
    setFormData({
      email: await result[0].email,
      cellphoneNumber: await result[0].cellphoneNumber,
      companyEmail: await result[0].companyEmail,
      alternateNumber: await result[0].alternateNumber,
    });
  };

  useEffect(() => {
    getContact(id);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resJson = await postRequest(`https://hris-qp6t.onrender.com/contact/${id}/update`, formData);
    if (resJson.status === "ok") {
      navigate("/contacts");
    }
  };

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
              <strong>EDIT CONTACT</strong>
            </em>
          </legend>
          <div>
            <label>Email</label>
            <input
              type="text"
              value={formData.email}
              name="email"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Contact Number</label>
            <input
              type="text"
              value={formData.cellphoneNumber}
              name="cellphoneNumber"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Second Email</label>
            <input
              type="text"
              value={formData.companyEmail}
              name="companyEmail"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Second Contact NUmber</label>
            <input
              type="text"
              value={formData.alternateNumber}
              name="alternateNumber"
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
