const User = require("../model/user");

exports.creteUser = (data) => {
  return User.create(data);
};

exports.getAllUser = (age) => {
    //console.log(age);
    
  let filterByAge = {};

  if (age) {
    filterByAge.age = { $gt: age };
  }
  return User.find(filterByAge);
};

exports.getSingleUser = (id) => {
  return User.findOne({ _id: id });
};

exports.updateSingleUser = (id, data) => {
  return User.updateOne({ _id: id }, { $set: data });
};

exports.updateAllUser = () => {
  return User.updateMany(
    { country: "England" },
    { $set: { country: "India" } }
  );
};

exports.deleteSingleUser = (id) => {
  return User.deleteOne({ _id: id });
};

exports.deleteAllUser = () => {
  return User.deleteMany();
};
