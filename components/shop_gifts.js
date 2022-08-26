export default function ShopGifts(gifts) {
    let items=gifts.gifts
    console.log(items)

    return (
        <div id="gifts-main">
            <div>
                GIFT ITEMS
            </div>

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