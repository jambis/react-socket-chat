const io = require("socket.io-client");

export default function() {
  //use io.connect(http://localhost:3001) for local testing
  const socket = io.connect();

  function message(data) {
    socket.emit("message", data);
  }

  function messageEvent(handleMessage) {
    socket.on("message", handleMessage);
  }

  function userCount(handleUsers) {
    socket.on("users", handleUsers);
  }

  function addUser(data) {
    socket.emit("add user", data);
  }

  return {
    message,
    messageEvent,
    userCount,
    addUser
  };
}
