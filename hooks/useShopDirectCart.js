import { useContext } from "react"
import { ShopDirectCartContext } from "../context/ShopDirectCart"

const useShopDirectCart = () => useContext(ShopDirectCartContext)

export default useShopDirectCart