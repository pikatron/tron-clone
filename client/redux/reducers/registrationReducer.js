const userConstants = '../constants/userConstants';

const registration = (state = {}, action) => {
  switch (action.type) {
    case userConstants.SIGNUP_REQEUST:
      return { registering: true };
    case userConstants.SIGNUP_SUCCESS:
      return {user: action.payload.username};
    case userConstants.SIGNUP_FAILURE:
      return {};
    default:
      return state;
  }
};

 export default registration