import React, { PureComponent } from "react";
import { deleteProduct } from "../state/actions";
import { connect } from "react-redux";

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
                        onClick={() => this.props.deleteProduct(product.id)}
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
    cart: state.products.cart
  };
};

export default connect(
  mapStateToProps,
  { deleteProduct }
)(Cart);
