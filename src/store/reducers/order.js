import { PURCHASE_BURGER_SUCCESS, PURCHASE_BURGER_FAIL, PURCHASE_BURGER_REQUEST, PURCHASE_INIT, FETCH_ORDERS_REQUEST, FETCH_ORDERS_SUCCESS, FETCH_ORDERS_FAIL } from '../constants/constants';
import { updateObject } from '../../utils/updateObject';

const initialState = {
    orders: [],
    loading: false,
    purchased: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case PURCHASE_INIT:
            return updateObject(state, { purchased: false });
        case PURCHASE_BURGER_REQUEST:
            return updateObject(state, { loading: true });
        case PURCHASE_BURGER_SUCCESS:
            const newOrder = {
                ...action.orderData,
                id: action.orderId
            }
            return updateObject(state, { orders: state.orders.concat(newOrder), loading: false, purchased: true });
        case PURCHASE_BURGER_FAIL:
            return updateObject(state, { loading: false });
        case FETCH_ORDERS_REQUEST:
            return updateObject(state, { loading: false });
        case FETCH_ORDERS_SUCCESS:
            return updateObject(state, { orders: action.orders, loading: false });
        case FETCH_ORDERS_FAIL:
            return updateObject(state, { loading: false });
        default:
            return state;
    }
}

export default reducer;
