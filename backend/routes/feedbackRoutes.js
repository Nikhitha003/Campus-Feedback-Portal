const express = require("express");
const {
  createFeedback,
  getMyFeedback,
  getAllFeedback
} = require("../controllers/feedbackController");
const { protect, authorize } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, authorize("student"), createFeedback);
router.get("/my-feedback", protect, authorize("student"), getMyFeedback);
router.get("/", protect, authorize("admin"), getAllFeedback);

module.exports = router;
