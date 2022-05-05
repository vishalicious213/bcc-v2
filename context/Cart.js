import { createContext } from "react/cjs/react.production.min"
import { useState, useEffect } from "react"

export const Context = createContext()

const Cart = ({ children }) => {
    const [cart, setCart] = useState([]) // cart contents
    const [total, setTotal] = useState(0) // total price, for shoppingCart & /checkout page
    const [shipPrice, setShipPrice] = useState(0) // shipping cost
    const [shipAddress, setShipAddress] = useState({
        name: '',
        company: '',
        street1: '',
        street2: '',
        city: '',
        state: '',
        zip: ''
    }) // address to ship to

    // if there's already a cart, load it
    const getInitialCart = () => JSON.parse(localStorage.getItem('cart'))

    // if there's already a shipping address, load it
    const getShipTo = () => JSON.parse(localStorage.getItem('shipTo'))    

    useEffect(() => {
        // when page first loads, if there's a cart, load it
        const initialCart = getInitialCart()
        if (initialCart) {
            setCart(initialCart)
        }
    }, [])

    useEffect(() => {
        // when page first loads, if there's a shipping cost, load it
        if (shipPrice) {
            setShipPrice(shipPrice)
        }
    }, [])

    useEffect(() => {
        // when page first loads, if there's a shipping address, load it
        console.log('loading shipping address context')
        const initialShipTo = getShipTo()
        if (initialShipTo) {
            setShipAddress(initialShipTo)
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

        if (shipPrice) {
            newTotal += shipPrice
        }

        setTotal(newTotal)
    }, [cart])

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
        const item = cart.find(i => i.id === id)

        // if item is not in cart, it can't be removed, so return
        if (!item) {
            return
        }

        // if item is in cart, remove 1 of that item from qty
        if (item) {
            item.qty -= 1
            if (item.qty < 1) {item.qty = 0}
            setCart([...cart])
        }

        // if less than 1 of that item, completely remove it from cart (so no 0-count of item)
        if (item.qty < 1) {
            const newCart = cart.filter(item => {
                return item.id != id
            })
            setCart(newCart)
        }
    }

    // empty all of the cart's contents after a successful Stripe payment
    const clearCart = () => {
        localStorage.removeItem('cart')
        setCart([])
    }

    const calculateShipping = (prevShipPrice, newShipPrice) => {
        // subtract previous shipping price from total & add current shipping price
        let prevTotal = total
        let newTotal = prevTotal - prevShipPrice + newShipPrice

        setShipPrice(newShipPrice)
        setTotal(newTotal)
    }

    const exposed = {
        cart,
        addItemToCart,
        removeItemFromCart,
        total,
        clearCart,
        calculateShipping,
        shipPrice,
        shipAddress,
        setShipAddress
    }

    return <Context.Provider value={exposed}>{children}</Context.Provider>
}

export default Cart