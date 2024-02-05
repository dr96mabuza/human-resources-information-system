import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiArrowLeft } from "@mdi/js";
import Nav from "../Nav";

export default function JobInfoEditForm({ nav, getRequest, postRequest }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const defaultState = {
    company: "",
    jobRole: "",
    reportsTo: 0,
    employmentStatus: "",
  };
  const [formData, setFormData] = useState(defaultState);

  const getJobInfo = async (id) => {
    const result = await getRequest(
      `https://hris-qp6t.onrender.com/employmentdetail/${id}`,
    );
    setFormData({
      company: result[0].company,
      jobRole: result[0].jobRole,
      reportsTo:
        result[0].reportsTo === undefined || result[0].reportsTo === null
          ? 0
          : result[0].reportsTo,
      employmentStatus: result[0].employmentStatus,
    });
  };

  useEffect(() => {
    getJobInfo(id);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "reportsTo" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resJson = await postRequest(
      `https://hris-qp6t.onrender.com/employmentdetail/${id}/update`,
      formData,
    );
    //
    if (resJson.status === "ok") {
      navigate("/employmentdetails");
    }
    console.log(resJson);
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
          <a href="/employmentdetails">
            <Icon path={mdiArrowLeft} size={1} />
          </a>
          <form>
            <legend>
              <em>
                <strong>EDIT EMPLOYMENT DETAILS</strong>
              </em>
            </legend>
            <div>
              <label>Company</label>
              <input
                type="text"
                value={formData.company}
                name="company"
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Role</label>
              <input
                type="text"
                value={formData.jobRole}
                name="jobRole"
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Senior/Manager</label>
              <input
                type="number"
                value={formData.reportsTo}
                name="reportsTo"
                id=""
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Employment Status</label>
              <input
                type="text"
                value={formData.employmentStatus}
                name="employmentStatus"
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
