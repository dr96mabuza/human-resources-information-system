import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
          <label htmlFor="email">Email/Username</label>
          <input
            type="email"
            name="email"
            id=""
            // value={form.email}
            placeholder="email@hrms.com"
            onChange={handleChange}
            required
          />
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
            required
          />
        </div>
        <p>
          Dont have an account yet? <a href="/signup">Click here to signup!</a>
        </p>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}
