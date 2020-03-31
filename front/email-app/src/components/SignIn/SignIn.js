import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link, Redirect } from "react-router-dom";
import "../SignUp/signup.css";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      redirect: false
    };
    this.updateEmailField = this.updateEmailField.bind(this);
    this.updatePasswordField = this.updatePasswordField.bind(this);
    this.setRedirect = this.setRedirect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updatePasswordField(e) {
    this.setState({ password: e.target.value });
  }

  updateEmailField(e) {
    this.setState({ email: e.target.value });
  }

  setRedirect = () => {
    this.setState({ redirect: true });
  };

  renderRedirect = () => {
    if (this.state.redirect === true) {
      return <Redirect to="/profile" />;
    }
  };

  handleSubmit = e => {
    // console.log(`A form was submitted ${JSON.stringify(this.state)}`);
    e.preventDefault();
    fetch("/auth/signin", {
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
          <h2>Sign In</h2>
          <form onSubmit={this.handleSubmit} className="signup-form">
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

            <div className="buttonstyle">
              {this.renderRedirect()}
              <Button
                variant="contained"
                color="primary"
                onClick={this.setRedirect}
              >
                Login
              </Button>
            </div>
            <div className="buttonstyle">
              <Button variant="contained" color="secondary">
                <Link to="/signup">Sign Up!!</Link>
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
