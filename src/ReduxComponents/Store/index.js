import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../Reducer';
const initialState={};
const middleWare=[thunk];
const devTools = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : null

const store =createStore(
    rootReducer,
    initialState,
    compose(
    applyMiddleware(...middleWare),
    devTools
    )
    );


export default store;