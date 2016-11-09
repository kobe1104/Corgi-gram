import { connect } from 'react-redux';
import Photo from './photo';
import { fetchPhotos } from '../../actions/photo_actions';
import { fetchComments, createComment } from '../../actions/comment_actions';
import { deleteLike, createLike, fetchAllLikes } from '../../actions/like_actions';


const mapStateToProps = (state, {params}) => ({
  currentUser: state.session.currentUser,
  photos: Object.keys(state.photo).map(id => state.photo[id]),
  likes: state.likes

});

const mapDispatchToProps = dispatch => ({
  fetchAllLikes: () => dispatch(fetchAllLikes()),
  fetchPhotos: () => dispatch(fetchPhotos()),
  fetchComments: () => dispatch(fetchComments()),
  deleteLike: (id) => dispatch(deleteLike(id)),
  createLike: like => dispatch(createLike(like)),
  createComment: comment => dispatch(createComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(Photo);
