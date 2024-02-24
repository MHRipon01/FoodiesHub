import Link from 'next/link';
import Container from './Container';

const Footer = () => {
  return (
    <footer className='mt-10'>
      <Container>
        <div>
          <div className='flex  flex-col justify-between gap-5 md:flex-row md:gap-0'>
            {/* row 1 */}
            <div className='space-y-3 md:w-[40%]'>
              {/* web name */}
              <h2 className='text-2xl font-extrabold text-sushi-500'>FoodiesHub</h2>
              <p className='font-medium'>
                FoodiesHub: A Culinary Cornucopia of Restaurant Delights
              </p>
              <div className='flex gap-1'>
                <input
                  type='email'
                  placeholder='enter email'
                  className=' w-[70%] rounded-xl border-2 border-none  border-black  bg-sushi-200 py-1 pl-2'
                />
                <button className='rounded-l-full rounded-r-full bg-sushi-600 px-5 py-2 text-white hover:bg-sushi-700'>
                  Send
                </button>
              </div>
              <p className='font-medium'>
                Welcome to FoodiesHub, where culinary wonders converge! Embark
                on a gastronomic journey.
              </p>
            </div>
            {/* row 2 */}
            <div className='space-y-3'>
              <h2 className='font-semibold'>Navigate</h2>
              <div className='flex flex-col gap-1'>
                <Link href={'/'}>
                  <h3>shop info</h3>
                </Link>
                <Link href={'/'}>
                  <h3>Shop About</h3>
                </Link>
                <Link href={'/'}>
                  <h3>shop Owner</h3>
                </Link>
                <Link href={'/'}>
                  <h3>Best Shop</h3>
                </Link>
              </div>
            </div>
            {/* row 3 */}
            <div className='space-y-3'>
              <h2 className='font-semibold'>Contact</h2>
              <div className='space-y-1'>
                <p>foodiesHub@gmail.com</p>
                <p>foodiesHub@gmail.com</p>
              </div>
            </div>
            {/* row 4 */}
            <div className='space-y-3'>
              <h2 className='font-semibold'>Follow Us</h2>
              <div className='space-y-1'>
                <h2>Twitter</h2>
                <h2>Facebook</h2>
                <h2>Linkedin</h2>
                <h2>Instagram</h2>
                <h2>Youtube</h2>
              </div>
            </div>
          </div>
          <div className='mt-10 md:mt-16'>
            <hr className='border border-black' />
            <div className='mt-5 flex flex-col-reverse  justify-between gap-2 text-center md:flex-row md:items-center'>
              <h2 className=''>Copyright © 2024 - All right reserved</h2>
              <div className='flex flex-wrap justify-center gap-2 text-lg font-medium md:gap-5'>
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
