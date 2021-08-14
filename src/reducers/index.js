import { combineReducers } from 'redux';
import countReducerNormal from './countReducerNormal';
import countReducerDouble from './mycountReducerDouble';
import countReducerRandom from './countReducerRandom';

export default combineReducers({
    mycountappNormal: countReducerNormal,
    mycountappDouble: countReducerDouble,
    mycountappRandom: countReducerRandom,

});

