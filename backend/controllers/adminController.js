const User = require("../models/user");
const Appointment = require("../models/Appointment");

const createDoctor = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const doctor = await User.create({
            name,
            email,
            password,
            role: "doctor"
        });

        res.status(201).json(doctor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find()
            .populate("patient")
            .populate("doctor");

        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createDoctor,
    getAllAppointments
};