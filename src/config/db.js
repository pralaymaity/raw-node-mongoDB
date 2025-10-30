import { MongoClient } from "mongodb";

const url = "mongodb+srv://pralaymaity283_db_user:0QVz0dumBBKNsWce@testdb.vttjb2f.mongodb.net/";
  
const dbName = "practiceDB";

// Connect to MongoDB (only once)
export async function connectDB() {

  const client = new MongoClient(url);
  await client.connect();
  console.log("✅ Connected to MongoDB Atlas");
  return client.db(dbName);

}

export const getUserCollection = async () => {

  const db = await connectDB();
  return db.collection("users");

};
