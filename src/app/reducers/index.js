import {combineReducers} from 'redux';
import PlayNineReducer from './play_nine_reducer';

const rootReducer = combineReducers({
	playNine: PlayNineReducer
});

export default rootReducer;

