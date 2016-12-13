import { connect } from 'react-redux';
import About from './about_me';
import { fetchSearch, clearSearch } from '../../actions/search_actions';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  clearSearch: () => dispatch(clearSearch())
});

export default connect(mapStateToProps, mapDispatchToProps)(About);
