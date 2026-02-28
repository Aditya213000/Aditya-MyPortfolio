import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!form.email || !form.message) {
      alert("Please fill in your email and message.");
      return;
    }
    const subject = encodeURIComponent("Message from Portfolio Contact Form");
    const body = encodeURIComponent(
      `From: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:adityawork.dev@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact">
      <h1 className="text-center">Contact Me</h1>

      <div className="contact-container">
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
        />

        <button onClick={handleSend}>Send</button>
      </div>
    </section>
  );
}
