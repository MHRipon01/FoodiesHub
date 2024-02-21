'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaClock, FaStar } from 'react-icons/fa';
import { IoIosBicycle } from 'react-icons/io';
import { IoFastFoodOutline } from 'react-icons/io5';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from '../shared/Container';

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
          // pagination={{
          //   clickable: true,
          // }}
          modules={[FreeMode]}
          className='mySwiper'
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <Image
                className='rounded-t-2xl'
                src={item?.image}
                alt='Restaurant'
                width={500}
                height={300}
              ></Image>
              <div className='space-y-2 rounded-b-2xl bg-sushi-100 px-2 py-2'>
                <div className='flex items-center justify-between'>
                  <p className='text-2xl font-semibold text-sushi-500'>
                    {item?.restaurant_name}
                  </p>
                  <p className='flex items-center gap-2 text-xl'>
                    <FaStar className='text-yellow-500' />
                    {item?.rating}
                  </p>
                </div>
                <p className='flex items-center gap-2 text-xl'>
                  <IoFastFoodOutline className='text-sushi-500' />
                  {item?.restaurant_type}
                </p>
                <p className='flex items-center gap-2'>
                  <IoIosBicycle className='text-xl text-sushi-500' />
                  {item?.delivery_fee}
                </p>
                <p className='flex items-center gap-2'>
                  <FaClock className='text-sushi-500' /> {item?.delivery_time}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default PopularRestaurants;
