import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ postRequest, invalidInputs }) {
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
      invalidInputs();
      return;
    }

    const result = await postRequest("login", form);
    if (result.status === "ok") {
      localStorage.setItem("hrmsToken", result.result.token);
      localStorage.setItem("hrmsUser", JSON.stringify(result.result.employee));
      navigate("/");
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
            // value={form.username}
            placeholder="Enter your username....."
            onChange={handleChange}
            minLength={9}
            required={true}
          />
          <span>Enter valid username</span>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password...."
            onChange={handleChange}
            minLength={4}
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
