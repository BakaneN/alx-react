import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
   const { isLoggedIn, displayDrawer } = this.props;

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

export { mapStateToProps };
export default connect(mapStateToProps)(App);

