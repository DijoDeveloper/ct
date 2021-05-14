import {
    applyMiddleware,
    createStore
} from 'redux';

import IndexReducer from './reducers/Index.reducer';
import thunk from 'redux-thunk';

const store = createStore(
    IndexReducer,
    applyMiddleware(thunk)
    );

export default store;