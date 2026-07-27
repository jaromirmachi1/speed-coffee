"use client";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import {
  Hero,
  HeroIntro,
  About,
  Locations,
  EventBooking,
  MatchaSection,
  ProductsSection,
  ScrollVelocity,
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
        <section
          className="bg-beige w-full mt-16 md:mt-24 overflow-x-hidden"
          style={{
            height: "50vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "0px",
            padding: "0 100px",
          }}
        >
          <ScrollVelocity
            texts={["SPEED COFFEE", "SPEED COFFEE"]}
            velocity={120}
            className="font-agright text-white text-[72px] leading-[0] md:text-[112px] lg:text-[140px]"
            numCopies={6}
            damping={50}
            stiffness={400}
            velocityMapping={{ input: [0, 1000], output: [0, 5] }}
            parallaxClassName="parallax"
            scrollerClassName="scroller"
          />
        </section>
      </main>
      <div className="-mx-4 sm:-mx-6 lg:-mx-8">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
