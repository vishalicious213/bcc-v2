import { createContext, useState, useEffect } from "react"
import { Context } from "./Cart"

export const ShopDirectCartContext = createContext()

const ShopDirectCart = ({children}) => {
    const getInitialShopDirectCart = () => JSON.parse(localStorage.getItem('shopDirectCart'))
    const [shopDirectCart, setShopDirectCart] = useState([])

    useEffect(() => {
        const initialShopDirectCart = getInitialShopDirectCart()
        if (initialShopDirectCart) {
            setShopDirectCart(initialShopDirectCart)
        }
    }, [])

    useEffect(() => {
        // write to localStorage
        localStorage.setItem('shopDirectCart', JSON.stringify(shopDirectCart))
    }, [shopDirectCart])

    const addItemToShopDirectCart = (id, qty = 1, name) => {
        const item = shopDirectCart.find(i => i.id === id)
        // const item = shopDirectCart.find(i => i.name === name)
        console.log('add props.name', id, name)
        // console.log('add item.name', item.name)
        
        if (item) {
            item.qty += qty
            setShopDirectCart([...shopDirectCart])
        } else {
            setShopDirectCart([...shopDirectCart, { id, qty, name }])
        }

        console.log('hook', shopDirectCart)
    }

    const removeItemFromShopDirectCart = (id, name) => {
        const item = shopDirectCart.find(i => i.id === id)
        if (item) {
            console.log('item', item)
        } else {
            console.log('item does not exist')
        }
        // const item = shopDirectCart.find(i => i.name === name)
        // console.log('remove props.name', name)
        // console.log('remove item.name', item.name)

        // if item is not in cart, it can't be removed, so return
        if (!item) {
            console.log('not in cart', id, name)
            return
        }

        // if item is in cart, remove 1 of that item from qty
        if (item) {
            console.log('removing', item.id, name)
            item.qty -= 1
            // if (item.qty < 1) {
            //     console.log('setting to zero', item.id, name)
            //     item.qty = 0
            // }
            console.log('saving cart')
            setShopDirectCart([...shopDirectCart])
            console.log('cart', shopDirectCart)
        }

        if (item.qty < 0) {
            item.qty = 0
            console.log('set negative item quantity to 0')
        }

        if (item.qty === 0) {
            console.log('item quantity is 0')
            const newCart = shopDirectCart.filter(cartItem => {
                return cartItem.id != item.id
            })
            console.log('newCart', newCart)
            setShopDirectCart(newCart)
            console.log('cart after removing 0 item', shopDirectCart)
        }

        // if less that 1 of item, completely remove it from cart (so no 0-count of item)
        // console.log('HERE')
        // if (item.qty === 0) {
        //     console.log('removing zero-item from cart', item.id, name)
        //     const newShopDirectCart = shopDirectCart.filter(item => {
        //         // item.id != id
        //         item.name != name
        //     })
        //     console.log('new cart', newShopDirectCart)
        //     setShopDirectCart(newShopDirectCart)
        //     console.log('updated shopDirectCart', shopDirectCart)
        // }
    }

    const exposed = {
        shopDirectCart,
        addItemToShopDirectCart,
        removeItemFromShopDirectCart,
    }

    return <ShopDirectCartContext.Provider value={exposed}>{children}</ShopDirectCartContext.Provider>
}

export default ShopDirectCart