import React from 'react'
import Head from 'next/head'
import Slider from 'react-slick'

const comfortBaskets = [
    {id: 0, img: '/gifts/comfort-basket-01.jpg', alt: 'comfort basket with animal'},
    {id: 1, img: '/gifts/comfort-basket-02.jpg', alt: 'comfort basket with dark tulle'},
    {id: 2, img: '/gifts/comfort-basket-03.jpg', alt: 'comfort basket with reusable shopping bag'},
    // {id: 0, img: '/gifts/comfort-basket-01.jpg', alt: ''}
]

export default function GiftsCarousel() {
    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3.5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 0,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
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
                {comfortBaskets.map (pic => {
                    return (
                        <div id={pic.id}>
                            <img src={pic.img} alt={pic.alt} />
                        </div>                        
                    )
                })}
            </Slider>

            <style jsx>
                {`
                img {
                    width: 100%;
                }
                `}
            </style>
        </div>
    )
}