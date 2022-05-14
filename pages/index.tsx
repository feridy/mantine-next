import { HomeSwiper } from '../components/Swiper/HomeSwiper';
import { InspriationCard } from '../components/InspirationCard/InspriationCard';
import { ContactUSForm } from '../components/ConcentUs/ContactUSForm';

export default function HomePage() {
  return (
    <>
      <HomeSwiper />
      <InspriationCard />
      <ContactUSForm />
    </>
  );
}
