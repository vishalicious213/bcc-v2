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
            <h2>Make a donation and send a comfort basket or bag to a loved one (V2)</h2>

            <div className='gifts'>
                {props.gifts.map (gift => {
                    const item = props.cart.find(i => i.id === gift.id)
                    return (
                        <div key={gift.id} className='gift' style={{backgroundImage: `url(${gift.img})`}}>
                            {/* <div className='gift-img'>
                                <img className='img' src={gift.img} alt={gift.alt} />
                            </div> */}
                            <div className='gift-txt'>
                                <div>
                                    <Link href={`/gifts/${gift.slug}`}>
                                        <a><h3>{gift.name}</h3></a>
                                    </Link>
                                    <div className='pricing'>
                                        <p><span className='pricing-detail'><b>Donation: </b></span>{`$${gift.price/100}.00`}</p>
                                        {/* <p><span className='pricing-detail'><b>Quantity available:</b></span> {gift.quantity}</p> */}
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
                    // outline: 1px solid red;
                    width: 100%;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    min-height: 75vh;
                    
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    // align-items: center;
                    // margin-bottom: 3rem;
                    // padding-bottom: 2rem;
                    border-bottom: 1px solid #b01e65;
                }

                .gifts .gift:last-child {
                    border-bottom: none;
                }

                .gift-img {
                    // outline: 1px solid orange;
                    width: 50%;
                }

                .img {
                    width: 100%;
                }

                h3 {
                    font-size: 2rem;
                    margin-bottom: 0;
                    // color: #b01e65;
                    color: deeppink;
                }

                .gift-txt {
                    // outline: 1px solid yellow;
                    width: 100%;
                    min-height: 50%;
                    padding-left: 2rem;
                    padding-right: 2rem;
                    padding-bottom: 2rem;
                    // margin-bottom: 0;
                    // margin-top: 0;
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
                    // align-items: center;
                    justify-content: space-between;
                    // outline: 1px solid blue;
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
                    // margin-bottom: 1rem;
                }

                button:hover {
                    color: white;
                    background-color: deeppink;
                }

                // button:last-child {
                //     margin-top: 1rem;
                // }

                @media only screen and (min-width: 1200px) {
                    .gifts {
                        display: grid;
                        grid-gap: 2rem;
                        grid-template-columns: 1fr 1fr 1fr;
                        margin-bottom: 3rem;
                    }

                    .gift {
                        // flex-direction: row;
                        // align-items: start;
                        // border-bottom: none;
                        // border-radius: 1rem;
                        background-color: #292c2f;
                        // margin-bottom: 0;
                    }

                    .gift:hover {
                        outline: 2px solid #b01e65;
                    }

                    .gift-img {
                        width: 30%;
                        margin-top: 2rem;
                        margin-left: 1rem;
                    }

                    .img {
                        border-top-left-radius: 1rem;
                    }

                    h3 {
                        margin-top: 1rem;
                    }

                    .gift-txt {
                        // width: 70%;
                        // margin-right: 2rem;
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