'use client';
import { useCallback, useState } from 'react';
import { IoChevronBackOutline } from 'react-icons/io5';
import SingleSlide from './SingleSlide';

const sliderItems = [
  {
    title: 'Discover Exquisite Dishes and Culinary Delights!',
    description: 'Explore our menu and find your favorite dish!',
    image: 'https://i.postimg.cc/WbtxXxWF/burger.jpg',
  },
  {
    title: 'Seamless Online Food Delivery Experience!',
    description:
      'Order your favorite dish and get it delivered to your doorsteps!',
    image: 'https://i.postimg.cc/qv3Sdydp/pizza.jpg',
  },
  {
    title: 'Tantalize Your Taste Buds Where Every Bite is an Adventure!',
    description:
      'Experience the best of culinary delights with our exquisite dishes!',
    image: 'https://i.postimg.cc/3J6V69VL/meat.jpg',
  },
  {
    title: 'Discover Exquisite Dishes and Culinary Delights!',
    description: 'Explore our menu and find your favorite dish!',
    image: 'https://i.postimg.cc/WbtxXxWF/burger.jpg',
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const prevSlider = () =>
    setCurrent((currentSlider) =>
      currentSlider === 0 ? sliderItems.length - 1 : currentSlider - 1,
    );
  const nextSlider = useCallback(
    () =>
      setCurrent((currentSlider) =>
        currentSlider === sliderItems.length - 1 ? 0 : currentSlider + 1,
      ),
    [sliderItems.length],
  );
  return (
    <div>
      <div className='relative flex h-[300px] w-full overflow-hidden sm:h-[500px] lg:h-[700px]'>
        {/* slide controls  */}
        <div className='absolute left-0 top-1/2 z-50 flex w-full justify-between px-5'>
          <button onClick={prevSlider}>
            <IoChevronBackOutline className='rounded-full bg-sushi-400 p-2 text-4xl text-white transition-all hover:bg-sushi-500' />
          </button>
          <button onClick={nextSlider}>
            <IoChevronBackOutline className='rotate-180 rounded-full bg-sushi-400 p-2 text-4xl text-white transition-all hover:bg-sushi-500' />
          </button>
        </div>
        <div
          className={`flex transition-all duration-500`}
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {sliderItems.map((slide, index) => (
            <SingleSlide key={index} slide={slide} />
          ))}
        </div>
        {/* dot controls */}
        <div className='absolute bottom-5 left-1/2 z-50 flex -translate-x-1/2'>
          {sliderItems.map((_, index) => (
            <div
              onClick={() => setCurrent(index)}
              key={index}
              className={`mx-1 h-3 w-3 cursor-pointer rounded-full bg-sushi-300 transition-all ${index === current && 'w-8'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
