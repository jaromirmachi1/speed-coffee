const About = () => {
  return (
    <section
      id="about"
      className="py-16 bg-[#EAE1CF] border-t border-dashed border-gray-300"
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#222222] mb-6">
              ABOUT OUR COFFEE TRUCK
            </h2>
            <p className="text-base md:text-lg font-sans text-[#222222] leading-relaxed">
              SPEED COFFEE SHOP IS A MOBILE CAFE WITH SOUL THAT TRAVELS ALL
              AROUND THE CZECH REPUBLIC. YOU CAN FIND US AT VARIOUS EVENTS,
              CORPORATE GATHERINGS, WEDDINGS, AND SPECIAL OCCASIONS WHERE WE
              BRING HIGH-QUALITY COFFEE AND MATCHA DIRECTLY TO YOU.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/placeholder.svg"
              alt="Barista holding coffee cups and pastries"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
