import { useState } from "react"

const useShopDirectCart = () => {
    const [shopDirectCart, setShopDirectCart] = useState([])

    const addItemToShopDirectCart = (id, qty = 1) => {
        setShopDirectCart([...shopDirectCart, { id, qty }])
    }

    const removeItemFromShopDirectCart = (id) => {
        const newShopDirectCart = shopDirectCart.filter(item => {
            return item.id != id
        })
    }

    return {
        shopDirectCart,
    }
}

export default useShopDirectCart