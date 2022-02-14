export default function ContactForm() {
    return (
        <div>
            <form id='contact-form' name='contact-form' method='POST' data-netlify='true'>
                <input type='hidden' name='form-name' value='contact-form' />
                <h2 className='h2'>Contact Us</h2>
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
                <button type='submit'>Submit</button>
            </form>

            <style jsx>
                {`
                form {
                    color: white;
                    display: flex;
                    flex-direction: column;
                    // outline: 1px solid red;
                }

                .field {
                    background: black;
                    border: 2px solid #923360;
                    border-radius: .35rem;
                    margin-bottom: .5rem;
                    padding: 1rem;
                    color: gainsboro;
                }

                .field:focus {
                    outline: none;
                    border: 2px solid #b01e65;
                }

                @media only screen and (min-width: 1024px) {
                    form {
                        width: 50%;
                        margin: auto;
                    }
                }
                `}
            </style>
        </div>
        
    )
}