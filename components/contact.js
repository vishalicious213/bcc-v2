export default function ContactForm() {
    return (
        <div>
            <form id='contact-form' name='contact-form' method='POST' data-netlify='true'>
                <input type='hidden' name='form-name' value='contact-form' />
                <p>Leave a message!</p>
                <input
                    id='name'
                    name='name'
                    type='text'
                    placeholder='name'
                />
                <input
                    id='email'
                    name='email'
                    type='email'
                    placeholder='email'
                />
                <input
                    id='phone'
                    name='phone'
                    type='text'
                    placeholder='phone'
                />
                <textarea
                    id='message'
                    name='message'
                    rows='4'
                    cols='50'
                    placeholder='message'
                />
                <button type='submit'>Submit</button>
            </form>

            <style jsx>
                {`
                form {
                    color: white;
                }
                `}
            </style>
        </div>
        
    )
}