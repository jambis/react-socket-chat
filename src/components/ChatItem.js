import React, { Component } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  typography: {
    fontWeight: "800"
  },
  avatar: {
    width: "54px",
    height: "54px"
  }
});

class ChatItem extends Component {
  renderedItem() {
    const { username, message, avatar } = this.props.entry;
    const { classes } = this.props;

    return (
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar className={classes.avatar} alt="Faker avatar" src={avatar} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <React.Fragment>
              <Typography
                className={classes.typography}
                component="span"
                color="textPrimary"
              >
                {username}
              </Typography>
              {message}
            </React.Fragment>
          }
        />
      </ListItem>
    );
  }

  render() {
    return this.renderedItem();
  }
}

export default withStyles(styles)(ChatItem);
