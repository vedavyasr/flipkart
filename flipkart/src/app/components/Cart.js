import React, { PureComponent } from "react";
import * as actions from "../state/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button } from "reactstrap";
import { withRouter } from "react-router-dom";
class Cart extends PureComponent {
  componentWillMount() {
    if (this.props.categoryProducts.length) {
      this.props.dispatchers.resetCategoryProducts();
    }
  }
  render() {
    return (
      <div>
        {this.props.cart.length === 0 ? (
          "No Items in Cart :("
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
                  <th style={{ display: this.props.display }}>Remove</th>
                </tr>
                {this.props.cart.map((product, index) => { 
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
              </tbody>
            </table>
            <Button
              onClick={() => this.props.history.push("/checkout")}
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
