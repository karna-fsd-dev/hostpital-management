const express = require("express");
const router = express.Router();

const auth = require("../middleware/roleMiddleware");
const { isAdmin } = require("../middleware/authMiddleware");

const adminController = require("../controllers/adminController");

// 🚨 IMPORTANT: no destructuring (to avoid undefined issue)

router.post("/create-doctor", auth, isAdmin, adminController.createDoctor);
router.get("/appointments", auth, isAdmin, adminController.getAllAppointments);

module.exports = router;