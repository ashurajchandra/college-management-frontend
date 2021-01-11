import users from "./users";
import { combineReducers } from "redux";
import auth from "./auth";

export default combineReducers({
  users,
  auth,
});
