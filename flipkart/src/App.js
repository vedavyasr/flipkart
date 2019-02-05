import React, { Component } from "react";
import Header from "./app/components/Header";
import Footer from "./app/components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./app/components/Home";
import Categories from "./app/components/Categories";
import Cart from "./app/components/Cart";
import Products from "./app/components/Products";
import Checkout from "./app/components/Checkout";
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <React.Fragment>
            <Header />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/products" exact component={Products} />
              <Route path="/categories" exact component={Categories} />
              <Route path="/cart" exact component={Cart} />
              <Route path="/checkout" exact component={Checkout} />
            </Switch>
            <Footer />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
