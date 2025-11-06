const Login = require("../model/login");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.singUp = async (username, email, password) => {
  const existingUser = await Login.findOne({ email });

  if (existingUser) {
    throw new Error("email already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const logIn = await Login.create({
    username,
    email,
    password: hashedPassword,
  });

  return logIn;
};

exports.singIn = async (email, password) => {
  //console.log(email);

  const loginUser = await Login.findOne({ email });

  //console.log(user);

  if (!loginUser) {
    throw new Error("email not found");
  }

  const passwordMatch = await bcrypt.compare(password, loginUser.password);
  //console.log(passwordMatch);

  if (!passwordMatch) {
    throw new Error("password does not match ");
  }

  const token = jwt.sign(
    { id: Login._id, email: Login.email },
    process.env.JWT_SECRET,
    { expiresIn: "24h" }
  );

  return token;
};
