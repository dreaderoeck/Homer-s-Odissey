import React from "react";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      lastName: "",
      password: "",
      passwordConf: "",
      email: ""
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

  handleSubmit(e) {
    console.log(`A form was submitted ${JSON.stringify(this.state)}`);
    e.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <h1>{JSON.stringify(this.state)}</h1>

        <form onSubmit={this.handleSubmit}>
          <input
            id="name"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.updateNameField}
          />

          <input
            id="lastName"
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.updateLastNameField}
          />

          <input
            id="password"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.updatePasswordField}
          />

          <input
            id="passwordConf"
            type="password"
            name="passwordConf"
            value={this.state.passwordConf}
            onChange={this.updatePasswordConfField}
          />

          <input
            id="email"
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.updateEmailField}
          />
          <input type="submit" value="Submit" />
        </form>
      </React.Fragment>
    );
  }
}

export default SignUp;
