import React, { Component } from 'react';
import axios from '../../axios-orders';

import Order from '../../components/Order/Order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }

    componentDidMount () {
        axios.get('/orders.json')
            .then( res => {
                let fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    });
                }
                this.setState({ loading: false, orders: fetchedOrders });
            })
            .catch( error => {
                this.setState({ loading: false });
            });
    }

    render () {
        const orders = (
            this.state.orders.map(order => {
                return <Order
                    key={order.id}
                    ingredients={order.ingredients}
                    price={order.price}
                />
            })
        );

        return (
            <div>
                {orders}
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);