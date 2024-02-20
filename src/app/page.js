import PopularRestaurants from '@/components/home/PopularRestaurants';
import Slider from '@/components/home/Slider';
import PopularFoods from '@/components/home/PopularFoods';

export default function Home() {
  return (
    <main>
      <Slider />
      <PopularFoods />
      <PopularRestaurants />
    </main>
  );
}
