'use client';

import Image from 'next/image';
import { FiShoppingCart } from 'react-icons/fi';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Container from '../shared/Container';
import Title from '../shared/Title';
import './PopularFoods.css';

const PopularFoods = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          infinite: true,
          speed: 700,
          slidesToShow: 3,
          autoplay: true,
          autoplaySpeed: 4000,
          pauseOnHover: true,
          arrows: false,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: true,
          infinite: true,
          speed: 700,
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 4000,
          pauseOnHover: true,
          arrows: false,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          infinite: true,
          speed: 700,
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 4000,
          pauseOnHover: true,
          arrows: false,
          swipeToSlide: true,
        },
      },
    ],
  };

  const foods = [
    {
      id: 1,
      name: 'Grill Chicken',
      picture: 'https://i.ibb.co/dc3t68q/Grill.jpg',
      price: 350,
      info: 'Juicy grilled chicken with a blend of spices.',
    },
    {
      id: 2,
      name: 'Burger',
      picture: 'https://i.ibb.co/nrD3njN/Burger.jpg',
      price: 300,
      info: 'Classic burger with a juicy patty, lettuce, and tomatoes.',
    },
    {
      id: 3,
      name: 'Pasta',
      picture: 'https://i.ibb.co/Df2MTyx/Pasta.jpg',
      price: 400,
      info: 'Delicious pasta with your choice of sauce and toppings.',
    },
    {
      id: 4,
      name: 'Salad',
      picture: 'https://i.ibb.co/cTwsWT7/Salad.jpg',
      price: 350,
      info: 'Fresh and crisp salad with a variety of vegetables.',
    },
    {
      id: 5,
      name: 'Caesar Salad',
      picture: 'https://i.ibb.co/hC73VXk/Caesar-Salad.jpg',
      price: 300,
      info: 'Classic Caesar salad with romaine lettuce and Caesar dressing.',
    },
    {
      id: 6,
      name: 'Pizza',
      picture: 'https://i.ibb.co/2SLWx3H/Pizza.jpg',
      price: 400,
      info: 'Delicious pizza with your favorite toppings and melted cheese.',
    },
    {
      id: 7,
      name: 'Green Salad',
      picture: 'https://i.ibb.co/85z1N90/Green-Salad.jpg',
      price: 300,
      info: 'Healthy green salad with a variety of leafy greens and vegetables.',
    },
    {
      id: 8,
      name: 'Biriyani',
      picture: 'https://i.ibb.co/wg01qs3/Biriyani.jpg',
      price: 425,
      info: 'Flavorful biriyani with aromatic rice and a mix of spices.',
    },
  ];

  return (
    <div className='mb-8 mt-12'>
      <Container>
        <Title title='Popular Foods' />
        <div className='mt-5'>
          <Slider {...settings}>
            {foods.map((food, index) => (
              <div key={index} className='box'>
                <Image
                  src={food.picture}
                  alt={food.name}
                  width={300}
                  height={200}
                  className='h-96 w-full rounded-xl object-cover'
                />
                <div className='overlay flex items-center justify-between rounded-xl'>
                  <div>
                    <h3 className='mb-2 text-xl font-bold text-white'>
                      {food.name}
                    </h3>
                    <p className='mt-2 text-lg font-bold text-yellow-400'>
                      ${food.price.toFixed(2)}
                    </p>
                  </div>
                  <div className='rounded-lg bg-fuchsia-50 p-3 shadow-lg'>
                    <a href='#'>
                      <FiShoppingCart className='h-8 w-full font-light text-sushi-400' />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default PopularFoods;
