import PopularRestaurants from '@/components/home/PopularRestaurants';
import Slider from '@/components/home/Slider';
import PopularFoods from '@/components/home/PopularFoods';
import Faq from '@/components/home/Faq';

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
