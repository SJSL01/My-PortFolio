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
          <li>SJSL</li>
        </ul>

        <ul className="nav-links">
          <li>
            <button onClick={() => { homeRef.current.scrollIntoView({ behavior: "smooth" }) }}>
              <img style={{ mixBlendMode: "color-burn" }} src={"./home.gif"} alt="" />
              <span>Home</span>
            </button>
          </li>
          <li>
            <button onClick={() => { projectRef.current.scrollIntoView({ behavior: "smooth" }) }}>
              <img style={{ mixBlendMode: "color-burn" }} src={"./projects.gif"} alt="" />
              <span>Projects</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => { contactRef.current.scrollIntoView({ behavior: "smooth" }) }}>Contact</button>
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
          <img style={{ width: "100%" }} src={"./github-mark-white.png"} alt="" />
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
