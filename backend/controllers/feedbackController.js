const mongoose = require("mongoose");
const Feedback = require("../models/Feedback");

const createFeedback = async (req, res) => {
  try {
    const { subject, facultyName, rating, comment } = req.body;

    if (!subject || !facultyName || !rating || !comment) {
      return res.status(400).json({ message: "All feedback fields are required." });
    }

    const feedback = await Feedback.create({
      studentId: req.user._id,
      subject,
      facultyName,
      rating: Number(rating),
      comment
    });

    const populatedFeedback = await feedback.populate("studentId", "name email department");

    return res.status(201).json({
      message: "Feedback submitted successfully.",
      feedback: populatedFeedback
    });
  } catch (error) {
    return res.status(500).json({ message: "Unable to submit feedback.", error: error.message });
  }
};

const getMyFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.find({ studentId: req.user._id })
      .populate("studentId", "name email department")
      .sort({ createdAt: -1 });

    return res.status(200).json({ feedback });
  } catch (error) {
    return res.status(500).json({ message: "Unable to fetch your feedback.", error: error.message });
  }
};

const getAllFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.find()
      .populate("studentId", "name email department")
      .sort({ createdAt: -1 });

    const stats = await Feedback.aggregate([
      {
        $group: {
          _id: null,
          totalFeedback: { $sum: 1 },
          averageRating: { $avg: "$rating" }
        }
      }
    ]);

    const subjectStats = await Feedback.aggregate([
      {
        $group: {
          _id: "$subject",
          total: { $sum: 1 },
          averageRating: { $avg: "$rating" }
        }
      },
      { $sort: { total: -1, _id: 1 } }
    ]);

    return res.status(200).json({
      feedback,
      stats: {
        totalFeedback: stats[0]?.totalFeedback || 0,
        averageRating: Number((stats[0]?.averageRating || 0).toFixed(1)),
        subjectStats
      }
    });
  } catch (error) {
    return res.status(500).json({ message: "Unable to fetch feedback.", error: error.message });
  }
};

module.exports = {
  createFeedback,
  getMyFeedback,
  getAllFeedback
};
