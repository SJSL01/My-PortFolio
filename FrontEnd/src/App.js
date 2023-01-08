import { useEffect, useRef, useState } from "react";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import "./index.css"

function App() {


  const homeRef = useRef()
  const projectRef = useRef()
  const contactRef = useRef()

  const downloadResume = () => {
    window.open("./Resume.pdf", "_blank")
  }


  return (


    <div className="container">

      <nav>

        <ul className="nav-logo">
          <li>PORTFOLIO</li>
        </ul>

        <ul className="nav-links">
          <li>
            <button onClick={() => { homeRef.current.scrollIntoView({ behavior: "smooth" }) }}>
              <div style={{
                display: "flex", flexDirection: "column", alignItems:
                  "center"
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="80%" height="25" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
                  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
                  <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
                </svg>
                <span>Home</span>
              </div>
            </button>
          </li>
          <li>
            <button onClick={() => { projectRef.current.scrollIntoView({ behavior: "smooth" }) }}>
              <div style={{
                display: "flex", flexDirection: "column", alignItems:
                  "center"
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="80%" height="25" fill="currentColor" class="bi bi-card-checklist" viewBox="0 0 16 16">
                  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                  <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
                </svg>
                <span>Projects</span>
              </div>
            </button>
          </li>
          <li>
            <button
              onClick={() => { contactRef.current.scrollIntoView({ behavior: "smooth" }) }}>
              <div style={{
                display: "flex", flexDirection: "column", alignItems:
                  "center"
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="80%" height="25" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
                  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
                </svg>
                <span>
                  Contact
                </span>
              </div>
            </button>
          </li>
        </ul>

      </nav>

      <div className="top-options">
        <div onClick={() => window.open('https://github.com/SJSL01', '_blank')} style={{ display: "flex" }}>
          <img style={{ width: "100%" }} src={"./github-mark-white.png"} alt="" />
          Github
        </div>
        <div onClick={() => window.open('https://www.linkedin.com/in/simran-jyot-singh-lall/', '_blank')} style={{ display: "flex" }}>
          <img style={{ width: "100%" }} src={"./LinkedIn.png"} alt="" />
          LinkedIn
        </div>
        <div onClick={downloadResume} style={{ display: "flex" }}>
          <img style={{ width: "100%" }} src={"./resume.png"} alt="" />
          Resume
        </div>
      </div>

      <div className="main">
        <div ref={homeRef} className="home"><Home /></div>
        <div ref={projectRef} className="product"><Projects /></div>
        <div ref={contactRef} className="contact"><Contact /></div>
      </div>
    </div>

  );
}

export default App;
