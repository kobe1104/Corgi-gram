import { applyMiddleware } from 'redux'
import SessionMiddleware from './session_middleware';
import PhotoMiddleware from './photo_middleware';
import CommentMiddleware from './comment_middleware';
import LikeMiddileware from './like_middleware';
import FollowMiddleware from './follow_middleware';
import UserMiddleware from './user_middleware';

const RootMiddleware = applyMiddleware(
  // CommentMiddleware,
  LikeMiddileware,
  SessionMiddleware,
  PhotoMiddleware,
  FollowMiddleware,
  UserMiddleware
);
export default RootMiddleware;
