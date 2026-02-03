import React from "react";
import "../App.css";

export default function Services() {
  return (
    <section className="services-page">

      <h1 className="title">Services</h1>

      <div className="services-grid">

        <div className="service-card">
          <h2>Web Development</h2>
          <p>
            Professional web development solutions for modern web applications.
            Clean code, fast performance and secure architecture.
          </p>
        </div>

        <div className="service-card">
          <h2>Responsive Design</h2>
          <p>
            Websites that look perfect on mobile, tablet and desktop devices.
            Modern UI with smooth experience.
          </p>
        </div>

        <div className="service-card">
          <h2>Frontend Development</h2>
          <p>
            React based interactive UI development with reusable components
            and best practices.
          </p>
        </div>

      </div>

    </section>
  );
}
