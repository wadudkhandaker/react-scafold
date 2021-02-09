import React from "react";

class LoginPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h3>Login page</h3>
        <div>
          <input type="text" name="email" />
          <hr />
          <input type="password" name="password" />
          <button>Sign Up</button>
        </div>
      </React.Fragment>
    );
  }
}

export default LoginPage;
