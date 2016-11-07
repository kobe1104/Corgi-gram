import { combineReducers } from "redux";
import SessionReducer from './session_reducer';
import PhotoReducer from './photo_reducer';
// import CommentReducer from './comment_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  // comment: CommentReducer,
  photo: PhotoReducer});

export default RootReducer;
