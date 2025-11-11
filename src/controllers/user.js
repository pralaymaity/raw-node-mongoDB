const userService = require("../service/user");

exports.createUser = async (req, res) => {
  try {
    let data = req.body;

    await userService.creteUser(data);
    res.status(201).json({ message: "User Created" });
  } catch (err) {
    res.status(500).json("internal server problem");
    console.log("failed to create user", err.message);
  }
};

exports.getAllUsers = async (req, res) => {
  const { page = 1, limit = 3, age, country, passport, language } = req.query;

  // console.log(passport);

  try {
    const allData = await userService.getAllUser(
      Number(page),
      Number(limit),
      Number(age),
      country,
      passport,
      language
    );
    //console.log(allData);
    res.status(200).json({
      totalUsers: allData.totalUsersCount,
      pageNo: Number(page),
      data: allData.allUsersData,
    });
    
  } catch (err) {
    console.log("failed to fetch user", err);
    res.status(500).json({ message: "failed to fetch data" });
  }
};

exports.getSingleUser = async (req, res) => {
  try {
    const id = req.params.id;
   // console.log(id);

    const singleDoc = await userService.getSingleUser(id);
    res.status(200).json(singleDoc);
  } catch (err) {
    console.log("failed to fetch single user", err);
    res.status(500).json({ message: "failed to fetch single user" });
  }
};

exports.updateSingleUser = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    //console.log(data);

    await userService.updateSingleUser(id, data);
    res.status(201).json({ message: "updated the user" });
  } catch (err) {
    res.status(500).json("failed to update user");
    console.log("failed to update user", err);
  }
};

exports.updateAllUser = async (req, res) => {
  try {
    // const id = req.params.id;
    // const data = req.body;
    //console.log(data);

    const age = req.query.age;

    await userService.updateAllUser(Number(age));
    res.status(201).json({ message: "updated all the user" });
  } catch (err) {
    res.status(500).json("failed to update all user");
    console.log("failed to update all user", err);
  }
};

exports.deleteSingleUser = async (req, res) => {
  try {
    const id = req.params.id;

    await userService.deleteSingleUser(id);
    res.status(201).json({ message: "deleted the user" });
  } catch (err) {
    res.status(500).json("failed to delete user");
    console.log("failed to delete user", err);
  }
};

exports.deleteAllUser = async (req, res) => {
  try {
    await userService.deleteAllUser();
    res.status(201).json({ message: "deleted all the user" });
  } catch (err) {
    res.status(500).json("failed to delete user");
    console.log("failed to delete user", err);
  }
};
