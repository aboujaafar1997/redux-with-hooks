import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
//init state facultatif
//explecation : chof db f reducer kayn  create store par default tatchof ach ay rad liha case @@INIT 
//ila makancg aydoz l case l default alors ila kant undifaned ach taydir tay loh initState dyal createstore f initState dyal reducer
// rad lbal f combineReducers smiya lifih hiya likhas tkon f init state
///                      hadi litahti
const initialState = { mycountappNormal: { count: 55 }, mycountappDouble: { count: 30 } };
const store = createStore(rootReducer, initialState, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__()));
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

