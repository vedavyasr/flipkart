import React, { Component } from "react";
import Header from "./app/components/Header";
import Footer from "./app/components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
// import Categories from "./app/containers/CategoriesContainer";
import Cart from "./app/components/Cart";
import Products from "./app/components/Products";
import Checkout from "./app/components/Checkout";
import Home from "./app/containers/ProductsContainer";
import Login from "./app/containers/LoginContainer";
import ProductDetails from "./app/containers/ProductDetailsContainer";
import OrderSummary from "./app/components/OrderSummary";
import Loadable from "react-loadable";
import { Spinner } from "reactstrap";
import Error from "./app/components/UI/Error";
import AuthRoute from "./app/components/UI/AuthRoute";
const Loading = () => (
  <div>
    <Spinner style={{ width: "3rem", height: "3rem" }} />
  </div>
);

const LazyLoadableCategories = Loadable({
  // webpack, look into this, create separate bundle for cart code (Cart, CartList, Sumary, ITem), chunk...
  loader: () => import("./app/containers/CategoriesContainer"),
  loading: Loading
});

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="mainContainer">
          <Router>
            <React.Fragment>
              <Header />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/products" exact component={Products} />
                <Route
                  path="/categories"
                  exact
                  component={LazyLoadableCategories}
                />
                <Route path="/cart" exact component={Cart} />
                {/* <Route path="/checkout" exact component={Checkout} /> */}
                <Route path="/products/:id" component={ProductDetails} />
                <Route path="/login" component={Login} />
                <AuthRoute
                  path="/checkout"
                  authenticated={this.props.authenticated.token}
                  component={Checkout}
                />
                <Route path="/ordersummary" component={OrderSummary} />
                <Route path="*" component={Error} />
              </Switch>
            </React.Fragment>
          </Router>
        </div>
        <Footer />
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    authenticated: state.login
  };
};

export default connect(mapStateToProps)(App);
