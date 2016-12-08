import { connect } from 'react-redux';
import Main from './main';
import { logout } from '../../actions/session_actions';
import { fetchSearch, clearSearch } from '../../actions/search_actions';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  searchResults: state.searchResults
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchSearch: (search) => dispatch(fetchSearch(search)),
  clearSearch: () => dispatch(clearSearch())
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
