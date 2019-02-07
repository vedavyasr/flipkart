import React, { PureComponent } from "react";
import * as actions from "../state/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button } from "reactstrap";
import { withRouter } from "react-router-dom";
class Cart extends PureComponent {
  componentWillMount() {
    this.props.dispatchers.resetCategoryProducts();
  }
  render() {
    let path = this.props.location.pathname.split("/");
    return (
      <div>
        {this.props.cart.length === 0 ? (
          "No Items in Cart :("
        ) : path[1] === "checkout" ? (
          <div className="table table-responsive">
            <table className="table-bordered">
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>QTY</th>
                  <th>Price</th>
                </tr>
                {this.props.cart.map((product, index) => {
                  return (
                    <tr key={index}>
                      <td>{product.name}</td>
                      <td>{product.id}</td>
                      <td>{product.price}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="table table-responsive">
            <h1>Cart</h1>
            <hr />
            <table className="table-bordered">
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>QTY</th>
                  <th>Price</th>
                  <th>Remove</th>
                </tr>
                {this.props.cart.map((product, index) => {
                  return (
                    <tr key={index}>
                      <td>{product.name}</td>
                      <td>{product.id}</td>
                      <td>{product.price}</td>
                      <td>
                        <Button
                          onClick={() => {
                            this.props.dispatchers.enableButton(product.id);
                            this.props.dispatchers.deleteProduct(product.id);
                          }}
                        >
                          Remove
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    cart: state.cart.cart
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
)(withRouter(Cart));
