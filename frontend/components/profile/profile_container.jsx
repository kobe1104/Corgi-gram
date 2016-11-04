import { connect } from 'react-redux';
import Profile from './profile';
import { fetchPhotos, createPhoto } from '../../actions/photo_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  photos: Object.keys(state.photo).map(id => state.photo[id])
});

const mapDispatchToProps = dispatch => ({
  fetchPhotos: () => dispatch(fetchPhotos()),
  // dispatch uploaded photo
  createPhoto: photo => dispatch(createPhoto(photo))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
