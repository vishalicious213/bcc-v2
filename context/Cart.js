import { createContext } from "react/cjs/react.production.min"

export const Context = createContext()

const Cart = ({ children }) => {
    const exposed = {
        test: 'vish'
    }
    return <Context.Provider value={exposed}>{children}</Context.Provider>
}

export default Cart