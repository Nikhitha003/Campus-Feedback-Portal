const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    subject: {
      type: String,
      required: [true, "Subject is required"],
      trim: true
    },
    facultyName: {
      type: String,
      required: [true, "Faculty name is required"],
      trim: true
    },
    rating: {
      type: Number,
      required: [true, "Rating is required"],
      min: 1,
      max: 5
    },
    comment: {
      type: String,
      required: [true, "Comment is required"],
      trim: true,
      maxlength: 1000
    }
  },
  {
    timestamps: true
  }
);

feedbackSchema.index({ studentId: 1 });
feedbackSchema.index({ subject: 1 });

module.exports = mongoose.model("Feedback", feedbackSchema);
