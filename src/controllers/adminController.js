const adminService = require("../service/adminService");

exports.cerateUser = async (req, res) => {
  //console.log(req.file);

  const { username, email, password } = req.body;
  const imagePath = req.file ? req.file.path : null;
  console.log(imagePath);

  try {
    await adminService.createUser(username, email, password, imagePath);

    res.status(201).json({ message: "User created" });
  } catch (err) {
    res.status(500).json({ message: "failed to create user", err });
    console.log("internal problem", err);
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

exports.updateSingleUser = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
     const imagePath = req.file ? req.file.path : null;
     //console.log(imagePath);
     
    if (imagePath) {
      data.image = imagePath;
    }
    //console.log(data);


    await adminService.updateSingleUser(id, data);
    res.status(201).json({ message: "updated the user" });
  } catch (err) {
    res.status(500).json("failed to update user");
    console.log("failed to update user", err);
  }
};
