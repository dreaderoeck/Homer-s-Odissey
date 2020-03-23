import React from "react";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
    this.updateEmailField = this.updateEmailField.bind(this);
  }

  updateEmailField(e) {
    this.setState({ email: e.target.value });
  }

  render() {
    return (
      <React.Fragment>
        <h1>{this.state.email}</h1>
        <input
          id="email"
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.updateEmailField}
        />
        <button>SignUp</button>
      </React.Fragment>
    );
  }
}

export default SignUp;
