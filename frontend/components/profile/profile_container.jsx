import { connect } from 'react-redux';
import Profile from './profile';
import { fetchPhotos, createPhoto } from '../../actions/photo_actions';
import { fetchAllFollows } from '../../actions/follow_actions';
import {
  photosByCurrentUser,
  currentUserFollowingNumber
} from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return({
    currentUser: state.session.currentUser,
    photos: photosByCurrentUser(state),
    following: currentUserFollowingNumber(state)
  });
};

const mapDispatchToProps = dispatch => ({
  fetchPhotos: () => dispatch(fetchPhotos()),
  // dispatch uploaded photo
  createPhoto: photo => dispatch(createPhoto(photo)),
  fetchAllFollows: () => dispatch(fetchAllFollows())
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
