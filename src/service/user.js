const User = require("../model/user");

exports.creteUser = async (data) => {
  return User.create(data);
};

exports.getAllUser = async (page, limit, age, country, passport, language ) => {
  // console.log(language);

  let skipData = (page - 1) * limit;
  let filterData = {};

  if (age) filterData.age = { $eq: age };
  if (country) filterData.country = { $eq: country };

  if (passport) {
    if (passport === "true") {
      filterData.passport = { $eq: true };
    } else if (passport === "false") {
      filterData.passport = { $eq: false };
    }
  }

  if(country) filterData.country = {$eq : country};
  if(language) filterData.language = {$eq : language};

  // Find users who are from India AND speak English
  if(country && language){
    filterData.result = {$and : [{country : country}, {language : language}]}
  }

  const allUsersData = await User.find(filterData).skip(skipData).limit(limit);

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
