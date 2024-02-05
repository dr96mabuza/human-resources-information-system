import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiArrowLeft } from "@mdi/js";
import { useNavigate } from "react-router-dom";

export default function PersonalInfoEditForm({
  nav,
  header,
  getRequest,
  postRequest,
}) {
  const navigate = useNavigate();
  const { id } = useParams();
  const defaultState = {
    firstName: "",
    lastName: "",
    idNumber: "",
    gender: "",
    dateOfBirth: "",
  };
  const [formData, setFormData] = useState(defaultState);

  const getPersonalInfo = async (id) => {
    const result = await getRequest(
      `https://hris-qp6t.onrender.com/employee/${id}`,
    );
    setFormData({
      firstName: await result[0].firstName,
      lastName: await result[0].lastName,
      idNumber: await result[0].idNumber,
      gender: await result[0].gender,
      dateOfBirth: await result[0].dateOfBirth,
    });
  };

  useEffect(() => {
    getPersonalInfo(id);
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

    const resJson = await postRequest(
      `https://hris-qp6t.onrender.com/employee/${id}/update`,
      formData,
    );
    console.log(resJson);
    if (resJson.status === "ok") {
      setFormData(defaultState);
      navigate("/employees");
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
          <a href="/employees">
            <Icon path={mdiArrowLeft} size={1} />
          </a>
          <form>
            <legend>
              <em>
                <strong>EDIT PERSONAL INFORMATION</strong>
              </em>
            </legend>
            <div>
              <label>Name</label>
              <input
                type="text"
                value={formData.firstName}
                name="firstName"
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Surname</label>
              <input
                type="text"
                value={formData.lastName}
                name="lastName"
                onChange={handleChange}
              />
            </div>
            <div>
              <label>ID Number</label>
              <input
                type="text"
                value={formData.idNumber}
                name="idNumber"
                onChange={handleChange}
              />
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
            <div>
              <label>Date of birth</label>
              <input
                type="date"
                value={formData.dateOfBirth}
                name="dateOfBirth"
                onChange={handleChange}
              />
            </div>
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
