import React, { Component } from "react";
import * as actions from "../state/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
let values = {};
class Shipping extends Component {
  handleChangeEvent(event) {
    values[event.target.name] = event.target.value;
  }

  render() {
    return (
      <div className="ShippingForm">
        <Form>
          <FormGroup>
            <Label for="exampleEmail">Name:</Label>
            <Input
              type="text"
              name="name"
              onChange={e => this.handleChangeEvent(e)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Address:</Label>
            <Input
              type="text"
              name="address"
              onChange={e => this.handleChangeEvent(e)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">City:</Label>
            <Input
              type="text"
              name="city"
              onChange={e => this.handleChangeEvent(e)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">State:</Label>
            <Input
              type="text"
              name="state"
              onChange={e => this.handleChangeEvent(e)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Pincode:</Label>
            <Input
              type="text"
              name="pincode"
              onChange={e => this.handleChangeEvent(e)}
            />
          </FormGroup>
          <Button
            onClick={() => this.props.dispatchers.changeInputValue(values)}
          >
            Place order
          </Button>
        </Form>
      </div>
    );
  }
}
let mapStateToProps = state => {
  return {
    shipping: state
  };
};

let mapDisptachToProps = (dispatch, getState) => {
  return {
    dispatchers: bindActionCreators(actions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDisptachToProps
)(Shipping);
