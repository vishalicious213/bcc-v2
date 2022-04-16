import { createContext } from "react/cjs/react.production.min"
import { useState, useEffect } from "react"

export const Context = createContext()

const Cart = ({ children }) => {
    const [cart, setCart] = useState([]) // cart contents
    const [total, setTotal] = useState(0) // total price, for shoppingCart & /checkout page
    // const [isOpen, setIsOpen] = useState(false) // is shopping cart open/visible
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

        // calculate total cost of all items in cart
        let newTotal = 0
        cart.forEach((item) => {
            newTotal += item.price * item.qty
        })

        setTotal(newTotal)
    }, [cart])

    // const openCart = () => {
    //     setIsOpen(true)
    // }

    // const closeCart = () => {
    //     setIsOpen(false)
    // }

    // takes item ID and quantity. quantity defaults to 1 if none passed in.
    const addItemToCart = (product, qty = 1) => {
        // check if item being added is already in cart
        const item = cart.find(i => i.id === product.id)

        if (item) {
            // if item is in cart and same item is added, increase quantity
            item.qty += qty
            setCart([...cart])
        } else {
            // if item not in cart, add to cart (item quantity = 1)
            setCart([...cart, { ...product, qty }])
        }
    }

    // returns a new cart with items that match the ID removed
    const removeItemFromCart = (id) => {
        const newCart = cart.filter(item => {
            return item.id != id
        })
        setCart(newCart)
    }

    // empty all of the cart's contents after a successful Stripe payment
    const clearCart = () => {
        localStorage.removeItem('cart')
        setCart([])
    }

    const exposed = {
        cart,
        addItemToCart,
        removeItemFromCart,
        // openCart,
        // closeCart,
        // isOpen
        total,
        clearCart
    }

    return <Context.Provider value={exposed}>{children}</Context.Provider>
}

export default Cart