import { connect } from 'react-redux';
import Profile from './profile';
import { fetchPhotos } from '../../actions/photo_actions';

const mapStateToProps = state => ({
  currentUserId: state.session.currentUser.id,
  photos: Object.keys(state.photo).map(id => state.photo[id])
});

const mapDispatchToProps = dispatch => ({
  fetchPhotos: () => dispatch(fetchPhotos())
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
