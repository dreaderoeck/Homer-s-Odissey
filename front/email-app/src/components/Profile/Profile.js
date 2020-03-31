import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./profile.css";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {
        email: "homer.simpson@wildcodeschool.fr",
        name: "Homer",
        lastname: "Simpson"
      }
    };
  }

  render() {
    return (
      <div className="Profile-container">
        <h1>Welcome {this.state.profile.name}</h1>
        <List>
          <ListItem>
            <ListItemText primary="Name" secondary={this.state.profile.name} />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Last Name"
              secondary={this.state.profile.lastname}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Email"
              secondary={this.state.profile.email}
            />
          </ListItem>
        </List>
        <div className="profile-buttonstyle">
          <Button variant="contained" color="primary">
            <Link to="/signin">Sign Out</Link>
          </Button>
        </div>
      </div>
    );
  }
}

export default Profile;
