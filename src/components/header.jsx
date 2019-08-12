import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import MoreVert from "@material-ui/icons/MoreVert";

class Header extends Component {
  state = {};
  render() {
    return (
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Whatsapp
          </Typography>
          <div style={{ flexGrow: 1 }} />
          <IconButton aria-label="delete" color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton aria-label="delete" color="inherit">
            <MoreVert />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
