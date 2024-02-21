import Link from 'next/link';
import Container from './Container';

const Footer = () => {
  return (
    <footer>
      <Container>
        <div>
          <div className='flex  flex-col md:flex-row justify-between gap-5 md:gap-0'>
            {/* row 1 */}
            <div className='md:w-[40%] space-y-3'>
              {/* web name */}
              <h2 className='text-2xl font-extrabold'>FoodiesHub</h2>
              <p className='font-medium'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
              <div className='flex gap-2'>
                <input
                  type='email'
                  placeholder='enter email'
                  className=' w-[70%] rounded-md border-2 border-black py-1  pl-2'
                />
                <button className='rounded-l-full rounded-r-full bg-sushi-700 px-5 py-2 text-white hover:bg-sushi-600'>
                  Send
                </button>
              </div>
              <p className='font-medium'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
            </div>
            {/* row 2 */}
            <div className='space-y-3'>
              <h2 className='font-bold'>Navigate</h2>
              <div className='flex flex-col gap-1'>
                <Link href={'/'}>
                  <h3>shop info</h3>
                </Link>
                <Link href={'/'}>
                  <h3>shop info</h3>
                </Link>
                <Link href={'/'}>
                  <h3>shop info</h3>
                </Link>
                <Link href={'/'}>
                  <h3>shop info</h3>
                </Link>
              </div>
            </div>
            {/* row 3 */}
            <div className='space-y-3'>
              <h2 className='font-bold'>Contact</h2>
              <div className='space-y-1'>
                <p>foodiesHub@gmail.com</p>
                <p>foodiesHub@gmail.com</p>
              </div>
            </div>
            {/* row 4 */}
            <div className='space-y-3'>
              <h2 className='font-bold'>Follow Us</h2>
              <div className='space-y-1'>
                <h2>twitter</h2>
                <h2>facebook</h2>
              </div>
            </div>
          </div>
          <div className='md:mt-16 mt-10'>
            <hr className='border border-black' />
            <div className='flex flex-col-reverse md:flex-row  text-center justify-between mt-5 md:items-center gap-2'>
              <h2 className=''>Copyright © 2024 - All right reserved</h2>
              <div className='flex flex-wrap gap-2 md:gap-5 text-lg font-medium justify-center'>
               <Link href={'/'}>About</Link>
               <Link href={'/'}>blog</Link>
               <Link href={'/'}>Contact</Link>
               <Link href={'/'}>Faq</Link>
               <Link href={'/'}>Faq</Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
