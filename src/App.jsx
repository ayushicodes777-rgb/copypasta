import './App.css'
import { FaUserCircle, FaCube } from "react-icons/fa"

function App() {
  return (
    <>
      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <div className="logo">
          <FaCube />
          <h2>Copy Pasta</h2>
        </div>

        <ul className="nav-links">
          <li>Services</li>
          <li>How It Works</li>
          <li>Resources</li>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>

        <div className="nav-actions">

          <button className="login-btn">
            <FaUserCircle />
          </button>

          <button className="quote-btn">
            Get Instant Quote
          </button>

        </div>

      </nav>

      {/* ================= HERO ================= */}

      <section className="hero">

        {/* LEFT */}

        <div className="hero-left">

          <p className="hero-tag">
            NAGALAND UNIVERSITY'S OFFICIAL 3D PRINTING PLATFORM
          </p>

          <h1 className="hero-title">
            Transform Ideas
            <br />
            Into Reality
          </h1>

          <p className="hero-description">
            Upload 3D models, estimate costs, track requests and manage printing jobs.
          </p>

          <div className="hero-buttons">

            <button className="start-btn">
              Get Started
            </button>

          </div>

        </div>

        {/* RIGHT */}

        <div className="hero-right">

          <div className="upload-box">

            <div className="upload-icon">
              📤
            </div>

            <h3>
              Drop Your 3D File
            </h3>

            <p className="file-types">
              STL • OBJ • 3MF • STEP
            </p>

            <div className="drop-zone">

              <p>
                Drag & Drop your model here
              </p>

              <button className="browse-btn">
                Browse Files
              </button>

            </div>

            <div className="upload-info">

              <span>
                Max Size: 100MB
              </span>

              <span>
                Instant Quote
              </span>

            </div>

          </div>

          <div className="model-help">

            <p>
              Don't have a 3D model yet?
            </p>

            <a href="#">
              Learn How To Create A 3D Model →
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
  )
}

export default App