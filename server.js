const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

const users = [];
const PORT = process.env.PORT || 3001;

app.use(express.static("client"));

io.on("connection", socket => {
  socket.on("message", data => {
    socket.broadcast.emit("message", {
      username: socket.username,
      message: data.message,
      avatar: data.avatar
    });
  });

  socket.on("add user", data => {
    socket.username = data;
    users.push(data);
    io.emit("users", users);
  });

  socket.on("disconnect", () => {
    if (socket.username) {
      users.pop(socket.username);
      io.emit("users", users);
    }
  });
});

server.listen(PORT, () => {
  console.log("Listening to port ", PORT);
});
