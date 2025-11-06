const User = require("../model/user");

exports.creteUser = async (data) => {
  return User.create(data);
};

exports.getAllUser = async (page, limit, age) => {
  let skipData = (page - 1) * limit;
  let filterAge = {};

  if (age) {
    filterAge.age = { $gt: age };
  }
  const allUsersData = await User.find(filterAge).skip(skipData).limit(limit)
        
  const totalUsersCount = await User.countDocuments();

  return { allUsersData, totalUsersCount };
};

exports.getSingleUser = async (id) => {
  return User.findOne({ _id: id });
};

exports.updateSingleUser = async (id, data) => {
  return User.updateOne({ _id: id }, { $set: { data } });
};

exports.updateAllUser = async (age) => {
  console.log(age);

  if (age) {
    return User.updateMany({}, { $inc: { age: age } });
  }
};

exports.deleteSingleUser = async (id) => {
  return User.deleteOne({ _id: id });
};

exports.deleteAllUser = async () => {
  return User.deleteMany();
};
