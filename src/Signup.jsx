import { useState } from "react";

export default function Signup() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    passwordConfirm: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
          <label htmlFor="email">Company Email</label>
          <input
            type="email"
            name="email"
            id=""
            value={form.email}
            onChange={handleChange}
            placeholder="user@hrms.com"
            required
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            id=""
            value={form.password}
            onChange={handleChange}
            placeholder="password"
            required
          />
        </div>
        <div>
          <label htmlFor="">Confirm Password</label>
          <input
            type="password"
            name="passwordConfirm"
            id=""
            value={form.passwordConfirm}
            onChange={handleChange}
            placeholder="confirm password"
            required
          />
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}
