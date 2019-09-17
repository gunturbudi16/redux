import {createStore} from 'redux';
import rootReducer from './reducers/index';

//state pertama kita
// const state={
//     tepung:100,
//     coklat:100,
//     cherry:50
// };
// const store = createStore(()=>state);
//reducer


const store = createStore(rootReducer);
 
export default store;