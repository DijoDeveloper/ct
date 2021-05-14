import Immutable from 'seamless-immutable';
/**
 * request form reducer action execute based on types
 * @param {initialState it cannot change} state 
 * @param {default actions} action 
 */

/**
 * set initial state as immutable
 */
const AuthState = Immutable({
    UserInfo: {
        email: '',
        mobile: ''
    },
    LoginDetails: {
        loginStatus: false
    }
});

export default function AuthReducer(state = AuthState, actions = {}) {
    return {
        ...state,
        [actions.index]: {
            ...state[actions.index],
            ...actions.data
        }

    }
}




