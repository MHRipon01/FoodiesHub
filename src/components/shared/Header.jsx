import Link from 'next/link';
import Container from './Container';

const Header = () => {
  return (
    <header>
      <Container>
        <div className='flex h-24 w-full items-center justify-between border-b-[1.5px] py-4'>
          <div className='text-xl'>FoodiesHub</div>
          <div></div>
          <div className='flex gap-4'>
            <Link href={''}>Login</Link>
            <Link href={''}>Sign Up</Link>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
