import React, { PureComponent } from "react";
import * as actions from "../state/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "C:/Users/m1043143/AppData/Local/Microsoft/TypeScript/3.2/node_modules/redux";

class Cart extends PureComponent {
  render() {
    return (
      <div className="container">
        <div>
          <h1>Cart</h1>
          <table>
            <tbody>
              {this.props.cart.map((product, index) => {
                return (
                  <tr key={index}>
                    <td>{product.name}</td>
                    <td>{product.id}</td>
                    <td>{product.price}</td>
                    <td>
                      <button
                        onClick={() => {
                          this.props.dispatchers.enableButton(product.id);
                          this.props.dispatchers.deleteProduct(product.id);
                        }}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
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
)(Cart);
