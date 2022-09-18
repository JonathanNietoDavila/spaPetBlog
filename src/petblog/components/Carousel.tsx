import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { CarouseItem } from './CarouseItem';
import { Typography } from '@mui/material';
import { useState } from 'react';

export const Carousel = () => {
  const [images, setImages] = useState([
    {
      src: '/assets/img/carousel/item01.jpg',
      desc: '',
      title: 'Item 1',
    },
    {
      src: '/assets/img/carousel/item02.jpg',
      desc: '',
      title: 'Item 2',
    },
    {
      src: '/assets/img/carousel/item03.jpg',
      desc: '',
      title: 'Item 3',
    },
    {
      src: '/assets/img/carousel/item04.jpg',
      desc: '',
      title: 'Item 4',
    },
    {
      src: '/assets/img/carousel/item05.jpg',
      desc: '',
      title: 'Item 5',
    },
    {
      src: '/assets/img/carousel/item06.jpg',
      desc: '',
      title: 'Item 6',
    },
  ]);
  return (
    <>
      <section className='carousel'>
        <Typography gutterBottom variant='h5' component='div'>
          Conoce nuestros cachorros.
        </Typography>
        <div className='swiper-button-next'></div>
        <div className='swiper-button-prev'></div>
        <section className='carousel__wrapper'>
          <Swiper
            slidesPerView={1}
            modules={[Navigation, Thumbs]}
            grabCursor
            className='carousel__slider'
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              920: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1240: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1540: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
              1920: {
                slidesPerView: 6,
                spaceBetween: 40,
              },
            }}
          >
            {images.map(({ src, desc, title }) => (
              <SwiperSlide key={src}>
                <CarouseItem src={src} desc={desc} title={title} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </section>
    </>
  );
};
