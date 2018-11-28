import React, { Component, Fragment } from 'react';
import logo from '../../assets/img/logo.svg';
import '../../assets/css/App.css';


class Home extends Component {
  constructor(...props) {
    super(...props);
    this.goTo404 = this.goTo404.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  componentDidMount() {
    const { showMessage, fetchMovie } = this.props;
    fetchMovie();
    showMessage(`it has predefined a set of configurations
    of redux, react-router, eslint, font-awesome, react-router-redux, in addition to a set of
    dependencies that are handled frequently in a reactive project`);
  }

  handleOnClick() {
    const { showMessage } = this.props;
    showMessage('The action was dispatched');
  }

  goTo404() {
    const { pushTo404 } = this.props;
    pushTo404();
  }

  render() {
    const {
      message, device: { currentDevice, isTouch }, loading, movie,
    } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            Welcome to React
          </h1>
          <h3>
            react-redux-nightmare-quick-start
          </h3>
        </header>
        <p className="App-intro" style={{ margin: '80px' }}>
          {message}
        </p>
        <p>
          Device:
          &nbsp;
          { currentDevice }
        </p>
        <p>
          Touch:
          &nbsp;
          { isTouch.toString() }
        </p>
        <button
          onClick={this.handleOnClick}
          type="button"
          className="my-button"
        >
          dispatch an action
        </button>
        <button
          onClick={this.goTo404}
          type="button"
          className="404-button"
        >
          go to 404
        </button>
        {
          (movie.message)
            ? <p>{message}</p>
            : null
        }
        {
          (loading)
            ? <p>loading movie...</p>
            : (
              <Fragment>
                <hr />
                <h4>{movie.Title}</h4>
                <p>
                  Actors:
                  {movie.Actors}
                </p>
                <p>
                  Director:
                  {movie.Director}
                </p>
                <p>
                  Production:
                  {movie.Production}
                </p>
              </Fragment>
            )
        }
      </div>
    );
  }
}

export default Home;
