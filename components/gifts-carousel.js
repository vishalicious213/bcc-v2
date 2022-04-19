import React from 'react'
import Head from 'next/head'
import Slider from 'react-slick'

let pics

const comfortBaskets = [
    {id: 0, img: '/gifts/comfort-basket-01.jpg', alt: 'comfort basket with animal'},
    {id: 1, img: '/gifts/comfort-basket-02.jpg', alt: 'comfort basket with dark tulle'},
    {id: 2, img: '/gifts/comfort-basket-03.jpg', alt: 'comfort basket with reusable shopping bag'},
    {id: 3, img: '/gifts/comfort-basket-01.jpg', alt: 'comfort basket with animal'},
    {id: 4, img: '/gifts/comfort-basket-02.jpg', alt: 'comfort basket with dark tulle'},
    {id: 5, img: '/gifts/comfort-basket-03.jpg', alt: 'comfort basket with reusable shopping bag'},
    // {id: 0, img: '/gifts/comfort-basket-01.jpg', alt: ''}
]

const chemoComfortBags = [
    {id: 0, img: '/gifts/chemo-comfort-bag-01.jpg', alt: 'chemo comfort bag'},
    {id: 1, img: '/gifts/chemo-comfort-bag-02.jpg', alt: 'chemo comfort bag'},
    {id: 2, img: '/gifts/chemo-comfort-bag-03.jpg', alt: 'chemo comfort bag'},
    {id: 3, img: '/gifts/chemo-comfort-bag-04.jpg', alt: 'chemo comfort bag'},
    {id: 4, img: '/gifts/chemo-comfort-bag-05.jpg', alt: 'chemo comfort bag'},
    {id: 5, img: '/gifts/chemo-comfort-bag-06.jpg', alt: 'filled chemo bag'},
    {id: 6, img: '/gifts/chemo-comfort-bag-07.jpg', alt: 'filled chemo bag'},
    {id: 7, img: '/gifts/chemo-comfort-bag-08.jpg', alt: 'chemo comfort bag'},
    {id: 8, img: '/gifts/chemo-comfort-bag-09.jpg', alt: 'chemo comfort bag'},
    {id: 9, img: '/gifts/chemo-comfort-bag-10.jpg', alt: 'chemo comfort bag'},
    {id: 10, img: '/gifts/chemo-comfort-bag-11.jpg', alt: 'chemo comfort bag'},
    // {id: 0, img: '/gifts/comfort-basket-01.jpg', alt: ''}
]

const chemoBagWithBlanket = [
    {id: 0, img: '/gifts/chemo-bag-blanket-01.jpg', alt: 'chemo bag with water bottle and blanket'},
    {id: 1, img: '/gifts/chemo-bag-blanket-02.jpg', alt: 'chemo bag with blanket contents'},
    {id: 2, img: '/gifts/chemo-bag-blanket-03.jpg', alt: 'chemo bag with blanket'},
    {id: 3, img: '/gifts/chemo-bag-blanket-04.jpg', alt: 'chemo bag with blanket'},
    // {id: 0, img: '/gifts/comfort-basket-01.jpg', alt: ''}
]

export default function GiftsCarousel(props) {
    if (props.pics === 'comfortBaskets') {pics = comfortBaskets}
    if (props.pics === 'chemoComfortBags') {pics = chemoComfortBags}
    if (props.pics === 'chemoBagWithBlanket') {pics = chemoBagWithBlanket}

    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        speed: 600,
        autoplaySpeed: 0,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };

    return (
        <div className='body'>
            <Head>
                <link
                    rel="stylesheet"
                    type="text/css"
                    charSet="UTF-8"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                />
            </Head>

            <Slider {...settings}>
                {pics.map (pic => {
                    return (
                        <div key={pic.id}>
                            <img src={pic.img} alt={pic.alt} />
                        </div>                        
                    )
                })}
            </Slider>

            <style jsx>
                {`
                img {
                    width: 96%;
                }
                `}
            </style>
        </div>
    )
}