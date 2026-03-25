import { useEffect, useState } from "react";
import api from "../api";
import FeedbackTable from "../components/FeedbackTable";
import StatCard from "../components/StatCard";

const AdminDashboard = () => {
  const [feedback, setFeedback] = useState([]);
  const [stats, setStats] = useState({
    totalFeedback: 0,
    averageRating: 0,
    subjectStats: []
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const loadFeedback = async () => {
    try {
      const response = await api.get("/feedback");
      setFeedback(response.data.feedback);
      setStats(response.data.stats);
    } catch (error) {
      setMessage(error.response?.data?.message || "Unable to load admin dashboard.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFeedback();
  }, []);

  return (
    <main className="dashboard-page">
      <section className="dashboard-header">
        <div>
          <span className="eyebrow">Admin Dashboard</span>
          <h1>Feedback Control Center</h1>
          <p>Review all student messages, update records if needed, and manage the portal data.</p>
        </div>
      </section>

      {message && <div className="alert success-alert">{message}</div>}

      <section className="stats-grid">
        <StatCard label="Total Feedback" value={stats.totalFeedback} />
        <StatCard label="Average Rating" value={stats.averageRating || 0} accent="blue" />
        <StatCard label="Top Subject" value={stats.subjectStats?.[0]?._id || "N/A"} accent="green" />
      </section>

      <section className="dashboard-layout admin-layout">
        <section className="panel form-panel">
          <div className="panel-heading">
            <h3>Admin View</h3>
            <p>Admins can review all submitted student feedback from here.</p>
          </div>
          <div className="admin-note">
            <p>Feedback is stored as submitted by students.</p>
            <p>Admins can monitor responses, ratings, departments, and subject-wise trends.</p>
            <p>No edit or delete action is provided, so records remain original and trustworthy.</p>
          </div>
        </section>

        {loading ? (
          <div className="panel">Loading feedback...</div>
        ) : (
          <FeedbackTable feedback={feedback} adminView />
        )}
      </section>
    </main>
  );
};

export default AdminDashboard;
