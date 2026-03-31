const express = require("express");
const router = express.Router();

const auth = require("../middleware/roleMiddleware");
const doctorController = require("../controllers/doctorController");

// ✅ no destructuring (safe way)

router.get("/appointments", auth, doctorController.getDoctorAppointments);
router.post("/update-status", auth, doctorController.updateAppointmentStatus);

module.exports = router;