import "./services.css";
// import filament from "../assets/images/filament.png";
// import object from "../assets/images/object.png";
import {
  Printer,
  PencilRuler,
  Zap,
  GraduationCap,
  Wrench,
} from "lucide-react";

function Services() {
  return (
    <section id="services" className="services">

      {/* ================= HEADER ================= */}

      <div className="services-header">

        <p className="services-tag">
          SERVICES
        </p>

        <h2>
          Everything Your
          <br />
          Project Needs
        </h2>

        <p className="services-description">
          From CAD assistance to final fabrication,
          our Digital Fabrication Laboratory supports
          every stage of your innovation journey.
        </p>

      </div>

      {/* ================= BENTO GRID ================= */}

      <div className="bento-grid">

        {/* ========= CARD 1 ========= */}

        <div className="card printing">

          <div className="icon-box">
            <Printer size={32}/>
          </div>

          <h3>3D Printing</h3>

          <p>
            High-quality FDM printing using PLA,
            PETG and TPU materials for prototypes,
            academic work and functional parts.
          </p>

        <div className="card-stat">

    <span className="number">
        150+ 
    </span>

    <span className="label">
        Projects Printed
    </span>

</div>

</div>

        {/* ========= CARD 2 ========= */}

        <div className="card cad">

          <p className="mini-title">
            CAD DESIGN
          </p>

          <h3>
            Design.
            <br />
            Refine.
            <br />
            Print.
          </h3>

        </div>

        {/* ========= CARD 3 ========= */}

        <div className="card filament">

  <div className="placeholder">

    <Printer size={70} />

    <p>Filament Image</p>

  </div>

</div>

        {/* ========= CARD 4 ========= */}

        <div className="card prototype">

          <p className="mini-title">
            RAPID PROTOTYPING
          </p>

          <h3>
            Ideas into
            <br />
            Real-world
            <br />
            Prototypes.
          </h3>

        </div>

        {/* ========= CARD 5 ========= */}

        <div className="card student">

          <div className="icon-box">
            <GraduationCap size={28}/>
          </div>

          <h3>
            Student Projects
          </h3>

          <p>
            Mini projects,
            dissertations and
            research support.
          </p>

        </div>

        {/* ========= CARD 6 ========= */}

        <div className="card object">

  <div className="placeholder">

    <Printer size={70} />

    <p>Printed Object</p>

  </div>

</div>

        {/* ========= CARD 7 ========= */}

        <div className="card workshop">

          <div className="workshop-left">

            <p className="mini-title">
              WORKSHOPS
            </p>

            <h3>
              Learn.
              <br />
              Build.
              <br />
              Innovate.
            </h3>

            <p>
              Hands-on sessions covering
              CAD, slicing, printer
              operation and fabrication.
            </p>

          </div>

          <div className="workshop-right">

            <Wrench size={80}/>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Services;