// Không sửa file này !!!!
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from "./reducers";

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(reducers, enhancer);

export default store;