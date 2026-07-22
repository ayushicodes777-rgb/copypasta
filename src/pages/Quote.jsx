import "../styles/Quote.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  UploadCloud,
  Package,
  Clock3,
  Weight,
  Layers3,
  IndianRupee
} from "lucide-react";

function Quote() {
const [selectedFile, setSelectedFile] = useState(null);

const [dragging, setDragging] = useState(false);

const [uploadError, setUploadError] = useState("");

const allowedExtensions = [
  "stl",
  "obj",
  "3mf",
  "step",
  "stp"
];

const validateFile = (file) => {

  const extension = file.name
    .split(".")
    .pop()
    .toLowerCase();

  if (!allowedExtensions.includes(extension)) {

    setUploadError(
      "Unsupported file type. Please upload STL, OBJ, STEP or 3MF."
    );

    setSelectedFile(null);

    return false;
  }

  setUploadError("");

  setSelectedFile(file);

  return true;
};
  return (
    <div className="quote-page">

      {/* Header */}

      <div className="quote-header">

        <Link to="/" className="back-btn">
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <h1>Instant Quote</h1>

        <p>
          Upload your 3D model, configure your print settings and
          receive an instant quotation.
        </p>

      </div>

      {/* Upload */}

      <div
  className={`upload-box ${dragging ? "dragging" : ""}`}

  onDragOver={(e) => {
    e.preventDefault();
    setDragging(true);
  }}

  onDragLeave={() => setDragging(false)}

  onDrop={(e) => {
    e.preventDefault();
    setDragging(false);

    const file = e.dataTransfer.files[0];

    if (file) {
      setSelectedFile(file);
    }
  }}

  onClick={() =>
    document.getElementById("fileInput").click()
  }
>

  <input
    id="fileInput"
    type="file"
    accept=".stl,.obj,.step,.3mf"
    hidden

    onChange={(e) => {
      const file = e.target.files[0];

      if (file) {
        setSelectedFile(file);
      }
    }}
  />

  {!selectedFile ? (
    <>

      <UploadCloud
        size={52}
        color="#d32f2f"
      />

      <h3>Drag & Drop Files</h3>

      <p>or click to browse your computer</p>

    </>
  ) : (
    <>

      <UploadCloud
        size={52}
        color="#2e7d32"
      />

      <h3>{selectedFile.name}</h3>

      <p>

        {(selectedFile.size / 1024 / 1024).toFixed(2)} MB

      </p>

      <span>

        Uploaded Successfully

      </span>

    </>
  )}

</div>

      {/* Configuration */}

      <section className="quote-config-card">

        <div className="section-title">
          <h2>Printing Configuration</h2>
          <p>
            These settings can be changed before generating
            the final quotation.
          </p>
        </div>

        <div className="config-grid">

          <div className="config-item">
            <label>Material</label>

            <select>
              <option>PLA</option>
              <option>ABS</option>
              <option>PETG</option>
              <option>TPU</option>
            </select>
          </div>

          <div className="config-item">
            <label>Layer Height</label>

            <select>
              <option>0.12 mm</option>
              <option selected>0.20 mm</option>
              <option>0.28 mm</option>
            </select>
          </div>

          <div className="config-item">
            <label>Infill</label>

            <select>
              <option>10%</option>
              <option selected>20%</option>
              <option>40%</option>
              <option>60%</option>
              <option>100%</option>
            </select>
          </div>

          <div className="config-item">
            <label>Supports</label>

            <select>
              <option>Auto</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          <div className="config-item">
            <label>Color</label>

            <select>
              <option>White</option>
              <option>Black</option>
              <option>Red</option>
              <option>Blue</option>
            </select>
          </div>

          <div className="config-item">

            <label>Quantity</label>

            <div className="quantity-box">

              <button>-</button>

              <span>1</span>

              <button>+</button>

            </div>

          </div>

          <div className="config-item">

            <label>Scale (%)</label>

            <input
              type="number"
              defaultValue="100"
            />

          </div>

          <div className="config-item">

            <label>Finish</label>

            <select>
              <option>Standard</option>
              <option>Fine</option>
              <option>Draft</option>
            </select>

          </div>

        </div>

      </section>

      {/* Summary */}

      <section className="quote-summary-card">

        <div className="section-title">
          <h2>Print Summary</h2>
          <p>
            Auto-generated after uploading your model.
          </p>
        </div>

        <div className="summary-grid">

          <div className="summary-box">

            <IndianRupee size={22} />

            <h4>Estimated Cost</h4>

            <h2>₹0.00</h2>

          </div>

          <div className="summary-box">

            <Package size={22} />

            <h4>Material</h4>

            <p>PLA</p>

          </div>

          <div className="summary-box">

            <Weight size={22} />

            <h4>Weight</h4>

            <p>-- g</p>

          </div>

          <div className="summary-box">

            <Layers3 size={22} />

            <h4>Volume</h4>

            <p>-- cm³</p>

          </div>

          <div className="summary-box">

            <Clock3 size={22} />

            <h4>Print Time</h4>

            <p>--</p>

          </div>

        </div>

        <button className="cart-btn">

          Add to Cart

        </button>

      </section>

    </div>
  );
}

export default Quote;