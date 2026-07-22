import "./faq.css";

import { useState } from "react";

import {
  HelpCircle,
  Plus,
  Minus,
  ArrowRight,
} from "lucide-react";

function FAQ() {

  const [openFAQ, setOpenFAQ] = useState(null);

const faqData = [

  {
    question: "What file formats are accepted?",
    answer:
      "We currently support STL, OBJ, STEP and 3MF files. If your file is in another format, contact the lab for assistance."
  },

  {
    question: "How long does a print usually take?",
    answer:
      "Most prints are completed within 24–48 hours depending on size, material and printer availability."
  },

  {
    question: "What materials are available?",
    answer:
      "PLA is the standard material. PETG and TPU are also available for selected projects depending on lab inventory."
  },

  {
    question: "Do you provide CAD assistance?",
    answer:
      "Yes. Our team can help students refine, repair and prepare models before printing."
  },

  {
    question: "Can anyone use the Digital Fabrication Laboratory?",
    answer:
      "The facility is primarily intended for Nagaland University students, faculty and approved research projects."
  },

  {
    question: "How much does 3D printing cost?",
    answer:
      "Pricing depends on material usage, print time and model size. You can request an instant quotation through the website."
  }

];

  return (

    <section id="faq" className="faq">

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

  {faqData.map((item, index) => (

    <div className="faq-item" key={index}>

      <button
        className="faq-question"
        onClick={() =>
          setOpenFAQ(openFAQ === index ? null : index)
        }
      >

        <span>{item.question}</span>

        {openFAQ === index ? (
          <Minus size={20} />
        ) : (
          <Plus size={20} />
        )}

      </button>

      {openFAQ === index && (

        <div className="faq-answer">

          <p>{item.answer}</p>

        </div>

      )}

    </div>

  ))}

</div>

</div>

      {/* ================= CONTACT ================= */}

      <div id="contact" className="faq-contact">

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