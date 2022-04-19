import { gifts } from '../../content/gifts'
import useCart from '../../hooks/useCart'
import GiftsCarousel from '../../components/gifts-carousel'

const gift = gifts[0]

export default function ComfortBasket() {
    const { cart, addItemToCart, removeItemFromCart } = useCart()
    const item = cart.find(i => i.id === 0)

    return (
        <div className='gift'>
            <div className='gift-txt'>
                <h1>{gift.name}</h1>
                <div className='pricing'>
                    <p><span className='pricing-detail'><b>Donation:</b></span><span className='detail'> {`$${gift.price/100}.00`}</span></p>
                    <p><span className='pricing-detail'><b>Quantity in cart:</b></span><span className='detail'> {item ? item.qty : 0}</span></p>
                </div>
            </div>

            <section className='carousel'>
                <GiftsCarousel />
            </section>

            <p className='gift-txt'>{gift.desc}</p>

            <div className='buttons'>
                <button onClick={() => addItemToCart(gift)}>Add to cart</button>
                <button onClick={() => removeItemFromCart(gift.id)}>Remove from cart</button>
            </div>
            
            <style jsx>
                {`
                .gift {
                    color: gainsboro;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-bottom: 3rem;
                }
                
                .gift-txt {
                    width: 100%;
                    padding-left: 2rem;
                    padding-right: 2rem;
                    margin-bottom: 0;
                    margin-top: 0;
                }

                h1 {
                    font-size: 2rem;
                    margin-bottom: 0;
                    color: #b01e65;
                }

                .pricing {
                    display: flex;
                    justify-content: space-between;
                    padding-right: 2rem;
                    width: 100%;
                }
                
                .pricing-detail {
                    color: gainsboro;
                    color: #f5d3e4;
                }

                .detail {
                    font-size: 1.5rem;
                }

                .buttons {
                    width: 100%;
                    padding-left: 2rem;
                    padding-right: 2rem;
                    margin-bottom: 0;
                    margin-top: 1rem;
                }

                button {
                    color: gainsboro;
                    background-color: #b01e65;
                    border: none;
                    font-size: 1.5rem;
                    width: 100%;
                    padding: .5rem 0;
                    border-radius: 1rem;
                    margin-top: 1rem;
                }

                button:hover {
                    color: white;
                    background-color: deeppink;
                }

                .carousel {
                    width: 90%;
                    padding: 1rem 0 2rem 0;
                    position: relative;
                }
                `}
            </style>
        </div>
    )
}