import { gifts } from '../../components/shop'

let gift = gifts[0]

export default function ComfortBasket() {
    // console.log(gift)
    return (
        <div className='gift'>
            <div className='gift-txt'>
                <h1>{gift.name}</h1>
                <div className='pricing'>
                    <p><span className='pricing-detail'><b>Price: </b></span>{`$${gift.price/100}.00`}</p>
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
                    width: 50%;
                }
                
                .pricing-detail {
                    color: gainsboro;
                    color: #f5d3e4;
                }

                .gift-img {
                    width: 50%;
                }
                
                .img {
                    width: 100%;
                }
                `}
            </style>
        </div>
    )
}

{/* <div key={gift.id} className='gift'>
<div className='gift-img'>
    <img className='img' src={gift.img} alt={gift.alt} />
</div>
<div className='gift-txt'>
    <Link href={`/gifts/${gift.slug}`}>
        <a><h3>{gift.name}</h3></a>
    </Link>
    <div className='pricing'>
        <p><span className='pricing-detail'><b>Price: </b></span>{`$${gift.price/100}.00`}</p>
        <p><span className='pricing-detail'><b>Quantity available:</b></span> {gift.quantity}</p>
    </div>
    <p className='desc'>{gift.desc}</p>
</div>
</div>


@media only screen and (min-width: 1024px) {
    .gift {
        flex-direction: row;
        align-items: center;
    }

    .gift-img {
        width: 20%;
    }

    .gift-txt {
        width: 80%;
    }
} */}