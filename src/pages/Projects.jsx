import React, { useState } from "react";
import "../App.css";
import tic from "../assets/tictactoe.png";
import stop from "../assets/stopwatch.png";
import weather from "../assets/Weatherapi.png";
import landingpage from "../assets/Landingpage.png";
import halloween from "../assets/halloween.png";
export default function Projects() {

  const [open, setOpen] = useState(null);

  const toggle = (id) => {
    setOpen(open === id ? null : id);
  };

  const projects = [
    {
      id: 1,
      title: "Tic Tac Toe",
      img: tic,
      short: "Interactive JS Game",
      desc: "Built using HTML, CSS and JavaScript with win detection, restart option and responsive UI.",
      link: "https://github.com/Aditya213000/tic-tac-toe"
    },

    {
      id: 2,
      title: "Stopwatch",
      img: stop,
      short: "Time Tracking App",
      desc: "Start, pause, reset and lap feature implemented using JavaScript timers.",
      link: "https://github.com/Aditya213000/stop_watch"
    },

    {
      id: 3,
      title: "Weather App",
      img: weather,
      short: "API Based App",
      desc: "Fetches real time weather using API and displays temperature and conditions.",
      link: "https://github.com/Aditya213000/weatherapi"
    },

    {
      id: 4,
      title: "Landing Page",
      img: landingpage,
      short: "Responsive Design",
      desc: "A modern landing page with responsive layout using HTML and CSS.",
      link: "https://github.com/Aditya213000/landing_page"
    
    },

    {
      id: 5,
      title: "Halloween Project",
      img: halloween,
      short: "Dynamic Web Page",
      desc: "A halloween themed web page with interactive elements using HTML, CSS and JavaScript.",
      link: "https://github.com/Aditya213000/Halloween-Project"
    
    }

  ];

  return (
    <section className="projects-page">

      <h1 className="title">My Projects</h1>

      <div className="project-grid">

        {projects.map(p => (

          <div className="project-card" key={p.id}>

            {/* IMAGE KEPT */}
            <img src={p.img} className="project-img" />

            <h2>{p.title}</h2>

            <p className="short">{p.short}</p>

            <button className="view-btn" onClick={() => toggle(p.id)}>
              {open === p.id ? "Close" : "View"}
            </button>

            {/* DROPDOWN */}
            <div className={`dropdown ${open === p.id ? "show" : ""}`}>
              <p>{p.desc}</p>

              <a href={p.link} className="demo">
                Live Demo
              </a>
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}
