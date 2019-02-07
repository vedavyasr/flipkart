import React, { Component } from "react";
import Header from "./app/components/Header";
import Footer from "./app/components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Categories from "./app/containers/CategoriesContainer";
import Cart from "./app/components/Cart";
import Products from "./app/components/Products";
import Checkout from "./app/components/Checkout";
import Home from "./app/containers/ProductsContainer";
import Login from "./app/containers/LoginContainer";
import ProductDetails from "./app/containers/ProductDetailsContainer";
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
                <Route path="/categories" exact component={Categories} />
                <Route path="/cart" exact component={Cart} />
                <Route path="/checkout" exact component={Checkout} />
                <Route path="/products/:id" component={ProductDetails} />
                <Route path="/login" component={Login} />
              </Switch>
            </React.Fragment>
          </Router>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
