import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="auth-page">
      <section className="auth-card panel">
        <span className="eyebrow">404</span>
        <h2>Page not found</h2>
        <p>The page you are looking for does not exist.</p>
        <Link to="/" className="primary-button">
          Back to Home
        </Link>
      </section>
    </main>
  );
};

export default NotFound;
