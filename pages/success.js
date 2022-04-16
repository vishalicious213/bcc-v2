import { useEffect } from "react"
import useCart from "../hooks/useCart"

const Success = () => {
    const { clearCart } = useCart()

    // empty the cart's contents after a successful Stripe payment
    useEffect(() => {
        clearCart()
    }, [])

    return (
        <div className='success'>
            <h2>Payment successful</h2>
            <p>Thank you for your purchase!</p>

            <style jsx>
                {`
                .success {
                    color: white;
                }
                `}
            </style>
        </div>
    )
}

export default Success