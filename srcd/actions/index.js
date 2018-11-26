import api from '../utils/api';
import errors from '../utils/errors';

export const TEST = 'TEST'

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const QUOTE_REQUEST = 'QUOTE_REQUEST'
export const QUOTE_SUCCESS = 'QUOTE_SUCCESS'
export const QUOTE_FAILURE = 'QUOTE_FAILURE'

export const STORE_MY_DATA = 'STORE_MY_DATA'

export const OPEN_SIGNIN = 'OPEN_SIGNIN'
export const OPEN_SIGNUP = 'OPEN_SIGNUP'
export const CLOSE_SIGNIN = 'CLOSE_SIGNIN'
export const CLOSE_SIGNUP = 'CLOSE_SIGNUP'


// acction creators
export function test() {
  return {
    type: TEST
  }
}

export function openSignin() {
  return {
    type: OPEN_SIGNIN
  }
}
export function closeSignin() {
  return {
    type: CLOSE_SIGNIN
  }
}
export function openSignup() {
  return {
    type: OPEN_SIGNUP
  }
}
export function closeSignup() {
  return {
    type: CLOSE_SIGNUP
  }
}

function requestLogin(creds) {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  }
}

function receiveLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_token: user.id_token
  }
}

function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
  }
}

function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  }
}

function storeMyData(data) {
  return {
    type: STORE_MY_DATA,
    data: data
  }
}


// bound action creators
export function logoutUser() {
    return dispatch => {
      
      return api.deleteSession()
        .then(response =>
          console.log(`logout: ${response}`))
        .catch(err => console.log("Error: ", err))
        .then(result => {
          dispatch(requestLogout())
          localStorage.removeItem('id_token')
          localStorage.removeItem('access_token')
          dispatch(receiveLogout())

          window.location.reload()
        })
    }
}

export function loginUser(creds) {
  
    return dispatch => {
      dispatch(requestLogin(creds))
  
      // user: サーバからの json 本体
      return api.createSession(creds.username, creds.password)
      .then(result =>  {
        if (!result.ok) {
          dispatch(loginError(result.message));
          return Promise.reject(result);
        } else {
          localStorage.setItem('id_token', result.id_token);
          //localStorage.setItem('access_token', user.access_token)
          dispatch(receiveLogin(result));

          window.location.reload()
        }
      })
    }
}

export function getMyInfo() {

  return dispatch => {
    return api.getMyInfo().then(result => {
      let data = result
      console.log(result)
      dispatch(storeMyData(data))
    })
  }
}

