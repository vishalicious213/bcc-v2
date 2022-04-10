import Link from 'next/link'
// import fs from 'fs'

export const gifts = [
    {
        id: 0,
        name: 'Comfort basket',
        price: 2500,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed enim at mi aliquam egestas. Maecenas accumsan commodo turpis, consequat efficitur metus interdum eget. Donec fermentum massa massa. Donec viverra nisl id consectetur vestibulum. Maecenas ac dapibus justo, nec commodo quam. Praesent commodo mi ut rutrum bibendum. Donec eu ultricies urna. Cras scelerisque massa leo, sed pharetra ligula egestas quis. Etiam enim nisl, pulvinar vitae lacus sed, fringilla maximus arcu. Integer vitae lectus porttitor, facilisis leo eget, aliquet leo. Suspendisse malesuada ut mauris eu scelerisque. Ut vitae mauris id tellus hendrerit molestie vel vitae libero.',
        img: '/breast-cancer-ribbon.png',
        alt: '',
        quantity: 10,
        slug: 'comfort-basket',
    },
    {
        id: 1,
        name: 'Chemo comfort bag (pattern varies)',
        price: 2500,
        desc: 'Integer et sapien lobortis, eleifend quam ut, pellentesque quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin ullamcorper odio ac diam fringilla, ac vulputate elit dignissim. Pellentesque non metus nisl. Nam placerat libero vitae rhoncus facilisis. Praesent posuere, arcu rhoncus tristique ullamcorper, magna diam tincidunt nisi, sit amet porta erat tortor sit amet nisi. Suspendisse quis blandit ligula, nec molestie purus.',
        img: '/breast-cancer-ribbon.png',
        alt: '',
        quantity: 10,
        slug: 'chemo-comfort-bag',
    },
    {
        id: 2,
        name: 'Chemo comfort bag w/blanket',
        price: 2500,
        desc: 'Nulla sodales sem in odio pretium, sit amet vestibulum neque vulputate. Vivamus vel quam justo. Nullam cursus convallis ligula, vitae dapibus neque vulputate eu. Integer rutrum tortor felis, sit amet fringilla tellus dictum vitae. Nam tempus lorem sapien, quis blandit nulla dignissim sit amet. Quisque ac suscipit ligula. Nam sollicitudin varius dui, vitae ullamcorper magna sagittis ut. Sed ac ultrices sapien. Pellentesque non orci massa. Proin rhoncus euismod metus vitae scelerisque. Proin non tempus ipsum, tincidunt lacinia urna.',
        img: '/breast-cancer-ribbon.png',
        alt: '',
        quantity: 10,
        slug: 'comfort-bag-with-blanket',
    },
]

const Shop = (props) => {
    console.log(props)
    return (
        <>
        <div id="shop">
        <h2>Make a donation and send a comfort basket or bag to a loved one</h2>

        <div className='gifts'>
            {gifts.map (gift => {
                return (
                    <div key={gift.id} className='gift'>
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
                )
            })}
        </div>

        <style jsx>
            {`
            #shop {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 90%;
                margin-left: auto;
                margin-right: auto;
                color: white;
            }

            h2 {
                margin-bottom: 2rem;
                margin-top: 2rem;
                color: #f5d3e4;
            }

            .gift {
                // outline: 1px solid red;
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-bottom: 3rem;
                padding-bottom: 2rem;
                border-bottom: 1px solid #b01e65;
            }

            .gift-img {
                // outline: 1px solid orange;
                width: 50%;
            }

            .img {
                width: 100%;
            }

            h3 {
                font-size: 2rem;
                margin-bottom: 0;
                color: #b01e65;
            }

            .gift-txt {
                // outline: 1px solid yellow;
                width: 100%;
                padding-left: 2rem;
                margin-bottom: 0;
                margin-top: 0;
            }

            .desc {
                color: gainsboro;
            }

            .pricing {
                display: flex;
                justify-content: space-between;
                padding-right: 2rem;
            }

            .pricing-detail {
                color: gainsboro;
                color: #f5d3e4;
            }

            @media only screen and (min-width: 1024px) {
                .gifts {
                    display: grid;
                    grid-gap: 2rem;
                    grid-template-columns: 1fr 1fr;
                }

                .gift {
                    flex-direction: row;
                    align-items: start;
                    // justify-content: flex-start;
                    border-bottom: none;
                }

                .gift-img {
                    width: 30%;
                    margin-top: 4rem;
                }

                h3 {
                    margin-top: 0;
                }

                .gift-txt {
                    width: 70%;
                }
            }
            `}
        </style>
        </div>
        </>
    )
}

// export const getStaticProps = async () => {
//     const directory = `${process.cwd()}/content` // returns local directory or Netlify directory
//     const filenames = fs.readdirSync(directory)
//     console.log(filenames)
//     return {
//         props: {

//         }
//     }
// }

export default Shop