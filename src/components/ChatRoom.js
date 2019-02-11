import React, { Component } from "react";
import List from "@material-ui/core/List";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import ChatItem from "./ChatItem";
import NameModal from "./NameModal";
import UsersPopper from "./UsersPopper";
import faker from "faker";

const styles = () => ({
  div_center: {
    margin: "0px",
    marginRight: "auto",
    marginLeft: "auto",
    width: "404px",
    height: "100%",
    minHeight: "100%"
  },
  list: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "grey",
    position: "relative",
    overflow: "auto",
    height: "75%",
    padding: "0",
    margin: "0",
    border: "2px solid"
  },
  textField: {
    width: "100%",
    maxWidth: 404,
    height: "20%",
    padding: "0px",
    marginTop: "10px"
  },
  users: {
    height: "5%",
    padding: "0px",
    margin: "0px"
  }
});

class ChatRoom extends Component {
  state = {
    chatHistory: [],
    input: "",
    userName: "",
    users: [],
    avatar: faker.internet.avatar()
  };

  panel = React.createRef();

  componentDidMount() {
    this.props.messageEvent(this.handleMessage);
    this.props.userCount(this.handleUsers);
  }
  componentDidUpdate() {
    this.scrollChatToBottom();
  }

  handleMessage = entry => {
    this.setState({ chatHistory: this.state.chatHistory.concat(entry) });
  };

  handleUsers = entry => {
    this.setState({ users: entry });
  };

  onInputChange = event => {
    this.setState({ input: event.target.value });
  };

  onSendMessage = () => {
    if (!this.state.input) {
      return;
    }

    this.props.sendMessage({
      message: this.state.input,
      avatar: this.state.avatar
    });
    this.addChatMessage({
      username: this.state.userName,
      message: this.state.input,
      avatar: this.state.avatar
    });
    this.setState({ input: "" });
  };

  addChatMessage = entry => {
    this.setState({
      chatHistory: this.state.chatHistory.concat(entry)
    });
  };

  setUserName = userName => {
    this.setState({ userName });
  };

  scrollChatToBottom = () => {
    const panel = document.getElementById("scroll");

    panel.scrollTop = panel.scrollHeight;
  };

  renderedList() {
    let i = 0;
    return this.state.chatHistory.map(entry => {
      i++;
      return <ChatItem key={i} entry={entry} />;
    });
  }

  renderedChatBox() {
    const { classes } = this.props;

    return (
      <TextField
        className={classes.textField}
        autoComplete="off"
        label="Type a message"
        multiline
        rows="4"
        variant="outlined"
        onChange={this.onInputChange}
        value={this.state.input}
        onKeyPress={e =>
          e.key === "Enter" ? (e.preventDefault(), this.onSendMessage()) : null
        }
      />
    );
  }

  render() {
    const { classes, addUser } = this.props;

    return (
      <div className={classes.div_center}>
        <List id="scroll" className={classes.list}>
          {this.renderedList()}
        </List>
        <form>{this.renderedChatBox()}</form>
        <div className={classes.users}>
          <UsersPopper users={this.state.users} />
          <NameModal addUser={addUser} setUser={this.setUserName} />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ChatRoom);
