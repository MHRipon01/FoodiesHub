import Link from 'next/link';

const Drawer = ({ setOpenDrawer, user }) => {
  return (
    <div className='absolute right-0 min-h-[100vh] w-[70vw] bg-california-50 p-4 text-sushi-900 lg:w-[30vw]'>
      <div className='flex justify-end'>
        <button onClick={() => setOpenDrawer(false)}>X</button>
      </div>

      {user && (
        <div className='flex items-center gap-3'>
          <img
            src='https://media.newyorker.com/photos/644ab20d87ae684cabca21f2/master/pass/knight-Erling-Haaland.jpg'
            alt=''
            className='h-12 w-12 rounded-full'
          />

          <div className='flex flex-col'>
            <span>Hello, Sayed </span>
            <span className='text-sm text-sushi-600'>93, 2/B, Panchlaish</span>
          </div>
        </div>
      )}

      {user ? (
        <div className='mt-6 flex flex-col'>
          <Link className='my-[2px] lg:my-1' href='/'>
            Profile
          </Link>
          <Link className='my-[2px] lg:my-1' href='/'>
            Order History
          </Link>
          <Link className='my-[2px] lg:my-1' href='/'>
            Current Orders
          </Link>
          <Link className='my-[2px] lg:my-1' href='/'>
            Favorites
          </Link>
          <Link className='my-[2px] lg:my-1' href='/'>
            Log Out
          </Link>
        </div>
      ) : (
        <div className='mt-6 flex flex-col'>
          <div className='my-3 flex w-full rounded-full bg-sushi-100 px-2 py-2 lg:hidden'>
            <input
              type='text'
              placeholder='Enter Your Address Here'
              className='mx-2 w-full bg-transparent outline-none placeholder:text-sushi-800'
            />
            <button>s</button>
          </div>
          <Link href='/'>Login</Link>
          <Link href='/'>Sign Up</Link>
        </div>
      )}
    </div>
  );
};

export default Drawer;
