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
            <h2>Payment successful!</h2>
            <p>Thank you for your donation!</p>
            <p>Your gifts are on their way.</p>

            <style jsx>
                {`
                .success {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    color: gainsboro;
                    margin-top: 4rem;
                    margin-bottom: 4rem;
                }

                h2 {
                    color: white;
                    margin-bottom: 0;
                }

                p {
                    margin-bottom: 0;
                }
                `}
            </style>
        </div>
    )
}

export default Success