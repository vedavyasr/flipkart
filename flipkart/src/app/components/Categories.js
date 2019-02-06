import React, { Component } from "react";
import Category from "./categoryCard";

export default class Categories extends Component {
  //   static getDerivedStateFromProps(props, state) {
  //     console.log(props, "getDerivedStateFromProps ..");
  // props.isFetching?
  //     props.dispatchers.fetchCategories() : '';
  //     return null;
  //   }
  componentWillMount() {
    this.props.dispatchers.fetchCategories();
  }
  render() {
    return (
      <div>
        {!this.props.isFetching ? (
          this.props.categories.map(category => (
            <Category
              name={category.name}
              img={category.imageUrl}
              id={category.id}
              key={category.id}
              click={this.props.dispatchers.saveCategoryId}
              filter={this.props.dispatchers.filterByCategory}
            />
          ))
        ) : (
          <h2>loading...</h2>
        )}
      </div>
    );
  }
}
