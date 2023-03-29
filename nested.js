const redux = require('redux')
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const applyMiddleware = redux.applyMiddleware
const Produce = require('immer').produce;
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

const initialState = {
    UserName: "Sankar",
    "adddress":{
        street: '25, North street',
        city: 'Tirunelveli'
    }
}

const STREET_UPDATE = "STREET_UPDATE";
const updateStreet = (street)=> {
return ({
    type: STREET_UPDATE,
    payload: street
})
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATE:
        return Produce(state, (draftCopy) =>{
            draftCopy.adddress.street = action.payload
        })
    //   return {
    //     ...state,
    //     adddress: {
    //       ...state.adddress,
    //       street: action.payload,
    //     },
    //   };

    default:
      return state;
  }
};

const store = createStore(reducer,applyMiddleware(logger));
const actions = bindActionCreators({updateStreet}, store.dispatch)

const unSubscribe = store.subscribe(() => {})

actions.updateStreet("TVL")
unSubscribe()

