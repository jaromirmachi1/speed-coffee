import Container from "../../../components/Container";
import { locations } from "../utils/locations";
import Img2and3 from "../../../assets/Img2and3.png";
import TextRevealLines from "../../../lib/TextRevealLines";

const Locations = () => {
  return (
    <section id="events" className="py-16 bg-beige">
      <Container>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative max-w-xl md:max-w-2xl mx-auto md:mx-0">
            <img
              src={Img2and3}
              alt="Speed Coffee sign and drinks"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>

          <div className="text-right md:text-left">
            <h2
              className="text-3xl md:text-4xl lg:text-[64px] !font-['Agright'] font-normal text-dark leading-[1] mb-6"
              style={{ lineHeight: 1 }}
            >
              WHERE CAN YOU FIND US?
            </h2>
            <ul
              className="space-y-3 text-base md:text-lg lg:text-[24px] !font-['Manrope'] text-dark"
              style={{
                fontFamily: "Manrope, sans-serif",
                fontWeight: 400,
                lineHeight: 1.0,
              }}
            >
              {locations.map((location, index) => (
                <TextRevealLines key={index} delay={index * 0.06}>
                  <li className="flex items-center justify-end md:justify-start">
                    <span className="mr-2">•</span>
                    {location}
                  </li>
                </TextRevealLines>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Locations;
