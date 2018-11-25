import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAIL, AUTH_LOGOUT } from '../constants/constants';
import { updateObject } from '../utility';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false
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
        default:
            return state;
    }
}

export default reducer;
