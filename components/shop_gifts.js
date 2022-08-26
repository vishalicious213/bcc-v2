export default function ShopGifts(gifts) {
    let items=gifts.gifts
    // console.log(items)

    return (
        <div id="gifts-main">
            <h2>Make a donation and send a comfort basket or bag to a loved one</h2>

            <section className='gifts'>
                    {items.map(item =>
                        <div key={item.id} className='gift' style={{backgroundImage: `url(${item.img})`}}>
                            <h3>{item.name}</h3>
                            <p className='pricing-detail'><b>Donation:</b> <span className='price'>${item.price/100}.00</span></p>
                            <p>{item.short}</p>
                            <p>{item.desc}</p>
                        </div>
                    )}
                </section>            

            <style jsx>
                {`
                #gifts-main {
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

                h3 {
                    font-size: 1.75rem;
                    margin-bottom: 0;
                    color: deeppink;
                }  
                
                .pricing-detail {
                    color: gainsboro;
                    color: #f5d3e4;
                }

                .price {
                    color: white;
                }

                @media only screen and (min-width: 800px) {
                    .gifts {
                        display: grid;
                        grid-gap: 2rem;
                        grid-template-columns: 1fr 1fr;
                        margin-bottom: 3rem;
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