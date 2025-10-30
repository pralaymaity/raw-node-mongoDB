import http from "http";

const hostname = "127.0.0.1";
const port = 7000;

import { router } from "./src/routes/user.js";

const server = http.createServer((req, res) => {
  router(req ,res)
});


server.listen(port, hostname, () => {
  console.log(`Server running at ${port}`);
});
