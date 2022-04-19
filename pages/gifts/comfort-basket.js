import { gifts } from '../../content/gifts'
import useCart from '../../hooks/useCart'

const gift = gifts[0]
const pics = [
    {id: 0, img: '/gifts/comfort-basket-01.jpg', alt: 'comfort basket with animal'},
    {id: 1, img: '/gifts/comfort-basket-02.jpg', alt: 'comfort basket with dark tulle'},
    {id: 2, img: '/gifts/comfort-basket-03.jpg', alt: 'comfort basket with reusable shopping bag'},
    // {id: 0, img: '/gifts/comfort-basket-01.jpg', alt: ''}
]

export default function ComfortBasket() {
    const { cart, addItemToCart, removeItemFromCart } = useCart()
    // console.log(gift)
    return (
        <div className='gift'>
            <div className='gift-txt'>
                <h1>{gift.name}</h1>
                <div className='pricing'>
                    <p><span className='pricing-detail'><b>Donation: </b></span>{`$${gift.price/100}.00`}</p>
                    {/* <p><span className='pricing-detail'><b>Quantity available:</b></span> {gift.quantity}</p> */}
                </div>
                <button onClick={() => addItemToCart(gift)}>Add to cart</button>
                <button onClick={() => removeItemFromCart(gift.id)}>Remove from cart</button>
            </div>

            <div className='gift-img'>
                <img className='img' src={gift.img} alt={gift.alt} />
            </div>

            <p className='gift-txt'>{gift.desc}</p>
            
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
                    outline: 1px solid blue;
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

                .gift-img {
                    width: 50%;
                    margin-bottom: 2rem;
                    margin-top: 1rem;
                }
                
                .img {
                    width: 100%;
                }

                button {
                    color: gainsboro;
                    background-color: #b01e65;
                    border: none;
                    font-size: 1.5rem;
                    width: 100%;
                    padding: .5rem 0;
                    border-radius: 1rem;
                }

                button:hover {
                    color: white;
                    background-color: deeppink;
                }

                button:last-child {
                    margin-top: 1rem;
                }                
                `}
            </style>
        </div>
    )
}