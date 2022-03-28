const products = [
    {
        id: 0,
        name: 'Comfort basket',
        price: 2500,
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed enim at mi aliquam egestas. Maecenas accumsan commodo turpis, consequat efficitur metus interdum eget. Donec fermentum massa massa. Donec viverra nisl id consectetur vestibulum. Maecenas ac dapibus justo, nec commodo quam. Praesent commodo mi ut rutrum bibendum. Donec eu ultricies urna. Cras scelerisque massa leo, sed pharetra ligula egestas quis. Etiam enim nisl, pulvinar vitae lacus sed, fringilla maximus arcu. Integer vitae lectus porttitor, facilisis leo eget, aliquet leo. Suspendisse malesuada ut mauris eu scelerisque. Ut vitae mauris id tellus hendrerit molestie vel vitae libero.',
        img: '/breast-cancer-ribbon.png',
        alt: '',
        quantity: 10,
        slug: '/comfort-basket',
    },
    {
        id: 1,
        name: 'Chemo comfort bag (pattern varies)',
        price: 2500,
        desc: 'Integer et sapien lobortis, eleifend quam ut, pellentesque quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin ullamcorper odio ac diam fringilla, ac vulputate elit dignissim. Pellentesque non metus nisl. Nam placerat libero vitae rhoncus facilisis. Praesent posuere, arcu rhoncus tristique ullamcorper, magna diam tincidunt nisi, sit amet porta erat tortor sit amet nisi. Suspendisse quis blandit ligula, nec molestie purus.',
        img: '/breast-cancer-ribbon.png',
        alt: '',
        quantity: 10,
        slug: '/chemo-comfort-bag',
    },
    {
        id: 2,
        name: 'Chemo comfort bag w/blanket',
        price: 2500,
        desc: 'Nulla sodales sem in odio pretium, sit amet vestibulum neque vulputate. Vivamus vel quam justo. Nullam cursus convallis ligula, vitae dapibus neque vulputate eu. Integer rutrum tortor felis, sit amet fringilla tellus dictum vitae. Nam tempus lorem sapien, quis blandit nulla dignissim sit amet. Quisque ac suscipit ligula. Nam sollicitudin varius dui, vitae ullamcorper magna sagittis ut. Sed ac ultrices sapien. Pellentesque non orci massa. Proin rhoncus euismod metus vitae scelerisque. Proin non tempus ipsum, tincidunt lacinia urna.',
        img: '/breast-cancer-ribbon.png',
        alt: '',
        quantity: 10,
        slug: '/comfort-bag-with-blanket',
    },
]

const Shop = () => {
    return (
        <>
        <div id="shop">
        <h2>Make a donation and send a comfort basket or bag to a loved one</h2>

        {products.map (product => {
            return (
                <div key={product.id} className='product'>
                    <div className='product-img'>
                        <img className='img' src={product.img} alt={product.alt} />
                    </div>
                    <div className='product-txt'>
                        <h3>{product.name}</h3>
                        <div className='pricing'>
                            <p>{`Price: $${product.price/100}.00`}</p>
                            <p>Quantity available: {product.quantity}</p>
                        </div>
                        <p>{product.desc}</p>
                    </div>
                </div>
            )
        })}

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
            }

            .product {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-bottom: 3rem;
                padding-bottom: 2rem;
                border-bottom: 1px solid #b01e65;
            }

            .product-img {
                width: 50%;
            }

            .img {
                width: 100%;
            }

            h3 {
                margin-bottom: 0;
            }

            .product-txt {
                width: 100%;
                padding-left: 2rem;
                margin-bottom: 0;
                margin-top: 0;
            }

            .pricing {
                display: flex;
                justify-content: space-between;
                padding-right: 2rem;
            }

            @media only screen and (min-width: 1024px) {
                .product {
                    flex-direction: row;
                    align-items: center;
                }

                .product-img {
                    width: 20%;
                }

                .product-txt {
                    width: 80%;
                }
            }
            `}
        </style>
        </div>
        </>
    )
}

export default Shop