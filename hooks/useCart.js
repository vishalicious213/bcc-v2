import { useState } from 'react'

const useCart = () => {
    const [cart, setCart] = useState([])

    // takes item ID and quantity. quantity defaults to 1 if none passed in.
    const addItemToCart = (id, qty = 1) => {
        setCart([...cart, { id, qty }])
    }

    // returns a new cart with items that match the ID removed
    const removeItemFromCart = (id) => {
        const newCart = cart.filter(item => {
            return item.id != id
        })
        setCart(newCart)
    }

    return {
        cart,
        addItemToCart,
        removeItemFromCart
    }
}

export default useCart