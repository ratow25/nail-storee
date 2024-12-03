const initialState = {
  username: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        username: action.payload,
      };
    
    default:
      return state;
  }
};

export default userReducer;
