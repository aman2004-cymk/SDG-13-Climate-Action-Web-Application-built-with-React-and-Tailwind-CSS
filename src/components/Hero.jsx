function Hero({ darkMode }) {
  return (
    <section className="text-center py-20 px-6">

      <h1 className="text-5xl md:text-6xl font-bold text-green-700">
        Measure Your Carbon Footprint
      </h1>

      <p
        className={`mt-6 text-xl max-w-3xl mx-auto leading-8 ${
          darkMode
            ? "text-gray-300"
            : "text-gray-600"
        }`}
      >
        Track your emissions from electricity, transportation,
        and waste generation. Make smarter choices and contribute
        towards Sustainable Development Goal 13: Climate Action.
      </p>

    </section>
  );
}

export default Hero;