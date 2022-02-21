import { ADD, REMOVE } from "../actionTypes";
const { products } = require("../data.json");


const INITIAL_STATE = { products, cart: [] };

function rootReducer(state = INITIAL_STATE, action) {
  const newCart = [...state.cart];
  switch (action.type) {
    case ADD:
      for (let product of newCart) {
        if (product.id === action.id) {
          product.qty++;
          return { ...state, cart: newCart };
        }
      }
      newCart.push({ id: action.id, qty: 1 });
      return { ...state, cart: newCart }
    case REMOVE:
      for (let product of newCart) {
        if (product.id === action.id) {
          if (product.qty > 1) {
            product.qty--;
            return { ...state, cart: newCart };
          }
          if (product.qty === 1) {
            return { ...state, cart: newCart.filter(p => p.id !== action.id) }
          }
        }
      }
      return state;
    default:
      return state;
  }
}

export default rootReducer;