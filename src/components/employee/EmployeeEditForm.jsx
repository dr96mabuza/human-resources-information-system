import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PersonalInfoEditForm({
  nav,
  header,
  getRequest,
  postRequest,
}) {
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
    }
  };

  return (
    <div className="main">
      {/* {header} */}
      {nav}
      <div /*style={{display:"none"}}*/ className="modal">
        <form>
          <legend>Edit Personal Information</legend>
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
            <input
              type="text"
              value={formData.gender}
              name="gender"
              onChange={handleChange}
            />
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
    </div>
  );
}
