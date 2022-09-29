import { useState } from "react"

const useShopDirectCart = () => {
    const [shopDirectCart, setShopDirectCart] = useState([])

    const addItemToShopDirectCart = (id, qty = 1) => {
        const item = shopDirectCart.find(i => i.id === id)
        
        if (item) {
            item.qty += qty
            setShopDirectCart([...shopDirectCart])
        } else {
            setShopDirectCart([...shopDirectCart, { id, qty }])
        }
    }

    const removeItemFromShopDirectCart = (id) => {
        const newShopDirectCart = shopDirectCart.filter(item => {
            return item.id != id
        })
        setShopDirectCart(newShopDirectCart)
    }

    return {
        shopDirectCart,
        addItemToShopDirectCart,
        removeItemFromShopDirectCart,
    }
}

export default useShopDirectCart