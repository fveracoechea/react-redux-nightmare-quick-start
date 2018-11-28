// dependencies
import { connect } from 'react-redux';
// actions
import * as actions from '../actions/Example';
// component
import Home from '../components/Home';


export default connect(state => ({
  message: state.example.message,
  device: state.device,
  movie: state.example.movie,
  loading: state.example.loading,
}), {
  ...actions,
})(Home);
