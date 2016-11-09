import { combineReducers } from "redux";
import SessionReducer from './session_reducer';
import PhotoReducer from './photo_reducer';
// import CommentReducer from './comment_reducer';
import LikeReducer from './like_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  likes: LikeReducer,
  // comment: CommentReducer,
  photo: PhotoReducer});
  // rename to photos

export default RootReducer;
