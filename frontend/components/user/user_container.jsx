// photo / follow
import { connect } from 'react-redux';
import User from './user';
import { fetchPhotos, createPhoto } from '../../actions/photo_actions';
import { fetchAllFollows, createFollow } from '../../actions/follow_actions';
import { fetchAllUsers } from '../../actions/user_actions';

const mapStateToProps = (state, {params}) => ({
  user: state.users[Number(params.id)]
});

const mapDispatchToProps = dispatch => ({
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  fetchPhotos: () => dispatch(fetchPhotos()),
  createPhoto: photo => dispatch(createPhoto(photo)),
  fetchAllFollows: () => dispatch(fetchAllFollows()),
  createFollow: follow => dispatch(createFollow(follow))
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
