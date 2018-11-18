import { PURCHASE_INIT, PURCHASE_BURGER_REQUEST, PURCHASE_BURGER_SUCCESS, PURCHASE_BURGER_FAIL, FETCH_ORDERS_SUCCESS, FETCH_ORDERS_FAIL, FETCH_ORDERS_REQUEST } from '../constants/constants';
import axios from '../../axios-orders';

export const purchaseInit = () => {
    return {
        type: PURCHASE_INIT
    }
}

export const purchaseBurguerRequest = () => {
    return {
        type: PURCHASE_BURGER_REQUEST
    }
}

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    }
}

export const purchaseBurgerFail = (error) => {
    return {
        type: PURCHASE_BURGER_FAIL,
        error: error
    }
}

export const purchaseBurguer = (orderData) => {
    return dispatch => {
        dispatch(purchaseBurguerRequest());
        
        axios.post('/orders.json', orderData)
            .then(response => {
                dispatch(purchaseBurgerSuccess(response.data.name, orderData));
            })
            .catch(error => {
                dispatch(purchaseBurgerFail(error));
            });
    }
}

export const fecthOrdersRequest = () => {
    return {
        type: FETCH_ORDERS_REQUEST
    }
}

export const fecthOrdersSuccess = (orders) => {
    return {
        type: FETCH_ORDERS_SUCCESS,
        orders: orders
    }
}

export const fecthOrdersFail = (error) => {
    return {
        type: FETCH_ORDERS_FAIL,
        error: error
    }
}

export const fetchOrders = () => {
    return dispatch => {
        dispatch(fecthOrdersRequest());
        
        axios.get('/orders.json')
            .then(response => {
                let fetchedOrders = [];
                for (let key in response.data) {
                    fetchedOrders.push({
                        ...response.data[key],
                        id: key
                    });
                }
                dispatch(fecthOrdersSuccess(fetchedOrders));
            })
            .catch(error => {
                dispatch(fecthOrdersFail(error));
            });
    }
}
