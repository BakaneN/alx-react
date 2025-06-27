import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import App from './App/App';
import uiReducer from './reducers/uiReducer';

// Set up the Redux store with the UI reducer
const store = createStore(
  uiReducer,
  // Redux dev tools extension support (optional, human touch)
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Render the App component inside the Provider to make the store available throughout the app
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

