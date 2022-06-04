import {AuthActionTypes, All} from '../actions/auth.action'

export interface State {
  // is a user authenticated?
  isAuthenticated: boolean;
  // if authenticated, there should be a user object
  user: any | null;
  // error message
  errorMessage:   string | null;
}

//login Initialization
export const initialState: State = {
    isAuthenticated: false,
    user: null,
    errorMessage: null
};

export function AuthReducer (state = initialState, action: All ) {
  switch (action.type) {
    case AuthActionTypes.LOGIN_SUCCESS:
      return {...state, isAuthenticated:true, user: {email:action.payload.email, token:action.payload.token}}
    case AuthActionTypes.LOGIN_FAILUER:
      return {...state,isAuthenticated:false,errorMessage: action.payload}
    case AuthActionTypes.SignUp:
      return {...state, isAuthenticated:true}
    case AuthActionTypes.SIGNUP_SUCCESS:
      return {...state, isAuthenticated:true, user: action.payload}     
    case AuthActionTypes.Products_Success:
      return {...state, user: action.payload} 
    case AuthActionTypes.Products_Fail:
      return {...state,user: action.payload.error }     
    case AuthActionTypes.LogOut:
      return state
    default: 
      return {...state}
  }
}

