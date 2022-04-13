import { useState, useEffect } from 'react'

const useCart = () => {
    const [cart, setCart] = useState([])
    // if there's already a cart, load it
    const getInitialCart = () => JSON.parse(localStorage.getItem('cart'))

    useEffect(() => {
        // when page first loads, if there's a cart, load it
        const initialCart = getInitialCart()
        if (initialCart) {
            setCart(initialCart)
        }
    }, [])

    useEffect(() => {
        // save cart to local storage if a change is made
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    // takes item ID and quantity. quantity defaults to 1 if none passed in.
    const addItemToCart = (id, qty = 1) => {
        // check if item being added is already in cart
        const item = cart.find(i => i.id === id)

        if (item) {
            // if item is in cart and same item is added, increase quantity
            item.qty += qty
            setCart([...cart])
        } else {
            setCart([...cart, { id, qty }])
        }
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