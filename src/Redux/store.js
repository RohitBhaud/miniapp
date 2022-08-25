import {legacy_createStore,compose, applyMiddleware,combineReducers} from "redux"
import { reducer as AppReducer } from "./AppReducer/reducer";
import thunk from "redux-thunk"
import { reducer as AuthReducer } from "./AuthReducer/reducer";

const rootReducer = combineReducers({AppReducer,AuthReducer})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const customMiddleware = (store)=>(next)=>(action)=>{
// if(typeof action=== "function"){
//    return action(store.dispatch)
// }
//  return next(action);
// }
const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export{store}