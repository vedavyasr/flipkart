import React, { Component } from "react";
import Category from "./categoryCard";

export default class Categories extends Component {
  componentWillReceiveProps(prevProps, prevState) {
    this.props.dispatchers.fetchCategories();
  }
  render() {
    return (
      <div>
        {this.props.products.categories.map(category => (
          <Category
            name={category.name}
            img={category.imageUrl}
            key={category.id}
          />
        ))}
      </div>
    );
  }
}
