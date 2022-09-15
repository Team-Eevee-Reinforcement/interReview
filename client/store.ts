import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, Store } from "redux"
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers/reducer';

const store = createStore(
    reducers, 
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
