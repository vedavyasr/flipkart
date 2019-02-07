import React from "react";
import InputBox from "./InputBox";
import { Button, Form } from "reactstrap";
let values = {};
function handleChangeEvent(event) {
  values[event.target.name] = event.target.value;
}
export default props => (
  <div>
    <h2>Login</h2>
    <Form>
      <InputBox
        name="login"
        type="text"
        label="Login"
        changeHandle={handleChangeEvent}
      />
      <InputBox
        name="password"
        type="password"
        label="Password"
        changeHandle={handleChangeEvent}
      />
      <Button> Login </Button>
    </Form>
  </div>
);
