import TextRevealLines from "../../../lib/TextRevealLines";
import Container from "../../../components/Container";
import aboutImg from "../../../assets/Img1.png";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 bg-beige border-t border-dashed border-gray-300"
    >
      <Container>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-dark mb-6">
              ABOUT OUR COFFEE TRUCK
            </h2>
            <TextRevealLines>
              <p className="text-base md:text-lg font-sans text-dark leading-relaxed">
                SPEED COFFEE SHOP IS A MOBILE CAFE WITH SOUL THAT TRAVELS ALL
                AROUND THE CZECH REPUBLIC. YOU CAN FIND US AT VARIOUS EVENTS,
                CORPORATE GATHERINGS, WEDDINGS, AND SPECIAL OCCASIONS WHERE WE
                BRING HIGH-QUALITY COFFEE AND MATCHA DIRECTLY TO YOU.
              </p>
            </TextRevealLines>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={aboutImg}
              alt="Barista holding coffee cups and pastries"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
