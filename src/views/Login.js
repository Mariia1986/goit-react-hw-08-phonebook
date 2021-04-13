import React, { Component } from "react";
import Form  from 'react-bootstrap/Form'

import FormControl from 'react-bootstrap/FormControl'
import FormFile from 'react-bootstrap/FormFile'

class Login extends Component {
  state = { email: "", password: "" };
  render() {
    const {email,password }=this.state
    return (
     
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={password}
          />
        </Form.Group>

        <button variant="primary" type="submit">
          Login
        </button>
      </Form>
    );
  }
}

export default Login;