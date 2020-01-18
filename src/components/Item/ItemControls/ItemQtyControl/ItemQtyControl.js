import React from 'react'
import Button from '../../../Ui/Button/Button'

const ItemQtyControl = () => {
    return (
        <div className="d-flex">
            <Button btnType="Rounded">+</Button>
            <Button btnType="Rounded">-</Button>
        </div>
    )
}

export default ItemQtyControl
