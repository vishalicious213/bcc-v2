import React from 'react'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
// import styles from '../styles/Home.module.css'

export default function Carousel() {
    return (
        <CarouselProvider
            naturalSlideWidth={449}
            naturalSlideHeight={449}
            isIntrinsicHeight
            totalSlides={12}
            visibleSlides={1}
            isPlaying
        >
            <Slider>
                <Slide index={0}><img src='/carousel-images/carousel-01.jpg' /></Slide>
                <Slide index={1}><img src='/carousel-images/carousel-02.jpg' /></Slide>
                <Slide index={2}><img src='/carousel-images/carousel-03.jpg' /></Slide>
                <Slide index={3}><img src='/carousel-images/carousel-04.jpg' /></Slide>
                <Slide index={4}><img src='/carousel-images/carousel-05.jpg' /></Slide>
                <Slide index={5}><img src='/carousel-images/carousel-06.jpg' /></Slide>
                <Slide index={6}><img src='/carousel-images/carousel-07.jpg' /></Slide>
                <Slide index={7}><img src='/carousel-images/carousel-08.jpg' /></Slide>
                <Slide index={8}><img src='/carousel-images/carousel-09.jpg' /></Slide>
                <Slide index={9}><img src='/carousel-images/carousel-10.jpg' /></Slide>
                <Slide index={10}><img src='/carousel-images/carousel-11.jpg' /></Slide>
                <Slide index={11}><img src='/carousel-images/carousel-12.jpg' /></Slide>
            </Slider>
        </CarouselProvider>
    )
}