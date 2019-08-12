import React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  Typography,
  Fab,
  Icon
} from "@material-ui/core";

function Chats() {
  return (
    <React.Fragment>
      <List style={{}}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              src="https://material-ui.com/static/images/avatar/1.jpg"
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              <React.Fragment>
                <div style={{ display: "flex" }}>
                  <span>Brunch this weekend?</span>
                  <span style={{ flexGrow: 1 }} />
                  <Typography variant="caption">8:39 p.m.</Typography>
                </div>
              </React.Fragment>
            }
            secondary={"I'll be in your neighborhood doing errands this…"}
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Travis Howard"
              src="https://material-ui.com/static/images/avatar/2.jpg"
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              <React.Fragment>
                <div style={{ display: "flex" }}>
                  <span>Brunch this weekend?</span>
                  <span style={{ flexGrow: 1 }} />
                  <Typography variant="caption">8:39 p.m.</Typography>
                </div>
              </React.Fragment>
            }
            secondary={"I'll be in your neighborhood doing errands this…"}
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Cindy Baker"
              src="https://material-ui.com/static/images/avatar/3.jpg"
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              <React.Fragment>
                <div style={{ display: "flex" }}>
                  <span>Brunch this weekend?</span>
                  <span style={{ flexGrow: 1 }} />
                  <Typography variant="caption">8:39 p.m.</Typography>
                </div>
              </React.Fragment>
            }
            secondary={"I'll be in your neighborhood doing errands this…"}
          />
        </ListItem>
      </List>
      <Fab
        color="secondary"
        aria-label="message"
        style={{ position: "absolute", bottom: 16, right: 16 }}
      >
        <Icon>message</Icon>
      </Fab>
    </React.Fragment>
  );
}

export default Chats;
