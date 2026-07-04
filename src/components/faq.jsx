import "./faq.css";

import {
  HelpCircle,
  Plus,
  ArrowRight,
} from "lucide-react";

function FAQ() {

  return (

    <section className="faq">

      {/* ================= TOP ================= */}

      <div className="faq-top">

        {/* LEFT */}

        <div className="faq-left">

          <div className="faq-pill">

            <HelpCircle size={16} />

            <span>FAQ</span>

          </div>

          <h2>

            Frequently
            <br />
            Asked
            <br />
            Questions

          </h2>

          <p>

            Everything you need to know before
            submitting your model for printing.
            If you still can't find your answer,
            we're always happy to help.

          </p>

        </div>

        {/* RIGHT */}

        <div className="faq-right">

          <div className="faq-item">

            <button className="faq-question">

              <span>

                What file formats are accepted?

              </span>

              <Plus size={20} />

            </button>

          </div>

          <div className="faq-item">

            <button className="faq-question">

              <span>

                How long does a print usually take?

              </span>

              <Plus size={20} />

            </button>

          </div>

          <div className="faq-item">

            <button className="faq-question">

              <span>

                What materials are available?

              </span>

              <Plus size={20} />

            </button>

          </div>

          <div className="faq-item">

            <button className="faq-question">

              <span>

                Do you provide CAD assistance?

              </span>

              <Plus size={20} />

            </button>

          </div>

          <div className="faq-item">

            <button className="faq-question">

              <span>

                Can anyone use the Digital Fabrication Laboratory?

              </span>

              <Plus size={20} />

            </button>

          </div>

          <div className="faq-item">

            <button className="faq-question">

              <span>

                How much does 3D printing cost?

              </span>

              <Plus size={20} />

            </button>

          </div>

        </div>

      </div>

      {/* ================= CONTACT ================= */}

      <div className="faq-contact">

        <h3>

          Still have questions?

        </h3>

        <p>

          Can't find the answer you're looking for?
          Reach out to our team and we'll be happy
          to guide you through your project.

        </p>

        <button className="contact-btn">

          Contact Us

          <ArrowRight size={18} />

        </button>

      </div>

    </section>

  );

}

export default FAQ;