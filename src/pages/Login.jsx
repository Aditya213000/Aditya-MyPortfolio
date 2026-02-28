import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError("Please fill in all fields.");
      return;
    }
    // Demo credentials
    if (form.email === "admin@aditya.dev" && form.password === "admin123") {
      alert("Login successful! Welcome back.");
      navigate("/");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <section className="login-page">
      <div className="login-container">
        <h1>Login</h1>
        <p className="login-subtitle">Welcome back! Please sign in to continue.</p>

        <form onSubmit={handleSubmit}>
          <div className="login-field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="login-field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          {error && <p className="login-error">{error}</p>}

          <button type="submit" className="login-btn">Sign In</button>
        </form>

        <p className="login-hint">
          Demo credentials: <span>admin@aditya.dev</span> / <span>admin123</span>
        </p>
      </div>
    </section>
  );
}
