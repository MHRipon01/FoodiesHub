'use client';
import Link from 'next/link';
import { useState } from 'react';
import Container from './Container';
import Drawer from './Drawer';

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [user, setUser] = useState(true);
  return (
    <header className='sticky top-0 bg-sushi-400 text-california-50'>
      {openDrawer && <Drawer setOpenDrawer={setOpenDrawer} user={user} />}
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

          {!user ? (
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
          ) : (
            <div className='flex gap-4'>
              <Link href={''}>
                <button className='px-3 py-2'>Cart</button>
              </Link>

              <button className='px-3 py-2' onClick={() => setOpenDrawer(true)}>
                Open
              </button>
            </div>
          )}

          <div className='lg:hidden'>
            <button onClick={() => setOpenDrawer(true)}>Open</button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
