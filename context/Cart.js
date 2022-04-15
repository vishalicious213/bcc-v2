import { createContext } from "react/cjs/react.production.min"
import { useState, useEffect } from "react"

export const Context = createContext()

const Cart = ({ children }) => {
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
            // if item not in cart, add to cart (item quantity = 1)
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

    const exposed = {
        cart,
        addItemToCart,
        removeItemFromCart
    }

    return <Context.Provider value={exposed}>{children}</Context.Provider>
}

export default Cart