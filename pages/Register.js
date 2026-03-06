import { useState } from "react";
import API from "../api";

function Register() {
  const [form, setForm] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await API.post("/auth/register", form);
    localStorage.setItem("token", res.data.token);
    alert("Registered!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" onChange={e => setForm({...form, name: e.target.value})}/>
      <input placeholder="Email" onChange={e => setForm({...form, email: e.target.value})}/>
      <input placeholder="Password" type="password"
        onChange={e => setForm({...form, password: e.target.value})}/>
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;