import { useEffect, useState } from "react";
import api from "../api";
import FeedbackForm from "../components/FeedbackForm";
import FeedbackTable from "../components/FeedbackTable";
import StatCard from "../components/StatCard";
import { useAuth } from "../context/AuthContext";

const StudentDashboard = () => {
  const { user } = useAuth();
  const [feedback, setFeedback] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const loadMyFeedback = async () => {
    try {
      const response = await api.get("/feedback/my-feedback");
      setFeedback(response.data.feedback);
    } catch (error) {
      setMessage(error.response?.data?.message || "Unable to load your feedback.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMyFeedback();
  }, []);

  const handleSubmitFeedback = async (formData) => {
    setSubmitting(true);
    setMessage("");

    try {
      const response = await api.post("/feedback", formData);
      setFeedback((current) => [response.data.feedback, ...current]);
      setMessage("Feedback submitted successfully.");
      return true;
    } catch (error) {
      setMessage(error.response?.data?.message || "Unable to submit feedback.");
      return false;
    } finally {
      setSubmitting(false);
    }
  };

  const averageRating =
    feedback.length > 0 ? (feedback.reduce((total, item) => total + item.rating, 0) / feedback.length).toFixed(1) : "0.0";

  return (
    <main className="dashboard-page">
      <section className="dashboard-header">
        <div>
          <span className="eyebrow">Student Dashboard</span>
          <h1>Hello, {user?.name}</h1>
          <p>Submit faculty feedback and track the entries you have already sent.</p>
        </div>
      </section>

      {message && <div className="alert success-alert">{message}</div>}

      <section className="stats-grid">
        <StatCard label="Department" value={user?.department || "N/A"} />
        <StatCard label="Feedback Submitted" value={feedback.length} accent="green" />
        <StatCard label="Average Rating Given" value={averageRating} accent="blue" />
      </section>

      <section className="dashboard-layout">
        <FeedbackForm onSubmit={handleSubmitFeedback} submitting={submitting} />
        {loading ? <div className="panel">Loading your feedback...</div> : <FeedbackTable feedback={feedback} />}
      </section>
    </main>
  );
};

export default StudentDashboard;
