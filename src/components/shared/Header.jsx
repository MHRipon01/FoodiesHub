import Link from 'next/link';
import Container from './Container';

const Header = () => {
  return (
    <header className='sticky top-0 bg-sushi-400 text-california-50'>
      <div className='absolute right-0 min-h-[100vh] w-[70vw] bg-california-50 lg:hidden'></div>
      <Container>
        <div className='flex h-24 w-full items-center justify-between border-b-[1.5px] py-4'>
          <div className='text-2xl'>FoodiesHub</div>
          <div></div>
          <div className='flex gap-4'>
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
        </div>
      </Container>
    </header>
  );
};

export default Header;
