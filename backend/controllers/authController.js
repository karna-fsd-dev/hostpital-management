const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const userExists = await User.findOne({ email });
    console.log(userExists);
    if (userExists) {
      return res.status(400).json({ message: "user already exit" });
    }
    const hashedpassword = await bcrypt.hash(password, 10);
    const userSignup = await User.create({
      name,
      email,
      password: hashedpassword,
      role,
    });
    res.status(201).json(userSignup);
  } catch (error) {
    res.status(500).json(error);
  }
};
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const login = await User.findOne({ email });
    if (!login) {
      return res.status(400).json({ message: "user not found" });
    }
    const isMatch = await bcrypt.compare(password, login.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }
    const token = jwt.sign(
      { id: login._id, role: login.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );
    res.json({ token, user: login });
  } catch (error) {
    return res.status(500).json(error);
  }
};
