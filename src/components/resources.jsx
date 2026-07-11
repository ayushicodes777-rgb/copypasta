import "./resources.css";

import {
  BookOpen,
  ArrowRight,
  Layers3,
  Box,
  GraduationCap,
} from "lucide-react";

function Resources() {
  return (
    <section id="resources" className="resources">

      {/* ================= HEADER ================= */}

      <div className="resources-header">

        <div className="resources-pill">

          <BookOpen size={16} />

          <span>Knowledge Hub</span>

        </div>

        <h2>

          Learn Before
          <br />
          You Build

        </h2>

        <p>

          Practical guides, tutorials and fabrication
          knowledge to help every student print smarter.

        </p>

      </div>

      {/* ================= FEATURED ================= */}

      <div className="featured-post">

        <div className="featured-image">

          {/* Image goes here */}

        </div>

        <div className="featured-content">

          <span className="category">
            Beginner Guide
          </span>

          <h3>

            Preparing Your
            First 3D Print

          </h3>

          <p>

            Learn everything from preparing
            your CAD model to exporting STL,
            slicing and avoiding common
            printing mistakes.

          </p>

          <div className="article-meta">

            <span>5 min read</span>

            <ArrowRight size={18} />

          </div>

        </div>

      </div>

      {/* ================= ARTICLES ================= */}

      <div className="articles-grid">

        {/* Article 1 */}

        <article className="article">

          <div className="article-image">

            {/* Image */}

          </div>

          <div className="article-content">

            <span className="article-label">

              <Layers3 size={15} />

              Materials

            </span>

            <h4>

              PLA vs PETG

            </h4>

            <p>

              Understand which filament
              is best for your project.

            </p>

            <div className="article-footer">

              <span>3 min read</span>

              <ArrowRight size={16} />

            </div>

          </div>

        </article>

        {/* Article 2 */}

        <article className="article">

          <div className="article-image">

          </div>

          <div className="article-content">

            <span className="article-label">

              <Box size={15} />

              Checklist

            </span>

            <h4>

              STL File
              Checklist

            </h4>

            <p>

              Everything to verify before
              uploading your model.

            </p>

            <div className="article-footer">

              <span>4 min read</span>

              <ArrowRight size={16} />

            </div>

          </div>

        </article>

        {/* Article 3 */}

        <article className="article">

          <div className="article-image">

          </div>

          <div className="article-content">

            <span className="article-label">

              <GraduationCap size={15} />

              Student Guide

            </span>

            <h4>

              Design Rules
              for Printing

            </h4>

            <p>

              Learn wall thickness,
              supports and tolerances.

            </p>

            <div className="article-footer">

              <span>6 min read</span>

              <ArrowRight size={16} />

            </div>

          </div>

        </article>

      </div>

    </section>
  );
}

export default Resources;