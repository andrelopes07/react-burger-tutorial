import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAIL, AUTH_LOGOUT } from '../constants/constants';
import axios from 'axios';

export const authRequest = () => {
    return {
        type: AUTH_REQUEST
    }
}

export const authSuccess= (token, userId) => {
    return {
        type: AUTH_SUCCESS,
        idToken: token,
        userId: userId
    }
}

export const authFail = (error) => {
    return {
        type: AUTH_FAIL,
        error: error
    }
}

export const logout = () => {
    return {
        type: AUTH_LOGOUT
    }
}

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    }
}

export const auth = (email, password, isSignUp) => {
    return dispatch => {
        dispatch(authRequest());

        const url = isSignUp ? 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDXVJtf25bnhgeQb30gYuSR7pvFsQ9FnPw' :
            'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDXVJtf25bnhgeQb30gYuSR7pvFsQ9FnPw';


        const authData = {
            email: email, 
            password: password, 
            returnSecureToken: true
        }

        axios.post(url, authData)
            .then(response => {
                console.log(response);
                dispatch(authSuccess(response.data.idToken, response.data.localId));
                dispatch(checkAuthTimeout(response.data.expiresIn));
            })
            .catch(error => {
                console.log(error);
                dispatch(authFail(error.response.data.error));
            });
    }
}