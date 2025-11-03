const Locations = () => {
  const locations = [
    "CENTRUM ZELNÝ TRH, BRNO",
    "FIREMNÍ EVENTY",
    "SVATBY",
    "MĚSTSKÉ SLAVNOSTI",
    "SOUKROMÉ AKCE",
    "SPORTOVNÍ A ZÁŽITKOVÉ DNY",
  ];

  return (
    <section id="events" className="py-16 bg-[#EAE1CF]">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/placeholder.svg"
                alt="Chalkboard sign with coffee quote"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg -mt-8 md:-mt-12 ml-8 md:ml-12 relative z-10">
              <img
                src="/placeholder.svg"
                alt="Coffee van interior with drinks"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="text-right md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#222222] mb-6">
              WHERE CAN YOU FIND US?
            </h2>
            <ul className="space-y-3 font-sans text-base md:text-lg text-[#222222]">
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
      </div>
    </section>
  );
};

export default Locations;
