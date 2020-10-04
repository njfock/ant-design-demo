import {createStore} from 'redux'

//Action Types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export const actionTypes = {
    INCREMENT,
    DECREMENT,
}


//initial state:
const initialState = {
    counter: 0
}
//REDUCER
const operationReducer = (state = initialState, action) => {
    console.log(state, action)
    switch(action.type){
        case actionTypes.INCREMENT:
            return {...state, counter: ++state.counter}
        case actionTypes.DECREMENT:
            return {...state, counter: --state.counter}
        default:
            return state
    }
}
//STORE
const store = createStore(operationReducer)

export default store;