const express = require("express");
const router = express.Router();

const auth = require("../middleware/roleMiddleware");
const patientController = require("../controllers/patientController");

// ✅ SAFE (no destructuring)

router.post("/book", auth, patientController.bookAppointment);
router.get("/appointments", auth, patientController.getPatientAppointments);

module.exports = router;