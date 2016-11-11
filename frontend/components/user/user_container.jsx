// photo / follow
import { connect } from 'react-redux';
import User from './user';
import { fetchPhotos, createPhoto } from '../../actions/photo_actions';
import { fetchAllFollows, createFollow, deleteFollow } from '../../actions/follow_actions';
import { fetchAllUsers } from '../../actions/user_actions';
import { followingNumber } from '../../reducers/selectors';


const mapStateToProps = (state, {params}) => ({
  currentUser: state.session.currentUser,
  user: state.users[Number(params.id)],
  following: followingNumber(state, params)
});

const mapDispatchToProps = dispatch => ({
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  fetchPhotos: () => dispatch(fetchPhotos()),
  createPhoto: photo => dispatch(createPhoto(photo)),
  fetchAllFollows: () => dispatch(fetchAllFollows()),
  createFollow: follow => dispatch(createFollow(follow)),
  deleteFollow: id => dispatch(deleteFollow(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(User);

// add delete follow to user, follow reducers and middleware
// add delete create to toggle follow
