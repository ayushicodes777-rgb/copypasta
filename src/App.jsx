import { useState, useEffect } from "react";
import HowItWorks from "./components/howitworks";
import Services from "./components/services";
import Resources from "./components/resources";
import FAQ from "./components/faq";
import Footer from "./components/footer";
import "./App.css";

import {
  UserCircle,
  Moon,
  Sun,
  Box
} from "lucide-react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

useEffect(() => {

  if (darkMode) {

    document.body.classList.add("dark-mode");

  }

  else{

    document.body.classList.remove("dark-mode");

  }

}, [darkMode]);
  return (
    <>

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <a href="#home" className="logo">

  <Box
    size={34}
    strokeWidth={2.2}
    className="logo-icon"
  />

  <h2>COPYPASTA</h2>

</a>

        <ul className="nav-links">

  <li>
  <a href="#services">Services</a>
</li>

  <li>
  <a href="#how-it-works">How It Works</a>
</li>

  <li>
  <a href="#resources">Resources</a>
</li>

  <li>
  <a href="#faq">FAQ</a>
</li>

  <li>
  <a href="#contact">Contact</a>
</li>

</ul>

        <div className="nav-actions">

          <button

    className="theme-btn"

    onClick={() => setDarkMode(!darkMode)}

>

    {darkMode ?

        <Sun size={18}/>

        :

        <Moon size={18}/>

    }

</button>

          <button className="login-btn">
            <UserCircle size={22} />
          </button>

          <button className="quote-btn">
            Get Instant Quote
          </button>

        </div>

      </nav>

            {/* ================= HERO ================= */}

      <section id="home" className="hero">

        {/* ---------- HERO HEADING ---------- */}

        <div className="hero-heading">

          <span className="hero-badge">
            NAGALAND UNIVERSITY
          </span>

          <p className="hero-subtitle">
            Official 3D Printing Service
          </p>

        </div>

        {/* ---------- LEFT ---------- */}

        <div className="hero-left">

          <h1 className="hero-title">

    <span>FROM</span>

    <span>IMAGE</span>

    <span>TO OBJECT</span>

</h1>

          <div className="hero-divider"></div>

          <p className="hero-description">
            Transform concepts into physical objects using
            Nagaland University's Digital Fabrication Laboratory.
            Upload CAD files, receive quotations and track every
            stage of your print from submission to completion.
          </p>

          <div className="lab-row">

            <span className="lab-icon">
              ⚙
            </span>

            <div>

              <h4>
                Digital Fabrication Laboratory
              </h4>

              <p>
                Engineering & Innovation Centre
              </p>

            </div>

          </div>

          <button className="start-btn">
            Request a Print →
          </button>

          <div className="hero-tags">

            <span>✓ Campus Supported</span>

            <span>✓ 24–48 Hr Turnaround</span>

          </div>

        </div>

                {/* ---------- RIGHT ---------- */}

        <div className="hero-right">

          <div className="upload-card">

            <div className="upload-header">

              <h3>
                Upload Your CAD Model
              </h3>


            </div>

            <div className="upload-drop">


              <div className="upload-icon">
                ⬆
              </div>

              <h4>
                Drag & Drop Files
              </h4>

              <p>
                STL • OBJ • STEP • 3MF
              </p>

              <button className="browse-btn">
                Browse Files
              </button>

            </div>

            <div className="upload-info">

              <div className="info-row">
                <span>📄</span>
                <p>Instant Cost Estimation</p>
              </div>

              <div className="info-row">
                <span>🧵</span>
                <p>Material Selection</p>
              </div>

              <div className="info-row">
                <span>📦</span>
                <p>Live Print Tracking</p>
              </div>

            </div>

          </div>

          <div className="model-link">

            <p className="model-question">
              Don't have a 3D model yet?
            </p>

            <a href="#" className="model-answer">
              Learn how to create one →
            </a>

          </div>

        </div>

      </section>
      {/* ================= HOW IT WORKS ================= */}

      <HowItWorks/>


      {/* ================= SERVICES ================= */}

<Services/>

<Resources/>

      {/* ================= FAQ ================= */}

      <FAQ/>

      {/* ================= FOOTER ================= */}

      <Footer/>

    </>
  );
}

export default App;