export default function OrderForm() {
    return (
        <div id='form-container'>
            <form id='order-form' name='order-form' method='POST' data-netlify='true'>
                <input type='hidden' name='form-name' value='order-form' />
                <h2 className='h2'>Send a comfort basket or chemo comfort bag</h2>
                <input
                    id='name'
                    name='name'
                    type='text'
                    placeholder='name'
                    className='field'
                />
                <input
                    id='email'
                    name='email'
                    type='email'
                    placeholder='email'
                    className='field'
                />
                <input
                    id='phone'
                    name='phone'
                    type='text'
                    placeholder='phone'
                    className='field'
                />
                <textarea
                    id='message'
                    name='message'
                    rows='4'
                    cols='50'
                    placeholder='message'
                    className='field'
                />
                <button className='contact-button' type='submit'>SUBMIT ORDER AND DONATION</button>
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

                .contact-button {
                    color: gainsboro;
                    font-size: 1.1rem;
                    background-color: #292c2f;
                    border: none;
                    border-radius: .35rem;
                    padding: .5rem;
                    margin-top: 1rem;
                }

                .contact-button:hover {
                    color: white;
                    background-color: #b01e65;
                    transition: .25s
                }

                .field:focus, #contact-button:focus {
                    outline: none;
                    border: 2px solid #b01e65;
                }

                @media only screen and (min-width: 1024px) {
                    form {
                        width: 90%;
                    }
                }
                `}
            </style>
        </div>
        
    )
}