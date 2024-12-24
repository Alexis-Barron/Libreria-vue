
const jsonServer = require("json-server");
const path = require("path");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "../backend/db.json"));
const middlewares = jsonServer.defaults();


server.use(middlewares);
server.use(router);

module.exports.handler = server.listen(3000, () => {
  console.log("JSON Server is running");
});
