const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check user exists
    const exists = await User.findOne({ where: { email } });
    if (exists) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.json({ message: "User registered successfully", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Login
exports.login = async (req, res) => {
	try {
		const { email, password } = req.body;
		console.log("REQ BODY:", req.body);


		const user = await User.findOne({ where: { email } });
		if (!user)
		return res.status(400).json({ message: "Invalid email or password" });

		// Compare passwords
		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch)
		return res.status(400).json({ message: "Invalid email or password" });

		// Create token
		const token = jwt.sign(
			{ id: user.id, email: user.email },
			process.env.JWT_SECRET,
			{ expiresIn: "7d" }
		);

		res.json({
			message: "Login success",
			token,
			user,
		});
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

// Get Logged-in User
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
