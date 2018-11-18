import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAIL } from '../constants/constants';

export const authRequest = () => {
    return {
        type: AUTH_REQUEST
    }
}

export const authSuccess= (authData) => {
    return {
        type: AUTH_SUCCESS,
        authData: authData
    }
}

export const authFail = (error) => {
    return {
        type: AUTH_FAIL,
        error: error
    }
}

export const auth = (email, password) => {
    return dispatch => {
        dispatch(authRequest());
    }
}