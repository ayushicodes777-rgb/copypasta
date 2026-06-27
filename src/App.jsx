import "./App.css";

import {
  UserCircle,
  Moon,
  Box
} from "lucide-react";

function App() {
  return (
    <>

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <div className="logo">

          <Box
            size={34}
            strokeWidth={2.2}
            className="logo-icon"
          />

          <h2>COPYPASTA</h2>

        </div>

        <ul className="nav-links">

          <li>Services</li>
          <li>How It Works</li>
          <li>Resources</li>
          <li>FAQ</li>
          <li>Contact</li>

        </ul>

        <div className="nav-actions">

          <button className="theme-btn">
            <Moon size={18} />
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

      <section className="hero">

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

    <span>IDEA</span>

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

      <section>

        <h1>
          How It Works
        </h1>

      </section>

      {/* ================= SERVICES ================= */}

      <section>

        <h1>
          Services
        </h1>

      </section>

      {/* ================= FAQ ================= */}

      <section>

        <h1>
          FAQ
        </h1>

      </section>

      {/* ================= FOOTER ================= */}

      <footer>

        <h1>
          Footer
        </h1>

      </footer>

    </>
  );
}

export default App;