import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import dreams from './reducers/dreams_reducer';
import dreamFormData from './reducers/dreamFormData';
import errors from './reducers/errors_reducer';

const reducers = combineReducers({
  dreams,
  dreamFormData,
  errors
});

const middleware = [thunk];

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
);
