function Suggestions({ total, darkMode }) {
  let suggestions = [];

  if (total < 200) {
    suggestions = [
      "♻ Continue your eco-friendly habits",
      "🌱 Support renewable energy sources",
      "🚶 Walk or cycle whenever possible",
    ];
  } else if (total < 500) {
    suggestions = [
      "💡 Reduce electricity consumption",
      "🚍 Use public transportation more often",
      "🌳 Plant trees to offset emissions",
    ];
  } else {
    suggestions = [
      "⚡ Switch to energy-efficient appliances",
      "🚲 Reduce vehicle usage and carpool",
      "♻ Minimize waste generation and recycle",
    ];
  }

  return (
    <div
      className={`max-w-lg mx-auto mt-8 p-8 rounded-2xl shadow-lg transition-all ${
        darkMode ? "bg-slate-800" : "bg-white"
      }`}
    >
      <h2 className="text-2xl font-bold text-green-700 mb-6">
        🌿 Eco-Friendly Suggestions
      </h2>

      <div className="space-y-4">
        {suggestions.map((tip, index) => (
          <div
            key={index}
            className={`p-4 rounded-xl ${
              darkMode ? "bg-slate-700" : "bg-green-50"
            }`}
          >
            {tip}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Suggestions;