import React from "react";
import { Button, Form } from "reactstrap";
import InputBox from "./UI/InputBox";
import { withRouter } from "react-router-dom";

let values = {};
function handleChangeEvent(event) {
  values[event.target.name] = event.target.value;
}
let inputBoxDetails = [
  { label: "Name", type: "text", name: "name" },
  { label: "Address", type: "text", name: "address" },
  { label: "City", type: "text", name: "city" },
  { label: "State", type: "text", name: "state" },
  { label: "Pincode", type: "number", name: "pincode" }
];
let Shipping = props => {
  return (
    <div className="ShippingForm">
      <h4>Shipping Details</h4>
      <Form
        onSubmit={() => {
          props.dispatchers.saveSummary(values);
          props.history.push("/ordersummary");
        }}
      >
        {inputBoxDetails.map(detail => (
          <InputBox
            key={detail.name}
            label={detail.label}
            type={detail.type}
            name={detail.name}
            changeHandle={handleChangeEvent}
          />
        ))}

        <Button>Place order</Button>
      </Form>
    </div>
  );
};

export default withRouter(Shipping);
