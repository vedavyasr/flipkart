import React, { PureComponent } from "react";
import * as actions from "../state/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Button, Form } from "reactstrap";
import InputBox from "./InputBox";
let values = {};
class Shipping extends PureComponent {
  handleChangeEvent(event) {
    values[event.target.name] = event.target.value;
  }
  render() {
    return (
      <div className="ShippingForm">
        <Form>
          <InputBox
            label="Name"
            type="text"
            name="name"
            changeHandle={this.handleChangeEvent}
          />
          <InputBox
            label="Address"
            type="text"
            name="address"
            changeHandle={this.handleChangeEvent}
          />
          <InputBox
            label="City"
            type="text"
            name="city"
            changeHandle={this.handleChangeEvent}
          />
          <InputBox
            label="State"
            type="text"
            name="state"
            changeHandle={this.handleChangeEvent}
          />
          <InputBox
            label="Pincode"
            type="number"
            name="pincode"
            changeHandle={this.handleChangeEvent}
          />

          <Button
            onClick={() => {
              this.props.dispatchers.changeInputValue(values);
            }}
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