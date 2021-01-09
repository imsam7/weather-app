import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleWare from 'redux-saga';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './assets/css/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './shared/reducers';
import rootSaga from './shared/sagas'

var sagaMiddleWare = createSagaMiddleWare();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(rootSaga)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
