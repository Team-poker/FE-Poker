import { combineReducers } from 'redux';
import mainReducer from "../../../redux/store/reducers/mainReducer";


const rootReducer = combineReducers({
  mainReducer,
});
export default rootReducer;
