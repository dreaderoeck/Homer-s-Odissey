import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { SnackbarContent } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import "./signup.css";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      lastName: "",
      password: "",
      passwordConf: "",
      email: "",
      flash: ""
    };
    this.updateEmailField = this.updateEmailField.bind(this);
    this.updateNameField = this.updateNameField.bind(this);
    this.updateLastNameField = this.updateLastNameField.bind(this);
    this.updatePasswordField = this.updatePasswordField.bind(this);
    this.updatePasswordConfField = this.updatePasswordConfField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateNameField(e) {
    this.setState({ name: e.target.value });
  }

  updateLastNameField(e) {
    this.setState({ lastName: e.target.value });
  }

  updatePasswordField(e) {
    this.setState({ password: e.target.value });
  }

  updatePasswordConfField(e) {
    this.setState({ passwordConf: e.target.value });
  }

  updateEmailField(e) {
    this.setState({ email: e.target.value });
  }

  handleSubmit = e => {
    // console.log(`A form was submitted ${JSON.stringify(this.state)}`);
    e.preventDefault();
    fetch("/auth/signup", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(
        res => this.setState({ flash: res.flash }),
        err => this.setState({ flash: err.flash })
      );
    this.setState({ open: false });
  };

  render() {
    return (
      <div className="signup-container">
        <div className="sign-up">
          <h2>Sign up</h2>
          <form onSubmit={this.handleSubmit} className="signup-form">
            <div>
              <TextField
                label="Name"
                id="name"
                type="text"
                name="name"
                fullWidth
                value={this.state.name}
                onChange={this.updateNameField}
              />
            </div>

            <div>
              <TextField
                label="Last Name"
                id="lastName"
                type="text"
                name="lastName"
                fullWidth
                value={this.state.lastName}
                onChange={this.updateLastNameField}
              />
            </div>
            <div>
              <TextField
                label="Password"
                id="password"
                type="password"
                name="password"
                fullWidth
                value={this.state.password}
                onChange={this.updatePasswordField}
              />
            </div>

            <div>
              <TextField
                label="Password Confirmed"
                id="passwordConf"
                type="password"
                name="passwordConf"
                fullWidth
                value={this.state.passwordConf}
                onChange={this.updatePasswordConfField}
              />
            </div>

            <div>
              <TextField
                label="Email"
                id="email"
                type="email"
                name="email"
                fullWidth
                value={this.state.email}
                onChange={this.updateEmailField}
              />
            </div>
            <div className="buttonstyle">
              <Button
                variant="contained"
                color="primary"
                onClick={this.handleSubmit}
              >
                Submit
              </Button>
            </div>
          </form>
        </div>

        <div className="snackbarstyle">
          {/* {this.state.flash && <p>{this.state.flash}</p>} */}
          {this.state.flash && (
            <SnackbarContent
              anchorOrigin={"bottom, center"}
              message={this.state.flash}
            />
          )}
        </div>
      </div>
    );
  }
}

export default SignUp;
