import React from 'react'
import Button from '../../../Ui/Button/Button'

const ItemQtyControl = () => {
    return (
        <div className="d-flex">
            <Button btnType="Qty">+</Button>
            <Button btnType="Qty">-</Button>
        </div>
    )
}

export default ItemQtyControl
