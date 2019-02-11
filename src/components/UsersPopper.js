import React, { Component } from "react";
import People from "@material-ui/icons/People";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  typography: {
    margin: "10px"
  },
  span: {
    cursor: "pointer",
    fontSize: "20px"
  },
  people: {
    position: "relative",
    top: "5px",
    fontSize: "26px"
  }
});

class UsersPopper extends Component {
  state = { anchorEl: null };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  renderUsers = () => {
    const { users, classes } = this.props;
    let i = 0;

    return users.map(user => {
      i++;
      return (
        <Typography key={i} className={classes.typography}>
          {user}
        </Typography>
      );
    });
  };

  render() {
    const { anchorEl } = this.state;
    const { users, classes } = this.props;
    const open = Boolean(anchorEl);

    return (
      <div>
        <span className={classes.span} onClick={this.handleClick}>
          {users.length}
          <People className={classes.people} />
        </span>

        <Popover
          open={open}
          onClose={this.handleClose}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left"
          }}
          transitionDuration={{ enter: 500, exit: 300 }}
        >
          <Typography className={classes.typography}>
            Users Connected:
          </Typography>
          {this.renderUsers()}
        </Popover>
      </div>
    );
  }
}

export default withStyles(styles)(UsersPopper);
