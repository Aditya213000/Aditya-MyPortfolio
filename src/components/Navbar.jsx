// import { NavLink } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <header className="navbar">
//       <h1 className="logo">
//         <span style={{ color: "red" }}>A</span>ditya
//       </h1>

//       <nav className="nav-links">
//         <NavLink to="/" end>Home</NavLink>
//         <NavLink to="/about">About</NavLink>
//         <NavLink to="/services">Services</NavLink>
//         <NavLink to="/projects">My Work</NavLink>
//         <NavLink to="/contact">Contact</NavLink>
//       </nav>
//     </header>
//   );
// }
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">

      <h1 className="logo">
        <span style={{ color: "red" }}>A</span>ditya
      </h1>

      {/* HAMBURGER */}
      <div className="menu-btn" onClick={() => setOpen(!open)}>      ☰
      </div>
      <nav className={`nav-links ${open ? "active" : ""}`}>
        <NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink>
        <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
        <NavLink to="/services" onClick={() => setOpen(false)}>Services</NavLink>
        <NavLink to="/projects" onClick={() => setOpen(false)}>My Work</NavLink>
        <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
        <NavLink to="/login" onClick={() => setOpen(false)}>Login</NavLink>
      </nav>
    </header>
  );
}
