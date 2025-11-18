import Header from "../../components/Header/Header";
import {
  Hero,
  HeroIntro,
  About,
  Locations,
  EventBooking,
  MatchaSection,
} from "./components";

const Home = () => {
  return (
    <div className="min-h-screen bg-beige">
      <Header />
      <main>
        <Hero />
        <HeroIntro />
        <About />
        <Locations />
        <EventBooking />
        <MatchaSection />
      </main>
    </div>
  );
};

export default Home;
