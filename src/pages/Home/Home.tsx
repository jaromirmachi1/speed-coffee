import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import {
  Hero,
  HeroIntro,
  About,
  Locations,
  EventBooking,
  MatchaSection,
  ProductsSection,
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
        <ProductsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
