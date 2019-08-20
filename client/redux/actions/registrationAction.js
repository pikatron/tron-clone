import * as userConstants from "../constants/userConstants";
import { store } from "../store";

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
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ user })
    })
      .then(res => res.json())
      .then(userInfo => {
        dispatch(signupSuccess(user));
      })
      .catch(error => store.dispatch(signupFailure(error)));
  };
};

export default createUser;
