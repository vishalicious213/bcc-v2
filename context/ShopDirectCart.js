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

    const addItemToShopDirectCart = (id, qty = 1) => {
        const item = shopDirectCart.find(i => i.id === id)
        
        if (item) {
            item.qty += qty
            setShopDirectCart([...shopDirectCart])
        } else {
            setShopDirectCart([...shopDirectCart, { id, qty }])
        }

        console.log('hook', shopDirectCart)
    }

    const removeItemFromShopDirectCart = (id) => {
        const newShopDirectCart = shopDirectCart.filter(item => {
            return item.id != id
        })
        setShopDirectCart(newShopDirectCart)
    }

    const exposed = {
        shopDirectCart,
        addItemToShopDirectCart,
        removeItemFromShopDirectCart,
    }

    return <ShopDirectCartContext.Provider value={exposed}>{children}</ShopDirectCartContext.Provider>
}

export default ShopDirectCart