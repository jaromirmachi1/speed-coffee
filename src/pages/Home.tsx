import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Locations from "../components/Locations";
import EventBooking from "../components/EventBooking";
import MatchaSection from "../components/MatchaSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#EAE1CF]">
      <Header />
      <main>
        <Hero />
        <About />
        <Locations />
        <EventBooking />
        <MatchaSection />
      </main>
    </div>
  );
};

export default Home;
