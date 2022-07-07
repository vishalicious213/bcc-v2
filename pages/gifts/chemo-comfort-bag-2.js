import { gifts } from '../../content/gifts'
import useCart from '../../hooks/useCart'
import GiftsCarousel from '../../components/gifts-carousel'
import Link from 'next/link'

const gift = gifts[2]

const BagStyles = () => {
    return (
        <div>
            <p>Available in the following styles:</p>
            
            <div className='selections'>
                <div className='bag-style bag-1'>1</div>
                <div className='bag-style bag-2'>2</div>
                <div className='bag-style bag-3'>3</div>
            </div>

            <style jsx>
                {`
                .selections {
                    display: flex;
                    justify-content: space-around;
                    min-width: 310px;
                    max-width: 50%;
                }

                .bag-style {
                    height: 100px;
                    width: 100px;
                    color: black;
                    font-size: 2rem;
                    font-weight: 600;
                    text-align: center;
                    line-height: 100px;
                }

                .bag-style:hover {
                    outline: 2px solid hotpink;
                }

                .bag-1 {
                    background-image: url('/gifts/chemo-comfort-bag-12.jpg');
                    background-position: center;
                }

                .bag-2 {
                    background-image: url('/gifts/chemo-comfort-bag-13.jpg');
                    background-position: center;
                }

                .bag-3 {
                    background-image: url('/gifts/chemo-comfort-bag-14.jpg');
                    background-position: center;
                }
                `}
            </style>
        </div>
    )
}

export default function ChemoComfortBag() {
    const { cart, addItemToCart, removeItemFromCart } = useCart()
    const item = cart.find(i => i.id === 2)

    return (
        <div className='gift'>
            <div className='gift-txt'>
                <h1>{gift.name}</h1>
            </div>

            <div className='top'>
                <section className='carousel'>
                    <GiftsCarousel pics='chemoComfortBags2' />
                </section>

                <div className='gift-txt gift-desc'>{gift.desc}</div>
            </div>


            {/* <div className='gift-txt'>
                <BagStyles />
                <p><span className='pricing-detail'><b>Donation:</b></span><span className='detail'> {`$${gift.price/100}.00`}</span></p>
            </div>             */}

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

                .top {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
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
                    max-width: 375px;
                    // display: flex;
                    // flex-direction: column;
                    display: grid;
                    grid-template-rows: 1fr 1fr;
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

                @media only screen and (min-width: 1024px) {
                    .top {
                        flex-direction: row;
                        justify-content: space-around;
                        padding-left: 1rem;
                        padding-right: 1rem;
                    }

                    .gift-desc {
                        // outline: 1px solid red;
                        width: 50%;
                    }

                    .carousel {
                        // outline: 1px solid orange;
                        width: 40%;
                        margin: 0 auto;
                    }
                }
                `}
            </style>
        </div>
    )
}