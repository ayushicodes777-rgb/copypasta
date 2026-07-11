import "./footer.css";

import {
  GraduationCap,
  ExternalLink,
  Mail,
  MapPin,
} from "lucide-react";

function Footer() {
  return (
    <footer id="contact" className="footer">

      {/* ================= BRAND ================= */}

      <div className="footer-brand">

        <div className="footer-logo">

          <GraduationCap size={34} />

          <h2>
            Digital Fabrication Laboratory
          </h2>

        </div>

        <p>

          Empowering students through rapid prototyping,
          CAD design assistance and digital manufacturing
          at Nagaland University.

        </p>

      </div>

      {/* ================= LINKS ================= */}

      <div className="footer-links">

        {/* Resources */}

        <div className="footer-column">

          <h4>Resources</h4>

          <a href="#">Knowledge Hub</a>

          <a href="#">How It Works</a>

          <a href="#">Services</a>

          <a href="#">FAQ</a>

        </div>

        {/* Support */}

        <div className="footer-column">

          <h4>Support</h4>

          <a href="#">Contact Us</a>

          <a href="#">Submit Request</a>

          <a href="#">Report Issue</a>

          <a href="#">Printing Guide</a>

        </div>

        {/* External Resources */}

        <div className="footer-column">

          <h4>External Resources</h4>

          <a href="#">

            Fusion 360

            <ExternalLink size={14} />

          </a>

          <a href="#">

            Ultimaker Cura

            <ExternalLink size={14} />

          </a>

          <a href="#">

            Printables

            <ExternalLink size={14} />

          </a>

          <a href="#">

            Thingiverse

            <ExternalLink size={14} />

          </a>

        </div>

        {/* Legal */}

        <div className="footer-column">

          <h4>Legal</h4>

          <a href="#">Privacy Policy</a>

          <a href="#">Terms of Use</a>

          <a href="#">Cookie Policy</a>

          <a href="#">Disclaimer</a>

        </div>

      </div>

      {/* ================= BOTTOM ================= */}

      <div className="footer-bottom">

        <div className="footer-info">

          <div>

            <Mail size={16} />

            <span>

              dfl@nagalanduniversity.ac.in

            </span>

          </div>

          <div>

            <MapPin size={16} />

            <span>

              Kohima Campus, Nagaland University

            </span>

          </div>

        </div>

        <p>

          © 2026 Digital Fabrication Laboratory ·
          Designed & Developed by Students

        </p>

      </div>

    </footer>
  );
}

export default Footer;