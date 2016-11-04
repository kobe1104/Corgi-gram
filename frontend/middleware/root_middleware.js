import { applyMiddleware } from 'redux'
import SessionMiddleware from './session_middleware';
import PhotoMiddleware from './photo_middleware';

const RootMiddleware = applyMiddleware(SessionMiddleware, PhotoMiddleware);
export default RootMiddleware;
