const userConstants = '../constants/userConstants';

const initialState = {}
const userSignup = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.SIGNUP_SUCCESS:
      return {...state, user: action.payload.username};
    case userConstants.SIGNUP_FAILURE:
      return {};
    default:
      return state;
  }
};

 export default userSignup