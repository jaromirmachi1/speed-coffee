import Container from "../../../components/Container";
import { locations } from "../utils/locations";
import Img2and3 from "../../../assets/Img2and3.png";

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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-dark mb-6">
              WHERE CAN YOU FIND US?
            </h2>
            <ul className="space-y-3 font-sans text-base md:text-lg text-dark">
              {locations.map((location, index) => (
                <li
                  key={index}
                  className="flex items-center justify-end md:justify-start"
                >
                  <span className="mr-2">•</span>
                  {location}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Locations;
