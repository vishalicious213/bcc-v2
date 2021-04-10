import React from 'react'
import Head from 'next/head'
import Slider from 'react-slick'

export default function Carousel() {
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
                    charset="UTF-8"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                />
            </Head>

            <Slider {...settings}>
                <div>
                    <img src='/carousel-images/carousel-01.jpg' alt='BCC event' />
                </div>
                <div>
                    <img src='/carousel-images/carousel-02.jpg' alt='BCC basket' />
                </div>
                <div>
                    <img src='/carousel-images/carousel-03.jpg' alt='BCC event' />
                </div>
                <div>
                    <img src='/carousel-images/carousel-04.jpg' alt='Crafting materials' />
                </div>
                <div>
                    <img src='/carousel-images/carousel-05.jpg' alt='BCC event' />
                </div>
                <div>
                    <img src='/carousel-images/carousel-06.jpg' alt='BCC event' />
                </div>
                <div>
                    <img src='/carousel-images/carousel-07.jpg' alt='Crafting materials' />
                </div>
                <div>
                    <img src='/carousel-images/carousel-08.jpg' alt='Salt & pepper' />
                </div>
                <div>
                    <img src='/carousel-images/carousel-09.jpg' alt='BCC baskets' />
                </div>
                <div>
                    <img src='/carousel-images/carousel-10.jpg' alt='BCC event' />
                </div>
                <div>
                    <img src='/carousel-images/carousel-11.jpg' alt='BCC basket' />
                </div>
                <div>
                    <img src='/carousel-images/carousel-12.jpg' alt='BCC event' />
                </div>
                <div>
                    <img src='/carousel-images/carousel-13.jpg' alt='BCC basket' />
                </div>
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