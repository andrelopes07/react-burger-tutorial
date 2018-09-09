import React, { Component } from 'react';

import CheckouSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 1,
            meat: 1
        }
    }

    render () {
        return (
            <div>
                <CheckouSummary ingredients={this.state.ingredients} />
            </div>
        );
    }
}

export default Checkout;
