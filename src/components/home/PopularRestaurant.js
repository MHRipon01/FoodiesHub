import Image from 'next/image';
import { FaClock, FaStar } from 'react-icons/fa';
import { IoIosBicycle } from 'react-icons/io';
import { IoFastFoodOutline } from 'react-icons/io5';
import Container from '../shared/Container';
const PopularRestaurant = ({ item }) => {
  return (
    <div>
      <Container>
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
      </Container>
    </div>
  );
};

export default PopularRestaurant;
