import { createStore } from 'redux';
import reducers from '../reducers/reducers';

const appStore = createStore(reducers);

export default appStore;