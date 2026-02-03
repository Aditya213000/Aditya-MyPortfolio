import { useNavigate } from "react-router-dom";

export default function Home() {

  const nav = useNavigate();

  return (
    <section className="container py-5 hero text-center">
      <h1>Hi, I'm Aditya</h1>

      <p className="lead" style={{color: "white"}}>
        A Web Developer based in India, Seeking an entry-level Full-Stack/Software Developer position to apply my knowledge of front-end and back-
end technologies.
Strong foundation in programming concepts, data structures, and object-oriented principles.
Skilled in developing responsive and user-friendly web applications.
Eager to learn new technologies and improve problem-solving abilities.
Able to work effectively both independently and as part of a team.
Committed to contributing to organizational growth through quality software solutions.
      </p>

      <button
        className="btn btn-primary"
        onClick={() => nav("/hire")}
      >
        Hire Me
      </button>
    </section>
  );
}
