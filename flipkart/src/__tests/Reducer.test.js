import ProductReducer from "../app/state/reducers/productReducer";
import * as actions from "../app/state/action-types";

describe("Product reducer", () => {
  it("should return the initial state", () => {
    expect(ProductReducer(undefined, {})).toEqual({
      isFetching: false,
      products: [],
      error: {},
      searchValue: "",
      results: [],
      productDetail: [],
      productsToDisplay: []
    });
  });
  it("should add something to store ", () => {
    expect(
      ProductReducer(
        {
          isFetching: false,
          products: [],
          error: {},
          searchValue: "",
          results: [],
          productDetail: [],
          productsToDisplay: []
        },
        {
          type: actions.FETCHING_PRODUCTS_SUCCESS,
          payload: [{ id: 1, name: "name" }]
        }
      )
    ).toEqual({
      isFetching: false,
      products: [{ id: 1, name: "name" }],
      error: {},
      searchValue: "",
      results: [],
      productDetail: [],
      productsToDisplay: [{ id: 1, name: "name" }]
    });
  });
});
