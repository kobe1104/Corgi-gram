import { connect } from 'react-redux';
import Photo from './photo';
import { fetchPhotos } from '../../actions/photo_actions';
import { fetchComments, createComment } from '../../actions/comment_actions';
import { deleteLike, createLike, fetchAllLikes } from '../../actions/like_actions';
import { allPhotos } from '../../reducers/selectors';
import { clearSearch } from '../../actions/search_actions';

const mapStateToProps = (state, {params}) => ({
  currentUser: state.session.currentUser,
  photos: allPhotos(state),
  likes: state.likes
});

const mapDispatchToProps = dispatch => ({
  fetchAllLikes: () => dispatch(fetchAllLikes()),
  fetchPhotos: () => dispatch(fetchPhotos()),
  fetchComments: () => dispatch(fetchComments()),
  deleteLike: (id) => dispatch(deleteLike(id)),
  createLike: like => dispatch(createLike(like)),
  createComment: comment => dispatch(createComment(comment)),
  clearSearch: () => dispatch(clearSearch())
});

export default connect(mapStateToProps, mapDispatchToProps)(Photo);
