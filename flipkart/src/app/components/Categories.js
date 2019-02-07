import React, { PureComponent } from "react";
import Category from "./CategoryCard";
import { Spinner } from "reactstrap";
export default class Categories extends PureComponent {
  componentWillMount() {
    this.props.dispatchers.fetchCategories();
    this.props.dispatchers.resetCategoryProducts();
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
