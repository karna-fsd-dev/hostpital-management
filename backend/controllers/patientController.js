const Appointment = require("../models/Appointment");

// Book appointment
const bookAppointment = async (req, res) => {
    try {
        const { doctor, date } = req.body;

        const appointment = await Appointment.create({
            patient: req.user.id,
            doctor,
            date
        });

        res.status(201).json(appointment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get patient appointments
const getPatientAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find({
            patient: req.user.id
        }).populate("doctor");

        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    bookAppointment,
    getPatientAppointments
};