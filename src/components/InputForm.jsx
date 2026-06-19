import { useState } from "react";

function InputForm({ calculateEmission, darkMode }) {
  const [electricity, setElectricity] = useState("");
  const [distance, setDistance] = useState("");
  const [fuel, setFuel] = useState("petrol");
  const [waste, setWaste] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    calculateEmission({
      electricity,
      distance,
      fuel,
      waste,
    });
  };

  const handleReset = () => {
    setElectricity("");
    setDistance("");
    setFuel("petrol");
    setWaste("");
  };

  return (
    <div
      className={`max-w-lg mx-auto mt-8 p-8 rounded-2xl shadow-lg transition-all ${
        darkMode ? "bg-slate-800" : "bg-white"
      }`}
    >
      <form onSubmit={handleSubmit} className="space-y-5">

        <input
          type="number"
          placeholder="Electricity Consumption (kWh)"
          value={electricity}
          onChange={(e) => setElectricity(e.target.value)}
          required
          className={`w-full p-4 rounded-xl border outline-none focus:ring-2 focus:ring-green-500 transition-all ${
            darkMode
              ? "bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
              : "bg-white border-gray-300 text-black placeholder:text-gray-500"
          }`}
        />

        <input
          type="number"
          placeholder="Daily Travel Distance (km)"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          required
          className={`w-full p-4 rounded-xl border outline-none focus:ring-2 focus:ring-green-500 transition-all ${
            darkMode
              ? "bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
              : "bg-white border-gray-300 text-black placeholder:text-gray-500"
          }`}
        />

        <select
          value={fuel}
          onChange={(e) => setFuel(e.target.value)}
          className={`w-full p-4 rounded-xl border outline-none focus:ring-2 focus:ring-green-500 transition-all ${
            darkMode
              ? "bg-slate-700 border-slate-600 text-white"
              : "bg-white border-gray-300 text-black"
          }`}
        >
          <option value="petrol">Petrol</option>
          <option value="diesel">Diesel</option>
          <option value="public">Public Transport</option>
        </select>

        <input
          type="number"
          placeholder="Waste Generated (kg)"
          value={waste}
          onChange={(e) => setWaste(e.target.value)}
          required
          className={`w-full p-4 rounded-xl border outline-none focus:ring-2 focus:ring-green-500 transition-all ${
            darkMode
              ? "bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
              : "bg-white border-gray-300 text-black placeholder:text-gray-500"
          }`}
        />

        <button
          type="submit"
          className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold p-4 rounded-xl transition-all"
        >
          Calculate
        </button>

        <button
          type="button"
          onClick={handleReset}
          className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold p-4 rounded-xl transition-all"
        >
          Reset
        </button>

      </form>
    </div>
  );
}

export default InputForm;