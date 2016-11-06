import { connect } from 'react-redux';
import Photo from './photo';
import { fetchPhotos } from '../../actions/photo_actions';
import { fetchComments } from '../../actions/comment_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  photos: Object.keys(state.photo).map(id => state.photo[id]),
  comments: state.comment
});

const mapDispatchToProps = dispatch => ({
  fetchPhotos: () => dispatch(fetchPhotos()),
  fetchComments: () => dispatch(fetchComments())
});

export default connect(mapStateToProps, mapDispatchToProps)(Photo);
