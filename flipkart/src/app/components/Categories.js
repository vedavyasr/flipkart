import React, { PureComponent } from "react";
import Category from "./UI/CategoryCard";
import { Spinner } from "reactstrap";

export default class Categories extends PureComponent {
  
  componentWillMount() {
    if (this.props.categories.length === 0) {
      this.props.dispatchers.fetchCategories();
    }

    if (this.props.productsByCategory.length) {
      this.props.dispatchers.resetCategoryProducts();
    }
  }
  render() {
    return (
      <div className="row">
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
          <Spinner style={{ width: "3rem", height: "3rem" }} />
        )}
      </div>
    );
  }
}
