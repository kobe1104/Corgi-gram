import { connect } from 'react-redux';
import Profile from './profile';
import { fetchPhotos, createPhoto } from '../../actions/photo_actions';
import { photosByUser } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return({
    currentUser: state.session.currentUser,
    photos: photosByUser(state)
  });
};

const mapDispatchToProps = dispatch => ({
  fetchPhotos: () => dispatch(fetchPhotos()),
  // dispatch uploaded photo
  createPhoto: photo => dispatch(createPhoto(photo))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
