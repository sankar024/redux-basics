const redux = require('redux');
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducer = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()
const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCK = 'CAKE_RESTOCK';
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCK = 'ICECREAM_RESTOCK'

function orderCake(){
    return{
        type : CAKE_ORDERED
    }
}

function reOrderCake(qty = 1){
    return{
        type : CAKE_RESTOCK,
        payload : qty
    }
}
function iceCreamOrder(qty = 1){
    return{
        type : ICECREAM_ORDERED,
        payload : qty
    }
}

function iceCreamReOrder(qty = 1){
    return{
        type : ICECREAM_RESTOCK,
        payload : qty
    }
}

// (previousState, action) = newState

// const initialState = {
//     numberOfCakes : 10,
//     numberOfIceCreams : 10
// }



const initialCakeState = {
    numberOfCakes : 10
}

const initialIcecreamState = {
    numberOfIceCreams : 10
}

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
      case CAKE_ORDERED:
        return {
          ...state,
          numberOfCakes: state.numberOfCakes - 1,
        };
      case CAKE_RESTOCK:
        return {
          ...state,
          numberOfCakes: state.numberOfCakes + action.payload,
        };
        case ICECREAM_ORDERED:
          return {
            ...state,
            numberOfCakes: state.numberOfCakes - 1,
          };
      default:
        return state;
    }
};

const icecreamReducer = (state = initialIcecreamState, action) => {
    switch (action.type) {
      case ICECREAM_ORDERED:
        return {
          ...state,
          numberOfIceCreams: state.numberOfIceCreams - 1,
        };
      case ICECREAM_RESTOCK:
        return {
          ...state,
          numberOfIceCreams: state.numberOfIceCreams + action.payload,
        };
        case CAKE_ORDERED:
          return {
            ...state,
            numberOfIceCreams: state.numberOfIceCreams - 1,
          };

      default:
        return state;
    }
};

const rootReducer = combineReducer({
    cake : cakeReducer,
    iceCream : icecreamReducer
})

const store = createStore(rootReducer)
console.log('Initial State',store.getState());
const unsubscribe = store.subscribe((
  clg
)=>{})

// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(reOrderCake(3))

const actions = bindActionCreators({orderCake, reOrderCake, iceCreamOrder, iceCreamReOrder}, store.dispatch)
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.reOrderCake(3);
actions.iceCreamOrder()
actions.iceCreamReOrder(1)

