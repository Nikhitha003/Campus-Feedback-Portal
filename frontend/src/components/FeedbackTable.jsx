const FeedbackTable = ({ feedback, adminView = false }) => {
  if (!feedback.length) {
    return (
      <section className="panel">
        <div className="empty-state">
          <h3>No feedback available</h3>
          <p>{adminView ? "Students have not submitted any feedback yet." : "Your submitted feedback will appear here."}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="panel">
      <div className="panel-heading">
        <h3>{adminView ? "All Student Feedback" : "Your Submitted Feedback"}</h3>
        <p>{adminView ? "Review every student response in one place." : "Track the feedback you have already submitted."}</p>
      </div>

      <div className="table-wrap">
        <table className="feedback-table">
          <thead>
            <tr>
              {adminView && <th>Student</th>}
              {adminView && <th>Department</th>}
              <th>Subject</th>
              <th>Faculty</th>
              <th>Rating</th>
              <th>Comment</th>
              <th>Submitted</th>
            </tr>
          </thead>
          <tbody>
            {feedback.map((item) => (
              <tr key={item._id}>
                {adminView && <td>{item.studentId?.name || "Unknown"}</td>}
                {adminView && <td>{item.studentId?.department || "N/A"}</td>}
                <td>{item.subject}</td>
                <td>{item.facultyName}</td>
                <td>{item.rating}/5</td>
                <td className="comment-cell">{item.comment}</td>
                <td>{new Date(item.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default FeedbackTable;
