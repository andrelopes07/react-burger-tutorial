import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAIL, AUTH_LOGOUT, SET_AUTH_REDIRECT_PATH } from '../constants/constants';
import { updateObject } from '../../utils/updateObject';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    authRedirectPath: '/'
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case AUTH_REQUEST:
            return updateObject(state, { error: null, loading: true });
        case AUTH_SUCCESS:
            return updateObject(state, { token: action.idToken, userId: action.userId, error: null, loading: false });
        case AUTH_FAIL: 
            return updateObject(state, { error: action.error, loading: false });
        case AUTH_LOGOUT:
            return updateObject(state, { token: null, userId: null });
        case SET_AUTH_REDIRECT_PATH:
            return updateObject(state, { authRedirectPath: action.path });
        default:
            return state;
    }
}

export default reducer;
