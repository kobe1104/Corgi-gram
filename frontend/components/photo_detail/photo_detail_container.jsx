import { connect } from 'react-redux';
import PhotoDetail from './photo_detail';
import { fetchPhoto } from '../../actions/photo_actions';


const mapStateToProps = (state, {params}) => {
  if(state.photo[Number(params.id)]){
    // debugger
    return ({
      currentUser: state.session.currentUser,
      photo: state.photo[Number(params.id)],
      comments: Object.keys(state.photo[Number(params.id)].comments).map(
        cid => state.photo[Number(params.id)].comments[cid]
      )
    });
  } else {
    return({
      photo: {}
    });
  }

};

const mapDispatchToProps = dispatch => ({
  fetchPhoto: id => dispatch(fetchPhoto(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoDetail);
