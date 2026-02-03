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

     alert(
      `Response Submitted Successfully\n
Name: ${form.name}
Email: ${form.email}
Message: ${form.message}`

    );
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
