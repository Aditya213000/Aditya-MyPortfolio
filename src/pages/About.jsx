import React from "react";
import '../App.css';

export default function About() {
  return (
    <section className="about-page">

      
      <div className="about-intro">
        <h1>About Me</h1>

        <p>
          Hi, I’m <strong>Aditya Rai</strong>.  
          I am passionate about building modern, responsive and user-friendly websites.
          I enjoy converting ideas into real world applications using clean code
          and creative design.
        </p>

        <p>
          I focus on Frontend Development with React and love learning new
          technologies to improve my skills every day.
        </p>
      </div>

     
      <div className="skills-section">
        <h2>My Skills</h2>

        <div className="skills-grid">
          <div className="skill-card">HTML</div>
          <div className="skill-card">CSS</div>
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">React JS</div>
          <div className="skill-card">Bootstrap</div>
          <div className="skill-card">Git & GitHub</div>
        </div>
      </div>

      
      <div className="education-section">
        <h2>Education</h2>

        <div className="edu-card">
          <h3>Bachelor's Degree</h3>
          <p>Computer Engineering</p>
          <span>2021 – 2025</span>
        </div>

        <div className="edu-card">
          <h3>Web Development Course</h3>
          <p>React + JavaScript + Frontend</p>
          <span>2024</span>
        </div>
      </div>

   
      <div className="interest-section">
        <h2>Interests</h2>

        <ul>
          <li>Building web apps</li>
          <li>UI / UX design</li>
          <li>Anime & Gaming</li>
          <li>Learning new tech</li>
        </ul>
        <a href="/AdityaRaicv.pdf" download className="resume-link">Download Resume</a>
      </div>

    </section>
  );
}
