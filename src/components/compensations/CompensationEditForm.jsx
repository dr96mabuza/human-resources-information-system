import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";
import Nav from "../Nav";

export default function CompansationForm() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    salary: 0,
    deductions: 0,
    bonus: 0,
  });

  const getCompensation = async (id) => {
    const res = await fetch(
      `https://hris-qp6t.onrender.com/compansation/${id}`,
      { method: "GET", mode: "cors" },
    );
    const data = await res.json();
    const result = await data.result;
    setFormData({
      salary: await result[0].salary,
      deductions: await result[0].deductions,
      bonus: await result[0].bonus,
    });
  };

  useEffect(() => {
    getCompensation(id);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: parseInt(value, 10),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://hris-qp6t.onrender.com/compansation/${id}/update`,
      {
        method: "post",
        mode: "cors",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      },
    );
    const resJson = await response.json();
    console.log(resJson);
    // if ( resJson.status === "ok") {
    //     setSuccess(true);
    // }
  };

  return (
    <div className="main">
      {/* <Header /> */}
      <Nav />
      <form>
        <legend>Edit Compensation</legend>
        <div>
          <label>Salary</label>
          <input
            type="number"
            value={formData.salary}
            name="salary"
            onChange={handleChange}
          />
        </div>
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
  );
}
