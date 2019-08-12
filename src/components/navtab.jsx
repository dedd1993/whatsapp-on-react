import React, { Component } from "react";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import Chats from "./chats";
import States from "./states";
import Calls from "./calls";

class NavTab extends Component {
  state = {
    tabIndex: 0
  };

  handleChange = (event, index) => {
    this.setState({ tabIndex: index });
  };

  getTemplate = () => {
    switch (this.state.tabIndex) {
      case 0:
        return <Chats />;
      case 1:
        return <States />;
      case 2:
        return <Calls />;
      default:
        return null;
    }
  };

  render() {
    return (
      <div>
        <AppBar position="static">
          <Tabs
            value={this.state.tabIndex}
            onChange={this.handleChange}
            variant="fullWidth"
            indicatorColor="secondary"
            aria-label="simple tabs example"
          >
            <Tab label="CHATS" />
            <Tab label="ESTADOS" />
            <Tab label="LLAMADAS" />
          </Tabs>
        </AppBar>
        {this.getTemplate()}
      </div>
    );
  }
}

export default NavTab;
