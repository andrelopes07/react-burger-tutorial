import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAIL } from '../constants/constants';
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
        default:
            return state;
    }
}

export default reducer;
