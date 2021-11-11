import { createStore } from 'redux';

import rootReducers from './reducers';

const store = createStore(rootReducer);

export default store;