import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import authReducer from "./Auth/Reducer";
import ProjectReducer from "./Project/Project.Reducer";
import { thunk } from "redux-thunk";
import ChatReducer from "./Chat/Reducer";
import commentReducer from "./Comment/Comment.Reducer";
import issueReducer from "./Issue/Issue.reducer";

const rootReducers = combineReducers({
  auth: authReducer,
  project: ProjectReducer,
  chat: ChatReducer,
  comment: commentReducer,
  issue: issueReducer,
});

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));
