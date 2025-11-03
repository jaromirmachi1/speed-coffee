const EventBooking = () => {
  return (
    <section id="reserve" className="py-16 bg-[#EAE1CF]">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#222222] mb-6">
              DO YOU HAVE AN EVENT WHERE YOU'D LIKE US TO BE?
            </h2>
            <p className="text-base md:text-lg font-sans text-[#222222] leading-relaxed mb-6">
              Get in touch with us and let's bring good vibes, high-quality
              coffee, and matcha to your special occasion. We promise an
              unforgettable experience that will make your event memorable.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/placeholder.svg"
              alt="Outdoor event with coffee van and people"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="text-center">
          <p className="text-base md:text-lg font-sans text-[#222222] mb-4">
            Book us for your next event
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-[#EAE1CF] border-2 border-[#222222] rounded-full font-sans font-medium text-[#222222] hover:bg-[#222222] hover:text-[#EAE1CF] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#222222] focus:ring-offset-2"
          >
            here
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventBooking;
