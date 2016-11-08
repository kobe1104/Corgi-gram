import { connect } from 'react-redux';
import PhotoDetail from './photo_detail';
import { fetchPhoto } from '../../actions/photo_actions';
import {commentsSelector} from '../../reducers/selectors';

const mapStateToProps = (state, {params}) => {
  debugger
  return({
    currentUser: state.session.currentUser,
    photo: state.photo[Number(params.id)] || {},
    comments: commentsSelector(state, params.id)
  });

};

const mapDispatchToProps = dispatch => ({
  fetchPhoto: id => dispatch(fetchPhoto(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoDetail);
