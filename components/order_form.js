import useShopDirectCart from '../hooks/useShopDirectCart'
import axios from 'axios'

export default function OrderForm(props) {
    const { shopDirectCart } = useShopDirectCart()

    // console.log('order form props', props.items)
    // console.log('order form cart', shopDirectCart)

    let selectedItems = shopDirectCart

    const basket = selectedItems.find(item => item.name === 'Comfort basket')
    const bag1 = selectedItems.find(item => item.name === 'Chemo comfort bag 1')
    const bag2 = selectedItems.find(item => item.name === 'Chemo comfort bag 2')
    // console.log(basket, bag1, bag2)

    const processPayment = async () => {
        const url = '/.netlify/functions/shop-direct-charge-card'
        const newCart = selectedItems.map(({ id, qty }) => ({
            id,
            qty,
        }))

        const { data } = await axios.post(url, { newCart })
        console.log('Process payment via Stripe')
    }

    return (
        <div id='form-container'>
            <form id='order-form' name='order-form' method='POST' data-netlify='true'>
                <input type='hidden' name='form-name' value='order-form' />
                <h2 className='h2'>Send a comfort basket or chemo comfort bag</h2>

                <div id='contact-info'>
                    <div id='sender-info'>Your Contact Information:
                        <input
                            id='name'
                            name='name'
                            type='text'
                            placeholder='your name'
                            className='field'
                        />
                        <input
                            id='email'
                            name='email'
                            type='email'
                            placeholder='your email address'
                            className='field'
                        />
                        <input
                            id='phone'
                            name='phone'
                            type='text'
                            placeholder='your phone number'
                            className='field'
                        />
                    </div>

                    <div id='recipient-info'>Recipient's Contact Information:
                        <input
                            id='recipient'
                            name='recipient'
                            type='text'
                            placeholder="recipient's name"
                            className='field'
                        />
                        <textarea
                            id='recipient_address'
                            name='recipient_address'
                            rows='4'
                            cols='50'
                            placeholder="recipient's address"
                            className='field'
                        />
                    </div>
                </div>

                <p id='gift-selector-instruction'>Selected gift(s):</p>
                <div id='gift-selector'>
                    <div className='gift'>
                        {/* <div className='gift-quantity'>{shopDirectCart[0] ? shopDirectCart[0].qty : 0}</div> */}
                        <div className='gift-quantity'>{basket ? basket.qty : 0}</div>
                        <div className='gift-name'> Comfort Basket(s)</div>
                    </div>

                    <div className='gift'>
                        {/* <div className='gift-quantity'>{shopDirectCart[1] ? shopDirectCart[1].qty : 0}</div> */}
                        <div className='gift-quantity'>{bag1 ? bag1.qty : 0}</div>
                        <div className='gift-name'> Chemo Comfort Bag(s) (style 1)</div>
                    </div>

                    <div className='gift'>
                        {/* <div className='gift-quantity'>{shopDirectCart[2] ? shopDirectCart[2].qty : 0}</div> */}
                        <div className='gift-quantity'>{bag2 ? bag2.qty : 0}</div>
                        <span className='gift-name'> Chemo Comfort Bag(s) (style 2)</span>
                    </div>
                </div>

                <textarea
                    id='message'
                    name='message'
                    rows='4'
                    cols='50'
                    placeholder='message'
                    className='field'
                />
                <button 
                    className='order-button' 
                    type='submit'
                    onClick={processPayment}
                >
                    SUBMIT ORDER AND MAKE DONATION
                </button>
            </form>

            <style jsx>
                {`
                #form-container {
                    width: 100%;
                    border-top: 5px solid #b01e65;
                    margin-bottom: 2rem;
                }
                
                form {
                    color: white;
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    margin: 1rem auto 0;
                }

                #sender-info, #recipient-info {
                    display: flex;
                    flex-direction: column;
                    margin-top: 1rem;
                    color: gainsboro;
                }

                .field {
                    background: black;
                    border: 2px solid #292c2f;
                    border-radius: .35rem;
                    margin-bottom: .5rem;
                    padding: 1rem;
                    color: gainsboro;
                }

                .field:hover {
                    border: 2px solid #b01e65;
                }

                #gift-selector {
                    display: flex;
                    flex-direction: column;
                    margin: .5rem 0 1rem 1rem;
                    color: gainsboro;
                    font-size: 1.1rem;
                }

                .gift {
                    display: flex;
                    align-items: center;
                    border: 1px solid #292c2f;
                    padding: .5rem;
                    margin-bottom: .5rem;
                }

                .gift-quantity {
                    margin-bottom: .5rem;
                    margin-right: 1rem;
                    color: pink;
                    font-size: 1.5rem;
                    width: 3rem;
                    text-align: center;
                    background-color: rgba(100, 100, 100, 0.2);
                    outline: 1px solid #292c2f;
                    border-radius: 1rem;
                }

                .gift-name {
                    color: gainsboro;
                    font-size: 1.1rem;
                }

                #name, #recipient {
                    margin-top: 1rem;
                }

                #gift-selector-instruction {
                    color: gainsboro;
                }

                .order-button {
                    color: gainsboro;
                    font-size: 1.1rem;
                    background-color: #292c2f;
                    border: none;
                    border-radius: .35rem;
                    padding: .5rem;
                    margin-top: 1rem;
                }

                .order-button:hover {
                    color: white;
                    background-color: #b01e65;
                    transition: .25s
                }

                .field:focus, #order-button:focus {
                    outline: none;
                    border: 2px solid #b01e65;
                }

                @media only screen and (min-width: 800px) {
                    #gift-selector {
                        flex-direction: row;
                        justify-content: space-around;
                        margin: .5rem 0 1rem 0;
                    }

                    .gift {
                        flex-direction: column;
                        width: 30%;
                        max-width: 210px;
                        text-align: center;
                        margin-bottom: 0;
                    }                    

                    .gift-quantity {
                        margin-right: 0;
                        width: 5rem;
                    }
                }

                @media only screen and (min-width: 1024px) {
                    form {
                        width: 90%;
                    }

                    #contact-info {
                        display: flex;
                        justify-content: space-between;
                    }

                    #sender-info, #recipient-info {
                        width: 49%;
                    }

                    #recipient_address {
                        height: 6.9rem;
                    }
                }
                `}
            </style>
        </div>
        
    )
}