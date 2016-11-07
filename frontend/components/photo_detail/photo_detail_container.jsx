import { connect } from 'react-redux';
import PhotoDetail from './photo_detail';
import { fetchPhoto } from '../../actions/photo_actions';

const mapStateToProps = (state, {params}) => {
  if(state.photo.photo_url){
    console.log(state.photo.params);
    return ({
      currentUser: state.session.currentUser,
      photo: state.photo[params.id],
      comments: Object.keys(state.photo[params.id].comments)
    });
  }
  return({
    photo: {author_id:1}
  });

};

const mapDispatchToProps = dispatch => ({
  fetchPhoto: id => dispatch(fetchPhoto(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoDetail);
