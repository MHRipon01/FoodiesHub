import Faq from '@/components/home/Faq';
import PopularFoods from '@/components/home/PopularFoods';
import PopularRestaurants from '@/components/home/PopularRestaurants';
import Slider from '@/components/home/Slider';

export default function Home() {
  return (
    <main>
      <Slider />
      <PopularFoods />
      <PopularRestaurants />
      <Faq />
    </main>
  );
}
