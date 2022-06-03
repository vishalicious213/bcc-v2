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
                <div>
                    <img src='/carousel-images/carousel-02.jpg' alt='Breast Cancer Comfort comfort basket' />
                </div>
                <div className='text-container'>
                    <p className='image-text'>Molloy University nursing students 2021</p>
                    <img src='/carousel-images/carousel-03.jpg' alt='Breast Cancer Comfort, Molloy University nursing students 2021' />
                </div>
                <div>
                    <img src='/carousel-images/carousel-21.jpg' alt='Breast Cancer Comfort event' />
                </div>
                <div>
                    <img src='/carousel-images/carousel-09.jpg' alt='Breast Cancer Comfort comfort baskets' />
                </div>
                <div>
                    <img src='/carousel-images/carousel-05.jpg' alt='Breast Cancer Comfort event' />
                </div>
                <div>
                    <img src='/carousel-images/carousel-06.jpg' alt='Breast Cancer Comfort event' />
                </div>
                <div>
                    <img src='/carousel-images/carousel-13.jpg' alt='Breast Cancer Comfort comfort basket' />
                </div>
                <div>
                    <img src='/carousel-images/carousel-10.jpg' alt='Breast Cancer Comfort, Debi Cavolo, Salt & Pepper, NY Mets' />
                </div>
                <div className='text-container'>
                    <p className='image-text'>F45 Herricks fundraiser, support BCC while sweating, 2022</p>
                    <img src='/carousel-images/carousel-24.jpg' alt='Breast Cancer Comfort event' />
                </div>
                <div>
                    <img src='/carousel-images/carousel-17.jpg' alt='Breast Cancer Comfort comfort basket' />
                </div>
                <div>
                    <img src='/carousel-images/carousel-12.jpg' alt='Breast Cancer Comfort, Debi Cavolo' />
                </div>
                <div>
                    <img src='/carousel-images/carousel-25.jpg' alt='Breast Cancer Comfort event' />
                </div>
                <div>
                    <img src='/carousel-images/carousel-19.jpg' alt='Breast Cancer Comfort comfort basket with letter from Renae Eager' />
                </div>
                <div className='text-container'>
                    <p className='image-text'>We love our volunteers!</p>
                    <img src='/carousel-images/carousel-16.jpg' alt='Breast Cancer Comfort, high school girls making maskets' />
                </div>
                <div>
                    <img src='/carousel-images/carousel-18.jpg' alt='Breast Cancer Comfort, Raven Thomas and her mother' />
                </div>
                <div className='text-container'>
                    <p className='image-text'>The Breast Cancer Comfort Foundation recently paid our practice a visit to drop off some chemotherapy comfort bags. These curated collections of personal care items are designed to help and support patients who have recently undergone surgery for breast cancer.</p>
                    <img src='/carousel-images/carousel-20.jpg' alt='Breast Cancer Comfort comfort basket' />
                </div>
                <div>
                    <img src='/carousel-images/carousel-22.jpg' alt='Breast Cancer Comfort event' />
                </div>
                <div className='text-container'>
                    <p className='image-text'>Making Strides Against Breast Cancer,<br></br> Jones Beach 2021</p>
                    <img src='/carousel-images/carousel-23.jpg' alt='Breast Cancer Comfort event' />
                </div>

                {/* <div>
                    <img src='/carousel-images/carousel-01.jpg' alt='Breast Cancer Comfort event' />
                </div> */}
                {/* <div>
                    <img src='/carousel-images/carousel-04.jpg' alt='Breast Cancer Comfort comfort baskets and chemo bags' />
                </div> */}
                {/* <div>
                    <img src='/carousel-images/carousel-07.jpg' alt='Breast Cancer Comfort basket items' />
                </div> */}
                {/* <div>
                    <img src='/carousel-images/carousel-08.jpg' alt='Breast Cancer Comfort, Sana' />
                </div> */}
                {/* <div>
                    <img src='/carousel-images/carousel-11.jpg' alt='Breast Cancer Comfort comfort basket collage' />
                </div> */}
                {/* <div>
                    <img src='/carousel-images/carousel-14.jpg' alt='Breast Cancer Comfort, Sana' />
                </div> */}
                {/* <div>
                    <img src='/carousel-images/carousel-15.jpg' alt='Breast Cancer Comfort comfort basket collage' />
                </div> */}
            </Slider>

            <style jsx>
                {`
                // @import url('https://fonts.googleapis.com/css2?family=Covered+By+Your+Grace&family=Roboto&display=swap');                
                @import url('https://fonts.googleapis.com/css2?family=Roboto&family=Shadows+Into+Light+Two&display=swap');

                img {
                    width: 100%;
                }

                .text-container {
                    position: relative;
                }

                .image-text {
                    width: 100%;
                    z-index: 2;
                    position: absolute;
                    bottom: 1rem;
                    padding: 1rem;
                    font-size: 1.5rem;
                    color: gainsboro;
                    // text-shadow: 1px 1px black;
                    // font-family: 'Covered By Your Grace', cursive;
                    font-family: 'Shadows Into Light Two', cursive;
                    background-color: rgba(0, 0, 0, .3);
                }
                `}
            </style>
        </div>
    )
}