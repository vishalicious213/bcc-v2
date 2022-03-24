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
                    <img src='/carousel-images/carousel-01.jpg' alt='Breast Cancer Comfort event' />
                </div>
                <div>
                    <img src='/carousel-images/carousel-02.jpg' alt='Breast Cancer Comfort comfort basket' />
                </div>
                <div>
                    <img src='/carousel-images/carousel-03.jpg' alt='Breast Cancer Comfort, high school students making baskets' />
                </div>
                <div>
                    <img src='/carousel-images/carousel-04.jpg' alt='Breast Cancer Comfort comfort baskets and chemo bags' />
                </div>
                <div>
                    <img src='/carousel-images/carousel-05.jpg' alt='Breast Cancer Comfort event' />
                </div>
                <div>
                    <img src='/carousel-images/carousel-06.jpg' alt='Breast Cancer Comfort event' />
                </div>
                <div>
                    <img src='/carousel-images/carousel-07.jpg' alt='Breast Cancer Comfort basket items' />
                </div>
                <div>
                    <img src='/carousel-images/carousel-08.jpg' alt='Breast Cancer Comfort, Sana' />
                </div>
                <div>
                    <img src='/carousel-images/carousel-09.jpg' alt='Breast Cancer Comfort comfort baskets' />
                </div>
                <div>
                    <img src='/carousel-images/carousel-10.jpg' alt='Breast Cancer Comfort, Debi Cavolo, Salt & Pepper, NY Mets' />
                </div>
                <div>
                    <img src='/carousel-images/carousel-11.jpg' alt='Breast Cancer Comfort comfort basket collage' />
                </div>
                <div>
                    <img src='/carousel-images/carousel-12.jpg' alt='Breast Cancer Comfort, Debi Cavolo' />
                </div>
                <div>
                    <img src='/carousel-images/carousel-13.jpg' alt='Breast Cancer Comfort comfort basket' />
                </div>
                <div>
                    <img src='/carousel-images/carousel-14.jpg' alt='Breast Cancer Comfort, Sana' />
                </div>
                <div>
                    <img src='/carousel-images/carousel-15.jpg' alt='Breast Cancer Comfort comfort basket collage' />
                </div>
                <div>
                    <img src='/carousel-images/carousel-16.jpg' alt='Breast Cancer Comfort, high school girls making maskets' />
                </div>
                <div>
                    <img src='/carousel-images/carousel-17.jpg' alt='Breast Cancer Comfort comfort basket' />
                </div>
                <div>
                    <img src='/carousel-images/carousel-18.jpg' alt='Breast Cancer Comfort, Raven Thomas and her mother' />
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