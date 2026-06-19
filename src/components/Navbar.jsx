function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-green-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <div>
          <h1 className="text-3xl font-bold text-white">
            🌍 Carbon Footprint Calculator
          </h1>

          <p className="text-green-100 text-sm mt-1">
            SDG 13 • Climate Action
          </p>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;