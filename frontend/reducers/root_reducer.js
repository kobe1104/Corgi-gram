import { combineReducers } from "redux";
import SessionReducer from './session_reducer';
import PhotoReducer from './photo_reducer';
// import CommentReducer from './comment_reducer';
import LikeReducer from './like_reducer';
import FollowReducer from './follow_reducer';
import UserReducer from './user_reducer';
import SearchReducer from './search_reducer';


const RootReducer = combineReducers({
  session: SessionReducer,
  likes: LikeReducer,
  users: UserReducer,
  // comment: CommentReducer,
  follows: FollowReducer,
  photo: PhotoReducer,
  searchResults: SearchReducer
});

export default RootReducer;
