// dependencies
import { connect } from 'react-redux';
// actions
import * as actions from '../actions/Example';
// component
import Home from '../components/Home';


export default connect(state => ({
  message: state.example.message,
}), {
  ...actions,
})(Home);
