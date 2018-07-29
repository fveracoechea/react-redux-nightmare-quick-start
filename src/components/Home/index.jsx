import React from 'react';
import logo from '../../assets/img/logo.svg';
import '../../assets/css/App.css';


const Home = (props) => {
  const { message, showMessage } = props;
  showMessage(
    `react-redux-nightmare-quick-start it has predefined a set of configurations
    of redux react router eslint, font awesome, react-router-redux, in addition to a set of 
    dependencies that are handled frequently in a reactive project`
  );
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">
          Welcome to React
        </h1>
      </header>
      <p className="App-intro">
        {message}
      </p>
    </div>
  );
};
export default Home;
