import Link from 'next/link'
// import useCart from '../hooks/useCart'
// import fs from 'fs'

const Shop = (props) => {
    // const { cart, addItemToCart } = useCart()
    // console.log('cart:', cart)
    // console.log('props:', props)
    // console.log('shop cart', props.cart)

    const handleClick = (e) => {
        e.stopPropagation()
        console.log(props.gifts)
        // console.log(props.gifts[giftid])
        // props.add(props.gift.id)
    }

    return (
        <div id="shop">
            <h2>Make a donation and send a comfort basket or bag to a loved one</h2>

            <div className='gifts'>
                {props.gifts.map (gift => {
                    const item = props.cart.find(i => i.id === gift.id)
                    return (
                        <div key={gift.id} className='gift' style={{backgroundImage: `url(${gift.img})`}}>
                            <Link href={`/gifts/${gift.slug}`}>
                                <div className='top-overlay'></div>
                            </Link>
                            <div className='gift-txt'>
                                <div>
                                    <Link href={`/gifts/${gift.slug}`}>
                                        <a><h3>{gift.name}</h3></a>
                                    </Link>
                                    <div className='pricing'>
                                        <p><span className='pricing-detail'><b>Donation: </b></span>{`$${gift.price/100}.00`}</p>
                                    </div>
                                    <p className='desc'>{gift.short}</p>
                                </div>
                                <div className='buttons'>
                                    <button onClick={() => props.addItem(gift)}>Add to cart</button>
                                    {item ? (
                                        <button onClick={() => props.removeItem(gift.id)}>Remove</button>
                                    ) : (
                                        <></>
                                    )}
                                </div>
                                {/* <button onClick={handleClick}>Add to cart</button> */}
                            </div>
                        </div>
                    )
                })}
            </div>

            <style jsx>
                {`
                #shop {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 90%;
                    margin-left: auto;
                    margin-right: auto;
                    color: white;
                }

                h2 {
                    margin-bottom: 2rem;
                    margin-top: 2rem;
                    color: #f5d3e4;
                }

                .gift {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    border-bottom: 1px solid #b01e65;
                    min-height: 75vh;
                    margin-bottom: 2rem;
                }

                .gifts .gift:last-child {
                    border-bottom: none;
                }

                h3 {
                    font-size: 1.75rem;
                    margin-bottom: 0;
                    color: deeppink;
                }

                .top-overlay {
                    min-height: 45vh;
                    width: 100%;
                    cursor: pointer;
                }

                .gift-txt {
                    width: 100%;
                    min-height: 50%;
                    padding-left: 2rem;
                    padding-right: 2rem;
                    padding-bottom: 2rem;
                    background: rgba(0, 0, 0, 0.5);
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }

                .desc {
                    color: gainsboro;
                }

                .pricing {
                    display: flex;
                    justify-content: space-between;
                    padding-right: 2rem;
                }

                .pricing-detail {
                    color: gainsboro;
                    color: #f5d3e4;
                }

                .buttons {
                    display: flex;
                    justify-content: space-between;
                }

                button {
                    color: gainsboro;
                    background-color: #b01e65;
                    border: none;
                    font-size: 1.1rem;
                    height: 2rem;
                    width: 45%;
                    padding: .5rem 0;
                    border-radius: 1rem;
                }

                button:hover {
                    color: white;
                    background-color: deeppink;
                }

                @media only screen and (min-width: 800px) {
                    .gifts {
                        display: grid;
                        grid-gap: 2rem;
                        grid-template-columns: 1fr 1fr;
                        margin-bottom: 3rem;
                    }

                    .gift {
                        background-color: #292c2f;
                        margin-bottom: 0;
                    }

                    .gift:hover {
                        outline: 2px solid #b01e65;
                        background-size: auto;
                    }

                    .top-overlay {
                        min-height: 50%;
                    }

                    h3 {
                        margin-top: 1rem;
                    }

                    .pricing {
                        flex-direction: column;
                        margin-top: .5rem;
                    }

                    .pricing p {
                        margin-bottom: 0;
                    }

                    .pricing p:last-child {
                        margin-top: 0;
                    }
                }

                @media only screen and (min-width: 1200px) {
                    .gifts {
                        display: grid;
                        grid-gap: 2rem;
                        grid-template-columns: 1fr 1fr 1fr;
                        margin-bottom: 3rem;
                    }
                }
                `}
            </style>
        </div>
    )
}

// export const getStaticProps = async () => {
//     const directory = `${process.cwd()}/content` // returns local directory or Netlify directory
//     const filenames = fs.readdirSync(directory)
//     console.log(filenames)
//     return {
//         props: {

//         }
//     }
// }

export default Shop