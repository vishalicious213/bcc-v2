export default function ContactForm() {
    return (
        <div id='form-container'>
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
                <button id='contact-button' type='submit'>SEND MESSAGE</button>
            </form>

            <div id='map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.8108990738788!2d-73.53659328442512!3d40.74418634358251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c281a876179661%3A0xbadeec4cf4e2343b!2sBreast%20Cancer%20Comfort%20Foundation!5e0!3m2!1sen!2sus!4v1648242838531!5m2!1sen!2sus" width="100%" height="300" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <style jsx>
                {`
                #form-container {
                    border-top: 5px solid #b01e65;
                }

                #map {
                    width: 50%;
                }

                form {
                    color: white;
                    display: flex;
                    flex-direction: column;
                    width: 90%;
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

                #contact-button {
                    color: gainsboro;
                    font-size: 1.1rem;
                    background-color: #292c2f;
                    border: none;
                    border-radius: .35rem;
                    padding: .5rem;
                    margin-top: 1rem;
                }

                #contact-button:hover {
                    color: white;
                    background: #b01e65;
                    transition: .25s
                }

                .field:focus, #contact-button:focus {
                    outline: none;
                    border: 2px solid #b01e65;
                }
                
                @media only screen and (min-width: 1024px) {
                    form {
                        width: 80%;
                    }
                }
                `}
            </style>
        </div>
        
    )
}