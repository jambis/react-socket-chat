import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

class NameModal extends Component {
  state = { input: "", openModal: true };

  handleClose = () => {
    this.setState({ openModal: false });
  };

  addUser = () => {
    this.props.addUser(this.state.input);
    this.props.setUser(this.state.input);
    this.handleClose();
  };

  onInputChange = event => {
    this.setState({ input: event.target.value });
  };

  render() {
    return (
      <div>
        <Dialog
          open={this.state.openModal}
          disableEscapeKeyDown={true}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Welcome</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To participate in this chat please enter a nickname.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Enter a nickname"
              type="name"
              value={this.state.input}
              onChange={this.onInputChange}
              fullWidth
              onKeyPress={e =>
                e.key === "Enter" ? (e.preventDefault(), this.addUser()) : null
              }
            />
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default NameModal;
