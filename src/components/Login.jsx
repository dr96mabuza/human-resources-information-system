import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ postRequest }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.username.length < 9 || form.password < 4) {
      const form = document.querySelector("form");
      const invalidFields = form.querySelectorAll(
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
    if (form.username != "" && form.password != "") {
      const result = await postRequest(
        "https://hris-qp6t.onrender.com/login",
        form,
      );
      if (result.status === "ok") {
        // localStorage.setItem("hrmsToken", result.result.token);
        // localStorage.setItem("hrmsUser", result.result.employee);
        navigate("/");
      }
    }
  };

  return (
    <div id="login">
      <form>
        <legend>
          <em>
            <strong>LOGIN</strong>
          </em>
        </legend>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id=""
            // value={form.username}
            placeholder="username"
            onChange={handleChange}
            minLength={9}
            required={true}
          />
          <span>Enter valid username</span>
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            id=""
            // value={form.password}
            placeholder="password"
            onChange={handleChange}
            minLength={2}
            required={true}
          />
          <span>Password must contain special character and number.</span>
        </div>
        <p>
          Dont have an account yet? <a href="/signup">Click here to signup!</a>
        </p>
        <button type="submit" onClick={handleSubmit}>
          SUBMIT
        </button>
      </form>
    </div>
  );
}
