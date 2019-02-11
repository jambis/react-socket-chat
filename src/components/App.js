import React, { Component } from "react";
import socket from "../socket";
import ChatRoom from "./ChatRoom";
import CssBaseline from "@material-ui/core/CssBaseline";

class App extends Component {
  state = { client: socket() };

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <div
          className="App"
          style={{
            height: "100%",
            justifyContent: "center",
            margin: "0px",
            padding: "0px"
          }}
        >
          <ChatRoom
            messageEvent={this.state.client.messageEvent}
            userCount={this.state.client.userCount}
            sendMessage={this.state.client.message}
            addUser={this.state.client.addUser}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
