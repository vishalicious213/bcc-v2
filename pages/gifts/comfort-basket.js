import { gifts } from '../../content/gifts'
import useCart from '../../hooks/useCart'
import GiftsCarousel from '../../components/gifts-carousel'
import Link from 'next/link'

const gift = gifts[0]

export default function ComfortBasket() {
    const { cart, addItemToCart, removeItemFromCart } = useCart()
    const item = cart.find(i => i.id === 0)

    return (
        <div className='gift'>
            <div className='gift-txt'>
                <h1>{gift.name}</h1>
            </div>

            <section className='carousel'>
                <GiftsCarousel pics='comfortBaskets' />
            </section>

            <p className='gift-txt'>{gift.desc}</p>

            <div className='gift-txt'>
                <p><span className='pricing-detail'><b>Donation:</b></span><span className='detail'> {`$${gift.price/100}.00`}</span></p>
            </div>            

            <div className='buttons'>
                <div className='add-remove'>
                    <button onClick={() => addItemToCart(gift)}>Add</button>
                    <span className='detail quantity'> {item ? item.qty : 0}</span>
                    <button onClick={() => removeItemFromCart(gift.id)}>Remove</button>
                </div>
                <Link href='/checkout'>
                            <button className='checkout'>Go to checkout</button>
                </Link>
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

                .quantity {
                    outline: 1px solid #b01e65;
                    width: 4rem;
                    text-align: center;
                }

                .buttons {
                    width: 90%;
                    display: flex;
                    flex-direction: column;
                }

                button {
                    color: gainsboro;
                    background-color: #b01e65;
                    border: none;
                    font-size: 1rem;
                    width: 30%;
                    padding: .5rem 0;
                    border-radius: 1rem;
                    margin-top: 1rem;
                }

                button:hover {
                    color: white;
                    background-color: deeppink;
                }

                .add-remove {
                    display: flex;
                    justify-content: space-between;
                    align-items: baseline;
                }

                .checkout {
                    margin: 1rem auto 0 auto;
                    width: 100%;
                }

                .carousel {
                    width: 90%;
                    padding: 1rem 0 2rem 0;
                    position: relative;
                }

                @media only screen and (min-width: 480px) {
                    button {
                        width: 40%;
                    }
                }

                @media only screen and (min-width: 800px) {
                    button {
                        font-size: 1.25rem;
                        padding: .75rem 0;
                    }
                }
                `}
            </style>
        </div>
    )
}