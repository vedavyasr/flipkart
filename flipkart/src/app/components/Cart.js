import React, { PureComponent } from "react";
import * as actions from "../state/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, Input, Label } from "reactstrap";
import { withRouter } from "react-router-dom";

class Cart extends PureComponent {
  componentWillMount() {
    // this.props.dispatchers.clearSearchValue();
    if (this.props.categoryProducts.length) {
      this.props.dispatchers.resetCategoryProducts();
    }
  }
  render() {
    let total = 0;
    return (
      <div>
        {this.props.cart.length === 0 ? (
          <h2>No Items in Cart :'(</h2>
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
                  {this.props.display ? null : <th>Remove</th>}
                </tr>
                {this.props.cart.map((product, index) => {
                  total = total + product.price * product.qty;
                  return (
                    <tr key={index}>
                      <td>{product.name}</td>
                      <td>
                        <Button
                          onClick={() =>
                            product.qty > 1 &&
                            this.props.dispatchers.decreaseQty(product.id)
                          }
                        >
                          -1
                        </Button>
                        {product.qty}
                        <Button
                          onClick={() =>
                            this.props.dispatchers.increaseQty(product.id)
                          }
                        >
                          +1
                        </Button>
                      </td>
                      <td>{product.price * product.qty}</td>
                      <td style={{ display: this.props.display }}>
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
                <tr>
                  <td>
                    <Label>Total: </Label>
                  </td>
                  <td>
                    {this.props.disabled ? (
                      <Input
                        type="Amount"
                        value={total}
                        style={{ disabled: true }}
                        onChange={() => {}}
                      />
                    ) : (
                      <Input type="Amount" value={total} onChange={() => {}} />
                    )}
                  </td>
                </tr>
              </tbody>
            </table>

            <Button
              onClick={() => {
                this.props.dispatchers.cartTotal(total);
                this.props.history.push("/checkout");
              }}
              style={{ display: this.props.display }}
            >
              Checkout==>>
            </Button>
          </div>
        )}
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    cart: state.cart.cart,
    categoryProducts: state.categories.productsByCategory
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
