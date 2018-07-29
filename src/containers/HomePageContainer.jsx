// dependencies
import { connect } from 'react-redux';
// actions
import * as actions from '../actions/HomePage';
// component
import Home from '../components/Home';


export default connect(state => ({
  message: state.home.message,
}), actions)(Home);
