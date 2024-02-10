import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup({ postRequest }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
    passwordConfirm: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if (
      form.username.length < 1 ||
      form.password.length < 1 ||
      form.password != form.passwordConfirm
    ) {
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
    if (
      form.username != "" &&
      form.password === form.passwordConfirm &&
      form.password.length > 1
    ) {
      const result = await postRequest(
        "signup",
        form,
      );
      if (result.status === "ok") {
        console.log(result.result);
        navigate("/login");
      }
    }
  };

  return (
    <div id="signup">
      <form>
        <legend>
          <em>
            <strong>SIGN UP</strong>
          </em>
        </legend>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            // value={form.text}
            onChange={handleChange}
            placeholder="username"
            minLength={9}
            required={true}
          />
          <span>Enter valid username .eg usete2024</span>
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            // value={form.password}
            onChange={handleChange}
            placeholder="password"
            // minLength={8}
            required={true}
          />
          <span>
            Password must be a minimum length of 8, must contain special a
            character(&$#@) and a number.
          </span>
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="passwordConfirm"
            // value={form.passwordConfirm}
            onChange={handleChange}
            placeholder="confirm password"
            // minLength={8}
            required={true}
          />
          <span>Password do not match!.</span>
        </div>
        <button type="submit" onClick={handleClick}>
          SUBMIT
        </button>
      </form>
    </div>
  );
}
