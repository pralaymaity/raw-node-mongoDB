const adminService = require("../service/adminService");

exports.cerateUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    await adminService.createUser(username, email, password);

    res.status(201).json({ message: "User created" });
  } catch (err) {
    res.status(500).json({ message: "failed t create user", err });
  }
};

exports.adminlogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const token = await adminService.adminlogin(email, password);

    res.status(200).json({ message: token });
  } catch (err) {
    console.log("failed to login");

    res.status(500).json({ message: "internal server erro", err });
  }
};
