import { combineReducers } from "redux"
import profile from "./profile";
import initData from "./initData";

// reducers
const rootReducer = combineReducers({
  profile,
  initData
})

export default rootReducer;