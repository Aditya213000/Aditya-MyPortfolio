import { useState } from "react";
import '../App.css'

export default function HireForm() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      alert("Please fill Name and Email");
      return;
    }

    const subject = encodeURIComponent(`Hire Request from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nProject Details:\n${form.message}`
    );
    window.location.href = `mailto:adityawork.dev@gmail.com?subject=${subject}&body=${body}`;

    setForm({
      name: "",
      email: "",
      message: ""
    });
  };
  
   

  return (
    <section className="hire-container py-15">
      <h1>Hire Me</h1>

      <form onSubmit={handleSubmit}>

        <input
          name="name"
          placeholder="Your Name"
          className="form-control mb-2"
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          className="form-control mb-2"
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Project Details"
          className="form-control mb-2"
          onChange={handleChange}
        />

        <button className="btn btn-primary">
          Submit
        </button>

      </form>
    </section>
  );
}
