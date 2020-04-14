import React from "react";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      lastname: "",
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
  };

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
            name="lastname"
            value={this.state.lastname}
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
        {this.state.flash && <p>{this.state.flash}</p>}
      </React.Fragment>
    );
  }
}

export default SignUp;
