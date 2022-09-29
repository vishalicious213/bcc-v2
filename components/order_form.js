import useShopDirectCart from '../hooks/useShopDirectCart'

export default function OrderForm() {
    const { shopDirectCart } = useShopDirectCart()

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
                    <div className='gift'>{shopDirectCart[0] ? shopDirectCart[0].qty : 0}
                        <span className='itemQuantity'> Comfort Basket(s)</span>
                    </div>

                    <div className='gift'>{shopDirectCart[1] ? shopDirectCart[1].qty : 0}
                        <span className='itemQuantity'> Chemo Comfort Bag(s) (style 1)</span>
                    </div>

                    <div className='gift'>{shopDirectCart[2] ? shopDirectCart[2].qty : 0}
                        <span className='itemQuantity'> Chemo Comfort Bag(s) (style 2)</span>
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
                <button className='order-button' type='submit'>SUBMIT ORDER AND MAKE DONATION</button>
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

                .gift-checkbox {
                    margin-right: .5rem;
                    margin-bottom: 1rem;
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
                        display: flex;
                        flex-direction: row;
                        justify-content: space-around;
                        margin: .5rem 0 1rem 0;
                        color: gainsboro;
                        font-size: 1.1rem;
                    }

                    .gift-checkbox {
                        margin-bottom: 0;
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