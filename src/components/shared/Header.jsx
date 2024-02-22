'use client';
import Link from 'next/link';
import { useState } from 'react';
import Container from './Container';

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <header className='sticky top-0 bg-sushi-400 text-california-50'>
      {openDrawer && (
        <div className='absolute right-0 min-h-[100vh] w-[70vw] bg-california-50 p-4 text-sushi-900'>
          <div className='flex justify-end'>
            <button onClick={() => setOpenDrawer(false)}>X</button>
          </div>
          <div className='flex items-center gap-3'>
            <img
              src='https://media.newyorker.com/photos/644ab20d87ae684cabca21f2/master/pass/knight-Erling-Haaland.jpg'
              alt=''
              className='h-12 w-12 rounded-full'
            />

            <div className='flex flex-col'>
              <span>Hello, Sayed </span>
              <span className='text-sm text-sushi-600'>
                93, 2/B, Panchlaish
              </span>
            </div>
          </div>

          <div className='mt-6 flex flex-col'>
            <Link href='/'>Profile</Link>
            <Link href='/'>Order History</Link>
            <Link href='/'>Current Orders</Link>
            <Link href='/'>Log Out</Link>
          </div>
        </div>
      )}
      <Container>
        <div className='flex h-24 w-full items-center justify-between border-b-[1.5px] py-4'>
          <div className='text-2xl'>FoodiesHub</div>

          <div className='hidden w-1/2 rounded-full bg-sushi-300 px-4 py-2 lg:flex'>
            <span>s</span>
            <input
              type='text'
              placeholder='Enter Your Address Here'
              className='mx-2 w-full bg-transparent outline-none placeholder:text-california-50'
            />
            <button>s</button>
          </div>

          <div className='hidden gap-4 lg:flex'>
            <Link href={''}>
              <button
                className='origin-left rounded-full  p-2 px-3  transition-colors duration-300
              hover:bg-sushi-500'
              >
                Login
              </button>
            </Link>
            <Link href={''}>
              <button
                className='origin-left rounded-full bg-california-50 p-2 px-3 text-sushi-400 transition-colors duration-300
              hover:bg-sushi-100'
              >
                Sign Up
              </button>
            </Link>
          </div>

          <div className='lg:hidden'>
            <button onClick={() => setOpenDrawer(true)}>Open</button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
