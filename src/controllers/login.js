const loginService = require("../service/login");

exports.signUp = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    await loginService.singUp(username, email, password);
    res.status(201).json({ message: "signup sucessfully" });
  } catch (err) {
    console.log("failed to sign Up", err);
    res.status(500).json({ message: "failed to signup" });
  }
};

exports.signIn = async (req, res) => {
  const { email, password } = req.body;
  //console.log(email);

  try {
    let token = await loginService.singIn(email, password);
    res.status(201).json(token);
  } catch (err) {
    console.log("failed to signin", err);
    res.status(500).json({ message: "failed to signIn" });
  }
};
