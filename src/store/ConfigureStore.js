import {createStore,combineReducers}
 from 'redux';

 import PlaceReducer from './reducers/Places'
const rootReducer=combineReducers({
            places:PlaceReducer
});

const ConfigureStore=()=>{
    return createStore(rootReducer);
}


export default ConfigureStore;