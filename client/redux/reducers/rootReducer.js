import { combineReducers } from "redux";
import userSignup from './registrationReducer'

const rootReducer = combineReducers({
   userSignup: userSignup
});

export default rootReducer;
