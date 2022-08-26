export default function ShopGifts(gifts) {
    let items=gifts.gifts
    console.log(items)

    return (
        <div id="gifts-main">
            <div>GIFT ITEMS</div>
            <section className='gifts'>
                    {items.map(item =>
                        <div key={item.id} className='gift'>
                            <h2>{item.name}</h2>
                            <p>Donation: ${item.price/100}.00</p>
                            <p>{item.short}</p>
                            <p>{item.desc}</p>
                        </div>
                    )}
                </section>            

            <style jsx>
                {`
                #gifts-main {
                    color: gainsboro;
                }
                `}
            </style>
        </div>
    )
}