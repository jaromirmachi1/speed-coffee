const MatchaSection = () => {
  return (
    <section id="shop" className="py-16 bg-[#A8C6A8]">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#EAE1CF] mb-12">
          <span className="font-display">Fallen for </span>
          <span className="font-sans font-black text-5xl md:text-6xl lg:text-7xl">MATCHA</span>
          <span className="font-display"> yet?</span>
        </h2>

        <div className="flex justify-center">
          <div className="bg-[#EAE1CF] rounded-lg p-8 shadow-lg max-w-sm">
            <img
              src="/placeholder.svg"
              alt="Speed Coffee matcha powder product"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MatchaSection;
