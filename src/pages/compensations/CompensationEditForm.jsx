import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiArrowLeft } from "@mdi/js";
import Input from "../../components/Input";

export default function CompansationForm({ nav, getRequest, postRequest }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const defaultState = {
    salary: 0,
    deductions: 0,
    bonus: 0,
  };
  const [formData, setFormData] = useState(defaultState);

  const getCompensation = async (id) => {
    const result = await getRequest(`compansation/${id}`);
    setFormData({
      salary: await result.salary,
      deductions: await result.deductions,
      bonus: await result.bonus,
    });
  };

  useEffect(() => {
    getCompensation(id);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: Number(value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resJson = await postRequest(`compansation/${id}/update`, formData);
    if (resJson.status === "ok") {
      navigate("/compensations");
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
        <div className=" content edit">
          <a href="/compensations">
            <Icon path={mdiArrowLeft} size={1} />
          </a>
          <form>
            <legend>
              <em>
                <strong>EDIT COMPENSATION</strong>
              </em>
            </legend>
            <div>
              <label>Salary</label>
              <input
                type="number"
                value={formData.salary}
                name="salary"
                onChange={handleChange}
              />
            </div>
            {/* <Input label={"Deductions"} type={"number"} value={formData.deductions} onChange={handleChange}/> */}
            <div>
              <label>Deductions</label>
              <input
                type="number"
                value={formData.deductions}
                name="deductions"
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Bonus</label>
              <input
                type="number"
                value={formData.bonus}
                name="bonus"
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
