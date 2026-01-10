import Container from "../../../components/Container";
import TextRevealLines from "../../../lib/TextRevealLines";
import coffeeVan from "../../../assets/coffeeVan.webp";

const EventBooking = () => {
  return (
    <section id="reserve" className="py-16 bg-beige">
      <Container>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-24">
          <div>
            <h2
              className="text-3xl md:text-4xl lg:text-[64px] !font-['Agright'] font-normal text-dark leading-[1] mb-6"
              style={{ lineHeight: 1 }}
            >
              DO YOU HAVE AN EVENT WHERE YOU'D LIKE US TO BE?
            </h2>
            <TextRevealLines>
              <>
                <p
                  className="text-base md:text-lg lg:text-[24px] text-dark leading-[1.2] uppercase"
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: 400,
                    lineHeight: 1.2,
                  }}
                >
                  Get in touch with us and let's bring good vibes, high-quality
                  coffee, and matcha to your special occasion.
                </p>
                <p
                  className="text-base md:text-lg lg:text-[24px] text-dark leading-[1.2] uppercase"
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: 400,
                    lineHeight: 1.2,
                  }}
                >
                  We promise an unforgettable experience that will make your
                  event memorable.
                </p>
              </>
            </TextRevealLines>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={coffeeVan}
              alt="Outdoor event with coffee van and people"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="text-center">
          <p
            className="text-base md:text-lg lg:text-[24px] !font-['Manrope'] text-dark mb-4 uppercase"
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 400,
              lineHeight: 1.0,
            }}
          >
            Book us for your next event
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-beige border-2 border-dark rounded-full !font-['Manrope'] font-medium text-dark hover:bg-dark hover:text-beige transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-dark focus:ring-offset-2"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            here
          </a>
        </div>
      </Container>
    </section>
  );
};

export default EventBooking;
