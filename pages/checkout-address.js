import useCart from '../hooks/useCart'
import Link from 'next/link'

const CheckoutAddress = () => {
    const { shipAddress, setShipAddress } = useCart()

    const handleChange = event => {
        setShipAddress({ ...shipAddress, [event.target.name]: event.target.value });
    };

    // let formName = document.getElementById("name").value
    // let formCompany = document.getElementById("company").value
    // let formStreet1 = document.getElementById("street1").value
    // let formStreet2 = document.getElementById("street2").value
    // let formCity = document.getElementById("city").value
    // let formState = document.getElementById("state").value
    // let formZip = document.getElementById("zip").value

    return (
        <div className='checkout'>
            <h1>Checkout</h1>

            <div className='shipping'>
                <h2>Enter destination address:</h2>

                <form className='address-form'>
                    <label htmlFor="name">
                        <input 
                            className='field' 
                            type="text" 
                            id="name" 
                            name="name" 
                            placeholder='name'
                            value={shipAddress.name}
                            onChange={event => handleChange(event)}
                        />
                    </label>

                    <label htmlFor="company">
                        <input 
                            className='field' 
                            type="text" 
                            id="company" 
                            name="company" 
                            placeholder='company'
                            value={shipAddress.company}
                            onChange={event => handleChange(event)}
                        />
                    </label>

                    <label htmlFor="street1">
                        <input 
                            className='field' 
                            type="text" 
                            id="street1" 
                            name="street1" 
                            placeholder='address 1'
                            value={shipAddress.street1}
                            onChange={event => handleChange(event)}
                        />
                    </label>

                    <label htmlFor="street2">
                        <input 
                            className='field' 
                            type="text" 
                            id="street2" 
                            name="street2" 
                            placeholder='address 2'
                            value={shipAddress.street2}
                            onChange={event => handleChange(event)}
                        />
                    </label>

                    <label htmlFor="city">
                        <input 
                            className='field' 
                            type="text" 
                            id="city" 
                            name="city" 
                            placeholder='city'
                            value={shipAddress.city}
                            onChange={event => handleChange(event)}
                        />
                    </label>

                    <div className='state-zip'>
                        <label htmlFor="state">
                            <input 
                                className='field' 
                                type="text" 
                                id="state" 
                                name="state" 
                                placeholder='state'
                                value={shipAddress.state}
                                onChange={event => handleChange(event)}
                            />
                        </label>

                        <label htmlFor="zip">
                            <input 
                                className='field' 
                                type="text" 
                                id="zip" 
                                name="zip" 
                                placeholder='zip code'
                                value={shipAddress.zip}
                                onChange={event => handleChange(event)}
                            />
                        </label>
                    </div>
                </form>
            </div>

            <div className='checkout-body'>
                <Link href='/checkout-shipping'>
                    <div className='pay-button'>
                        <button onClick={() => setShipAddress({
                            name: formName,
                            company: formCompany,
                            street1: formStreet1,
                            street2: formStreet2,
                            city: formCity,
                            state: formState,
                            zip: formZip
                        })}>Choose Shipping Service</button>
                    </div>
                </Link>
                <button onClick={() => console.log('Shipping Address', shipAddress)}>CHECK BUTTON CONTEXT</button>
            </div>

            <style jsx>
                {`
                .address-form {
                    display: flex;
                    flex-direction: column;
                }

                .state-zip {
                    display: flex;
                    justify-content: space-between;
                }

                #state {
                    width: 50%;
                }

                #zip {
                    width: 100%;
                }

                .field {
                    background: black;
                    border: 2px solid #292c2f;
                    border-radius: .35rem;
                    margin-bottom: .5rem;
                    padding: 1rem;
                    color: gainsboro;
                    font-size: 1.1rem;
                    width: 100%;
                }

                .field:hover {
                    border: 2px solid #b01e65;
                }                

                .checkout {
                    color: gainsboro;
                }

                h1 {
                    margin: 1rem 1rem 0 1rem;
                    padding-bottom: .5rem;
                    border-bottom: 2px solid #b01e65;
                }

                .checkout-body {
                    padding: 1rem;
                }

                .pay-button {
                    display: flex;
                    justify-content: center;
                    margin-top: 1rem;
                }

                button {
                    color: gainsboro;
                    background-color: #b01e65;
                    border: none;
                    font-size: 1.5rem;
                    width: 90%;
                    padding: .5rem 0;
                    border-radius: 1rem;
                }

                button:hover {
                    color: white;
                    background-color: deeppink;
                }

                .shipping {
                    // outline: 1px solid red;
                    padding-bottom: 1rem;
                    margin: 1rem 1rem 0 1rem;
                    // width: 90%;
                    border-bottom: 2px solid #b01e65;
                }

                .shipping h2 {
                    margin-top: 0;
                }
                `}
            </style>
        </div>
    )
}

export default CheckoutAddress