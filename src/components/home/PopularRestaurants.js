'use client';
import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from '../shared/Container';
import PopularRestaurant from './PopularRestaurant';

const PopularRestaurants = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch('restaurant.json')
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div>
      <Container>
        <h3 className='py-16 text-center text-7xl font-semibold text-sushi-500'>
          Popular Restaurant
        </h3>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode]}
          className='mySwiper'
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <PopularRestaurant item={item}></PopularRestaurant>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default PopularRestaurants;
