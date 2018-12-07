import reducer from '../auth';
import {} from '../../actions/auth';
import { AUTH_SUCCESS } from '../../constants/constants';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    authRedirectPath: '/'
}

describe('Auth Reducer', () => {
    it('Should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('Should store the token after login', () => {
        const authSuccessAction = {
            type: AUTH_SUCCESS,
            idToken: 'someToken',
            userId: 'someUserId'
        }

        const updatedState = {
            token: 'someToken',
            userId: 'someUserId',
            error: null,
            loading: false,
            authRedirectPath: '/'
        }

        expect(reducer(initialState, authSuccessAction)).toEqual(updatedState);
    });
});
