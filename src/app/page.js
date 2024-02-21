import Faq from '@/components/home/Faq';
import PopularFoods from '@/components/home/PopularFoods';
import PopularRestaurants from '@/components/home/PopularRestaurants';
import Slider from '@/components/home/Slider';
import Upcomming from '@/components/home/Upcomming';

export default function Home() {
  return (
    <main className='h-[120vh]'>
      <Slider />
      <PopularFoods />
      <PopularRestaurants />
      <Upcomming />
      <Faq />
    </main>
  );
}
