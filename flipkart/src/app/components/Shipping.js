import React from "react";
import { Button, Form } from "reactstrap";
import InputBox from "./UI/InputBox";
import { withRouter } from "react-router-dom";

let values = {};
function handleChangeEvent(event) {
  values[event.target.name] = event.target.value;
}

let Shipping = props => {
  console.log(props," ins hipping");
  
  return (
    <div className="ShippingForm">
      <h4>Shipping Details</h4>
      <Form>
        <InputBox
          label="Name"
          type="text"
          name="name"
          changeHandle={handleChangeEvent}
        />
        <InputBox
          label="Address"
          type="text"
          name="address"
          changeHandle={handleChangeEvent}
        />
        <InputBox
          label="City"
          type="text"
          name="city"
          changeHandle={handleChangeEvent}
        />
        <InputBox
          label="State"
          type="text"
          name="state"
          changeHandle={handleChangeEvent}
        />
        <InputBox
          label="Pincode"
          type="number"
          name="pincode"
          changeHandle={handleChangeEvent}
        />

        <Button
          onClick={() => {
          
            props.dispatchers.saveSummary(values);
            props.history.push("/ordersummary");
          }}
        >
          Place order
        </Button>
      </Form>
    </div>
  );
};

export default withRouter(Shipping);
