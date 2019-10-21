
import * as actions from "../app/state/actions";
import * as types from "../app/state/action-types";

describe("actions", () => {
  it("should create an action to add a todo", () => {
    const expectedAction = {
      type: types.FETCHING_PRODUCTS_INIT
    };
    expect(actions.fetchingData()).toEqual(expectedAction);
  });
});
