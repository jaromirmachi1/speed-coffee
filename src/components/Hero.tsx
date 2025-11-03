import headerph from "../assets/headerph.png";

const Hero = () => {
  return (
    <section className="bg-[#EAE1CF] -mt-8">
      <div className="max-w-7xl mx-auto">
        <div className="pt-0 pb-0">
          <h1
            className="text-[#222222] uppercase flex justify-between items-center w-full"
            style={{
              fontFamily: "Manuka, sans-serif",
              fontSize: "330px",
              fontWeight: "500",
              lineHeight: "1",
            }}
          >
            <span>SPEED</span>
            <span>COFFEE</span>
          </h1>
        </div>

        <div className="pb-16">
          <div className="mt-4">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={headerph}
                alt="Speed Coffee mobile van with chalkboard sign"
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </div>
          </div>

          <div className="text-center max-w-4xl mx-auto mb-12">
            <p className="text-lg md:text-xl lg:text-2xl font-sans text-[#222222] leading-relaxed">
              EVERY MOMENT WITH OUR COFFEE OR MATCHA IS AN{" "}
              <span className="text-[#8B5A3C] font-bold">
                OPPORTUNITY TO CONNECT, SHARE, AND ENJOY
              </span>{" "}
              THE POSITIVE ENERGY THAT BRIGHTENS YOUR DAY.
            </p>
          </div>

          <div className="text-center">
            <a
              href="#about"
              className="inline-block text-lg font-sans font-bold text-[#222222] hover:text-[#8B5A3C] transition-colors"
            >
              DISCOVER OUR SPEED
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
