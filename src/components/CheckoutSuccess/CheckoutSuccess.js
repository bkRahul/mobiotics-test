import React from 'react'
import Button from '../Ui/Button/Button'

const CheckoutSuccess = props => {
    return (
        <div className="text-center">
            <h3>Order Placed Successfully</h3>
            <Button clicked={props.purchaseSucess} >Shop More</Button>
        </div>
    )
}

export default CheckoutSuccess