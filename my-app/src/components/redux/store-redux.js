import { combineReducers, legacy_createStore as createStore} from 'redux'
import dialogsReducer from './dialogsReducer'
import profileReducer from './profileReducer'


let reducers = combineReducers({//смешиваем все редюсеры 
  dialogsReducer,
  profileReducer
})

let store = createStore(reducers)


console.log( store)
console.log( store.getState())
console.log( store.getState().profileReducer)

console.log( store.dispatch)

export default store;
