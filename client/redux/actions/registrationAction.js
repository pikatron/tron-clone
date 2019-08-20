import userConstants from "../constants/userConstants";


const signupSuccess = user => ({
  type: userConstants.SIGNUP_SUCCESS,
  payload: user
});

const signupFailure = error => ({
  type: userConstants.SIGNUP_FAILURE,
  payload: error
});

export const userActions = {
  createUser,
  signupFailure,
  signupSuccess
};
const createUser = user => {
  return dispatch => {
    fetch("/auth/signup", {
      method: "POST",
      headers: "Application/json",
      body: JSON.stringify({ user })
    })
      .then(userInfo => {
        userInfo.json();
        dispatch(signupSuccess(user));
      })
      .catch(error => dispatch(signupFailure(error)));
  };
};
export default createUser;
