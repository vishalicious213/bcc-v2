const Cancelled = () => {
    return (
        <div className='cancelled'>
            <h2>Payment cancelled!</h2>
            <p>You have not been charged.</p>

            <style jsx>
                {`
                .cancelled {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    color: gainsboro;
                    margin-top: 4rem;
                    margin-bottom: 4rem;
                }

                h2 {
                    color: white;
                    margin-bottom: 0;
                }

                p {
                    margin-bottom: 0;
                }
                `}
            </style>
        </div>
    )
}

export default Cancelled