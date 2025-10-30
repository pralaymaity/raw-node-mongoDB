import { getUserCollection } from "../config/db.js";
import { ObjectId } from "mongodb";

export const userData = async (req, res) => {
  const body = new Promise((resolve, reject) => {
    let store = "";

    req.on("data", (chunk) => {
      store += chunk;
    });

    req.on("end", () => {
      resolve(JSON.parse(store || {}));
    });
  });

  return body;
};

export const createUser = async (req, res) => {
  const body = await userData(req);
  const collection = await getUserCollection();
  collection.insertOne(body);
  res.writeHead(200);
  res.end("User Created");
};

export const getAllUser = async (req, res) => {
  const collection = await getUserCollection();
  const users = await collection.find().toArray();
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(users));
};

export const deleteUser = async (req, res) => {
  const id = req.url.split("/")[2];

  const collection = await getUserCollection();
  await collection.deleteOne({ _id: ObjectId.createFromHexString(id) });

  res.writeHead(200);
  res.end("user is deleted");
};

export const updateUser = async (req, res) => {
  //console.log(body , "sadasdasdas");

  const id = req.url.split("/")[2];
  const body = await userData(req);
  // console.log(body, "sadasdasdas");
  const collection = await getUserCollection();

  await collection.updateOne(
    { _id: ObjectId.createFromHexString(id) },
    { $set: body }
  );

  res.writeHead(200);
  res.end("user is updated");
};

export const deleteAllUser = async (req, res) => {

  const collection = await getUserCollection()
  await collection.deleteMany()

  res.writeHead(200);
  res.end("all data is removed");
};
