import { useState } from "react"

const useShopDirectCart = () => {
    const [shopDirectCart, setShopDirectCart] = useState([])

    return {
        shopDirectCart,
    }
}

export default useShopDirectCart