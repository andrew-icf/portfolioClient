import { combineReducers } from 'redux';
import ContactInfoReducer from './reducer_contactInfo';

const rootReducer = combineReducers({
  info: ContactInfoReducer
});

export default rootReducer;
