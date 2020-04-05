import {applyMiddleware, combineReducers, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';
import authReducer from './reducers/auth';
import cartReducer from './reducers/cart';
import ordersReducer from './reducers/orders';
import productsReducer from './reducers/products';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
  auth: authReducer,
});

export default createStore(rootReducer, applyMiddleware(ReduxThunk));
