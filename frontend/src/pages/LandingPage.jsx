import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <main className="landing-page">
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="eyebrow hero-eyebrow">Campus Feedback Portal</span>
          <h1>Your campus voice deserves a better place to be heard.</h1>
          <h3>
            Share honest feedback on subjects and faculty, while admins review every response through a secure,
            role-based dashboard.
          </h3>

          <div className="hero-actions">
            <Link to="/register" className="primary-button">
              Create Student Account
            </Link>
            <Link to="/login" className="primary-button">
              Login to Portal
            </Link>
          </div>

          <div className="hero-highlights">
            <article>
              <strong>Student Login</strong>
              <span>Submit feedback and ratings topic-wise.</span>
            </article>
      
          </div>
        </div>
      </section>

      <section className="feature-strip">
        <article className="panel feature-card">
          <h3>Role-Based Access</h3>
          <p>Students submit feedback. Admins review all records from a separate dashboard.</p>
        </article>
        <article className="panel feature-card">
          <h3>Faculty & Subject Feedback</h3>
          <p>Each submission contains a subject name, faculty name, rating, and detailed comment.</p>
        </article>

      </section>

      <section id="about" className="about-section panel">
        <div className="about-copy">
          <span className="eyebrow">About Us</span>
          <h2>A simple and secure portal for meaningful campus feedback.</h2>
          <p>
            CampusVoice helps students share their feedback about subjects and faculty members in a clean digital
            format. The portal is designed to make student opinions easier to collect, organize, and review.
          </p>
          <p>
            Students can submit ratings and written comments after login, while admins can review all submitted
            feedback from one dashboard without changing the original student response.
          </p>
        </div>

        <div className="about-points">
          <article>
            <strong>Student Friendly</strong>
            <span>Easy form-based feedback submission with subject, faculty, rating, and comment.</span>
          </article>
          <article>
            <strong>Admin Overview</strong>
            <span>All feedback appears in one place so the institution can understand student opinion clearly.</span>
          </article>
          <article>
            <strong>Useful for Colleges</strong>
            <span>Supports better communication, better teaching insights, and a stronger learning environment.</span>
          </article>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
