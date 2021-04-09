import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
// import styles from '../styles/Home.module.css'

export default function Carousel() {
    return (
        <Splide
            options={ {
                // rewind : true,
                // width  : 800,
                type: 'loop',
                gap: '1rem',
                autoplay: true,
                pauseOnHover: true,
            } }
        >
            <SplideSlide>
                <img src='/carousel-images/carousel-01.jpg' alt='Image 1'/>
            </SplideSlide>
            <SplideSlide>
                <img src='/carousel-images/carousel-02.jpg' alt='Image 2'/>
            </SplideSlide>
        </Splide>
    )
}