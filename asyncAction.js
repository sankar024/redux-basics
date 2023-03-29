const redux = require('redux');
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const applyMiddleware = redux.applyMiddleware;
const axios = require('axios')
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()
const thunkMiddleware = require('redux-thunk').default

const initialState = {
    loading : false,
    user : [],
    error : ""
}

const FETCH_USER_REQUESTED = 'FETCH_USER_REQUESTED';
const FETCH_USER_SUCCESSFULLY = 'FETCH_USER_SUCCESSFULLY';
const FETCH_USER_FAILED = 'FETCH_USER_FAILED';

const fetchUserRequest = () => {
    return {
        type : FETCH_USER_REQUESTED
    }
}

const fetchUserSuccess = (user) => {
    return {
        type : FETCH_USER_SUCCESSFULLY,
        payload: user
    }
}

const fetchUserFailed = (error) => {

    return {
        type : FETCH_USER_FAILED,
        payload: error
    }
}

const reducer = (state = initialState , action) =>{
    console.log(action)
    switch (action.type){
        case FETCH_USER_REQUESTED:
        return {
            ...state, loading : true
        }
        case FETCH_USER_SUCCESSFULLY:
        return {
            ...state, loading: false, user : action.payload
        }
        case FETCH_USER_FAILED:
            return {
                ...state, loading: false, user : [], error : action.payload
            }

        default:
        return state
    }
}

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const user = response.data.map((user) => user.id);
        dispatch(fetchUserSuccess(user));
      })
      .catch((error) => {
        dispatch(fetchUserFailed(error.message));
      });
  };
};

const store = createStore(reducer,applyMiddleware(thunkMiddleware,logger))
 store.subscribe(()=>{})

store.dispatch(fetchUsers())



