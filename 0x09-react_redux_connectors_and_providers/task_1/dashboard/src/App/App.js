import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
   const { isLoggedIn, displayDrawer, displayNotificationDrawer, hideNotificationDrawer } = this.props;

    return (
      <div className="App">
        <h1>Welcome to the Dashboard</h1>
        {isLoggedIn ? (
          <p>You are logged in!</p>
        ) : (
          <p>Please log in to continue.</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.get('isUserLoggedIn'),
	  displayDrawer: state.get('isNotificationDrawerVisible'),
  };
};

const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer
};

export { mapStateToProps };
export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {},
};

