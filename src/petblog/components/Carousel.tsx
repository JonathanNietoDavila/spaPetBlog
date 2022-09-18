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
      src: 'https://res.cloudinary.com/dv1tlnr1p/image/upload/v1663544567/petblog/item01_orzc88.jpg',
      desc: '',
      title: 'Item 1',
    },
    {
      src: 'https://res.cloudinary.com/dv1tlnr1p/image/upload/v1663544567/petblog/item03_epzwor.jpg',
      desc: '',
      title: 'Item 2',
    },
    {
      src: 'https://res.cloudinary.com/dv1tlnr1p/image/upload/v1663544567/petblog/item05_wjphph.jpg',
      desc: '',
      title: 'Item 3',
    },
    {
      src: 'https://res.cloudinary.com/dv1tlnr1p/image/upload/v1663544568/petblog/item02_ctglmb.jpg',
      desc: '',
      title: 'Item 4',
    },
    {
      src: 'https://res.cloudinary.com/dv1tlnr1p/image/upload/v1663544567/petblog/item04_lmibu5.jpg',
      desc: '',
      title: 'Item 5',
    },
    {
      src: 'https://res.cloudinary.com/dv1tlnr1p/image/upload/v1663544567/petblog/item06_aymawp.jpg',
      desc: '',
      title: 'Item 6',
    },
    {
      src: 'https://res.cloudinary.com/dv1tlnr1p/image/upload/v1662602462/petblog/ybvapxeso0yvmhmikdll.jpg',
      desc: '',
      title: 'Item 7',
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
                <CarouseItem
                  src={src}
                  desc={desc}
                  title={title}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </section>
    </>
  );
};
