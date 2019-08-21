import * as userConstants from  '../constants/userConstants';

const initialState = {username: 'test'}
const userSignup = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.SIGNUP_SUCCESS:      
      return Object.assign({},state,{
        username: action.payload
      })
    case userConstants.SIGNUP_FAILURE:
      return {};
    default:
      return state;
  }
};

 export default userSignup