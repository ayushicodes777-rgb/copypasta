import "./howitworks.css";

function HowItWorks() {
  return (
    <section className="workflow">

      {/* ================= HEADER ================= */}

      <div className="workflow-header">

        <p className="workflow-tag">
          HOW IT WORKS
        </p>

        <h2>
          Printing 
          <br />
          Made Simple
        </h2>

        <p className="workflow-description">
          Upload your design, receive a quotation, get it reviewed by our lab,
          watch it come to life and collect your finished 3D print.
        </p>

      </div>

      {/* ================= PROCESS ================= */}

      <div className="workflow-process">

        <div className="workflow-line"></div>

        {/* STEP 1 */}

        <div className="workflow-step">

          <div className="workflow-number">
            01
          </div>

          <div className="workflow-circle"></div>

          <div className="workflow-card tall">

            <h3>Upload</h3>

            <p>
              Upload STL, OBJ, STEP or 3MF files.
            </p>

          </div>

        </div>

        {/* STEP 2 */}

        <div className="workflow-step">

          <div className="workflow-number">
            02
          </div>

          <div className="workflow-circle"></div>

          <div className="workflow-card">

            <h3>Get Quote</h3>

            <p>
              Receive instant pricing and choose materials.
            </p>

          </div>

        </div>

        {/* STEP 3 */}

        <div className="workflow-step">

          <div className="workflow-number">
            03
          </div>

          <div className="workflow-circle"></div>

          <div className="workflow-card short">

            <h3>Lab Review</h3>

            <p>
              Engineers verify your design before printing.
            </p>

          </div>

        </div>

        {/* STEP 4 */}

        <div className="workflow-step">

          <div className="workflow-number">
            04
          </div>

          <div className="workflow-circle"></div>

          <div className="workflow-card">

            <h3>Print</h3>

            <p>
              Your model is professionally fabricated.
            </p>

          </div>

        </div>

        {/* STEP 5 */}

        <div className="workflow-step">

          <div className="workflow-number">
            05
          </div>

          <div className="workflow-circle"></div>

          <div className="workflow-card tall">

            <h3>Collect</h3>

            <p>
              Pick up your finished print from the lab.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;