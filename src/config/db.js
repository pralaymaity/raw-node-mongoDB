import { MongoClient } from "mongodb";

const url =
  "mongodb+srv://pralaymaity283_db_user:0QVz0dumBBKNsWce@testdb.vttjb2f.mongodb.net/";

const dbName = "practiceDB";

let client;
let db;

// Connect to MongoDB (only once)
export async function connectDB() {
  if (!client) {
    client = new MongoClient(url);
    await client.connect();
    console.log("✅ Connected to MongoDB Atlas");
    db = client.db(dbName) 
  }
  return db
}

export const getUserCollection = async () => {
  const db = await connectDB();
  return db.collection("users");
};
