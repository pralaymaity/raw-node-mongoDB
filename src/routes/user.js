import http from "http";
import { createUser, deleteAllUser, deleteUser, getAllUser, updateUser } from "../controllers/user.js";

export const router = async (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/users" && method === "POST") {
    return createUser(req, res);
  }

  if (url === "/allusers" && method === "GET") {
    return getAllUser(req, res);
  }

  if (url.startsWith("/users/") && method === "DELETE") {
    return deleteUser(req, res);
  }

  if (url.startsWith("/users/") && method === "PUT") {
    return updateUser(req, res);
  }

  if (url === "/allusers" && method === "DELETE") {
    return deleteAllUser(req, res);
  }

  



  res.writeHead(404);
  res.end("no routes found");
};
