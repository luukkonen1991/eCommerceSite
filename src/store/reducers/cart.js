import * as actionTypes from "../actions/actionTypes";
// import { updateObject } from "../../shared/util";
import { addCartItem } from "../../shared/util";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case actionTypes.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: addCartItem(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
