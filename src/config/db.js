
const mongoose = require("mongoose");

const uri =
  "mongodb+srv://pralaymaity283_db_user:0QVz0dumBBKNsWce@testdb.vttjb2f.mongodb.net/practiceDB";
//const dbName = "practiceDB"

const connectDB =async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✔ Database connected ");
    
  } catch (err) {
    console.log("Database failed to connect", err);
  }
};

module.exports = connectDB;
