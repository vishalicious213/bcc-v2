import { createContext } from "react"
import { Context } from "./Cart"

export const ShopDirectCartContext = createContext()

const ShopDirectCart = ({children}) => {
    const exposed = {
        test: 'vish',
    }

    return <ShopDirectCartContext.Provider value={exposed}>{children}</ShopDirectCartContext.Provider>
}

export default ShopDirectCart