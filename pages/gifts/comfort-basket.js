import { gifts } from '../../components/shop'

let gift = gifts[0]

export default function ComfortBasket() {
    // console.log(gift)
    return (
        <div className='gift'>
            <h1>{gift.name}</h1>
            <p>{`Price: $${gift.price / 100}.00`}</p>
            <p>Quantity available: {gift.quantity}</p>
            <img src={gift.img} alt={gift.alt} />
            <p>{gift.desc}</p>
            
            <style jsx>
                {`
                .gift {
                    color: gainsboro;
                }
                `}
            </style>
        </div>
    )
}

// id: 0,
// name: 'Comfort basket',
// price: 2500,
// desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed enim at mi aliquam egestas. Maecenas accumsan commodo turpis, consequat efficitur metus interdum eget. Donec fermentum massa massa. Donec viverra nisl id consectetur vestibulum. Maecenas ac dapibus justo, nec commodo quam. Praesent commodo mi ut rutrum bibendum. Donec eu ultricies urna. Cras scelerisque massa leo, sed pharetra ligula egestas quis. Etiam enim nisl, pulvinar vitae lacus sed, fringilla maximus arcu. Integer vitae lectus porttitor, facilisis leo eget, aliquet leo. Suspendisse malesuada ut mauris eu scelerisque. Ut vitae mauris id tellus hendrerit molestie vel vitae libero.',
// img: '/breast-cancer-ribbon.png',
// alt: '',
// quantity: 10,
// slug: 'comfort-basket',