import { connect } from 'react-redux';
import Photo from './photo';
import { fetchPhotos } from '../../actions/photo_actions';

const mapStateToProps = state => ({
  photos: Object.keys(state.photo).map(id => state.photo[id])
});

const mapDispatchToProps = dispatch => ({
  fetchPhotos: () => dispatch(fetchPhotos())
  // feed
});

export default connect(mapStateToProps, mapDispatchToProps)(Photo);
