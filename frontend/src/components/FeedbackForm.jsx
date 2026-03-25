import { useState } from "react";

const initialForm = {
  subject: "",
  facultyName: "",
  rating: 5,
  comment: ""
};

const FeedbackForm = ({ onSubmit, submitting }) => {
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const success = await onSubmit(formData);

    if (success) {
      setFormData(initialForm);
    }
  };

  return (
    <form className="panel form-panel" onSubmit={handleSubmit}>
      <div className="panel-heading">
        <h3>Share Your Feedback</h3>
        <p>Rate the subject or faculty and add a meaningful student comment.</p>
      </div>

      <div className="form-grid">
        <label>
          Subject
          <input
            type="text"
            name="subject"
            placeholder="Example: Data Structures"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Faculty Name
          <input
            type="text"
            name="facultyName"
            placeholder="Example: Dr. R. Sharma"
            value={formData.facultyName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Rating
          <select name="rating" value={formData.rating} onChange={handleChange} required>
            <option value="5">5 - Excellent</option>
            <option value="4">4 - Good</option>
            <option value="3">3 - Average</option>
            <option value="2">2 - Needs improvement</option>
            <option value="1">1 - Poor</option>
          </select>
        </label>
      </div>

      <label>
        Comment
        <textarea
          name="comment"
          rows="5"
          placeholder="Write your feedback here..."
          value={formData.comment}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit" className="primary-button" disabled={submitting}>
        {submitting ? "Submitting..." : "Submit Feedback"}
      </button>
    </form>
  );
};

export default FeedbackForm;
