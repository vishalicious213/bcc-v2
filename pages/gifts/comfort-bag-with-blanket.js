import { gifts } from '../../content/gifts'

let gift = gifts[2]

export default function ComfortBagWithBlanket() {
    // console.log(gift)
    return (
        <div className='gift'>
            <div className='gift-txt'>
                <h1>{gift.name}</h1>
                <div className='pricing'>
                    <p><span className='pricing-detail'><b>Donation: </b></span>{`$${gift.price/100}.00`}</p>
                    <p><span className='pricing-detail'><b>Quantity available:</b></span> {gift.quantity}</p>
                </div>
            </div>

            <div className='gift-img'>
                <img className='img' src={gift.img} alt={gift.alt} />
            </div>

            <p className='gift-txt'>{gift.desc}</p>
            
            <style jsx>
                {`
                .gift {
                    color: gainsboro;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-bottom: 3rem;
                }

                .gift-txt {
                    width: 100%;
                    padding-left: 2rem;
                    margin-bottom: 0;
                    margin-top: 0;
                }

                h1 {
                    font-size: 2rem;
                    margin-bottom: 0;
                    color: #b01e65;
                }

                .pricing {
                    display: flex;
                    justify-content: space-between;
                    padding-right: 2rem;
                    width: 100%;
                }
                
                .pricing-detail {
                    color: gainsboro;
                    color: #f5d3e4;
                }

                .gift-img {
                    width: 50%;
                    margin-bottom: 2rem;
                    margin-top: 1rem;
                }
                
                .img {
                    width: 100%;
                }
                `}
            </style>
        </div>
    )
}