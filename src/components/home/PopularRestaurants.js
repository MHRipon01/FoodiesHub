'use client';
import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from '../shared/Container';
import Title from '../shared/Title';
import PopularRestaurant from './PopularRestaurant';

const PopularRestaurants = () => {
  const [items, setItems] = useState([]);
  const [slidesPerView, setSlidesPerView] = useState(3);
  useEffect(() => {
    fetch('restaurant.json')
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  useEffect(() => {
    if (window.innerWidth < 768) {
      setSlidesPerView(1);
    } else if (window.innerWidth < 1024) {
      setSlidesPerView(2);
    } else {
      setSlidesPerView(3);
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    });
    return () => window.removeEventListener('resize', () => {});
  }, []);
  return (
    <div className='my-5'>
      <Container>
        <Title title={'Popular Restaurant'} />
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode]}
          className='mySwiper'
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <PopularRestaurant item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default PopularRestaurants;
