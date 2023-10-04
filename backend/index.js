const WebSocket = require("ws");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:5173" }));

const mongoURL = "mongodb://127.0.0.1:27017/chatroom";
// const server = new WebSocket.Server({ port: 8080 });
const Useraccount = require("./routes/userRoutes");
const Userchat = require("./routes/userdata");

app.use("/user", Useraccount);
app.use("/chat", Userchat);

mongoose
  .connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
app.use(bodyParser.json());

// server.on("connection", (socket) => {
//   console.log("client is connect!\n");

//   socket.on("message", (message) => {
//     console.log("server receive you massage " + message);
//     socket.send("sever receive message " + message);
//   });

//   socket.on("close", () => {
//     console.log("client is disconnected!");
//   });
// });

app.listen(8080, () => {
  console.log("use connected");
});
