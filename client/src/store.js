import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/';

const initialState = {};
const middlewares = [thunk];

let store;

if (window.navigator.userAgent.includes('Chrome')) {
  store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middlewares),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
  );
} else {
  store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewares)),
  );
}

export default store;
