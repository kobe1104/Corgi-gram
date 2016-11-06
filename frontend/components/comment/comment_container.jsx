import { connect } from 'react-redux';
import Comment from './comment';
import { fetchComments } from '../actions/comment_actions';

const mapStateToProps = state => ({
  comments: state.comment
});

const mapDispatchToProps = dispatch => ({
  fetchComments: comments => dispatch(fetchComments(comments))
});

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
