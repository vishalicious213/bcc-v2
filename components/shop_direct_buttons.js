import useShopDirectCart from '../hooks/useShopDirectCart'

export default function ShopDirectButtons(props) {
    const { shopDirectCart, addItemToShopDirectCart, removeItemFromShopDirectCart } = useShopDirectCart()

    let selectedItems = shopDirectCart

    function findByName(items) {
        return items.name === props.name
    }
    
    const item = selectedItems.find(findByName)
    // console.log('GIFT', item)

    // console.log('shopDirectCart', shopDirectCart)
    // console.log('selectedItems', selectedItems)
    // console.log('props', props)
    // console.log('name', props.name)
    // console.log('cart[props.id]', shopDirectCart[props.id])

    return (
        <div className='buttons'>
            <button className='itemButton' onClick={() => addItemToShopDirectCart(props.id, 1, props.name)}>+</button>
            {/* <span className='itemQuantity'>{shopDirectCart[props.id] ? shopDirectCart[props.id].qty : "-"}</span> */}
            <span className='itemQuantity'>{item ? item.qty : "-"}</span>
            <button className='itemButton' onClick={() => removeItemFromShopDirectCart(props.id, props.name)}>-</button>

            <style jsx>
                {`
                .buttons {
                    display: flex;
                    justify-content: space-around;
                    width: 18rem;
                }

                .itemQuantity {
                    color: gainsboro;
                    background-color: rgba(0, 0, 0, 0.2);
                    font-size: 1.1rem;
                    width: 5rem;
                    padding: .5rem 0;
                    text-align: center;
                }

                .itemButton {
                    width: 5rem;
                }

                .button {
                    display: flex;
                    justify-content: center;
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
                `}
            </style>                                 
        </div>        
    )
}