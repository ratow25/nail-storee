const initialState = {
  cart: [],
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const updatedCart = [...state.cart, action.payload];
      const updatedTotal = state.total + action.payload.price;
      return { ...state, cart: updatedCart, total: updatedTotal };

    case 'REMOVE_FROM_CART':
      const filteredCart = state.cart.filter(item => item.id !== action.payload.id);
      const reducedTotal = state.total - action.payload.price;
      return { ...state, cart: filteredCart, total: reducedTotal };

    default:
      return state;
  }
};

export default cartReducer;
