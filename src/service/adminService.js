const admin = require("../model/admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.createUser = async (username, email, password, imagePath) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const logUser = await admin.create({
    username,
    email,
    image: imagePath,
    password: hashedPassword,
  });

  return logUser;
};

exports.adminlogin = async (email, password) => {
  //console.log(email , password);

  const user = await admin.findOne({ email });

  if (!user) throw new Error("User not found");

  //console.log(user);

  if (!user) {
    throw new Error("email already taken");
  }

  let passwordMatch = await bcrypt.compare(password, user.password);

  //console.log(passwordMatch);

  if (!passwordMatch) {
    throw new Error("password not match");
  }

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
      role: user.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: "18h" }
  );

  return token;
};

exports.updateSingleUser = (id, data) => {
  console.log(data);

  return admin.updateOne({ _id: id }, { $set: data });
};
