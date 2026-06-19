function ResultCard({ total, darkMode }) {

  let category = "";
  let color = "";

  if (total < 200) {
    category = "Low";
    color = "text-green-500";
  } else if (total < 500) {
    category = "Moderate";
    color = "text-yellow-400";
  } else {
    category = "High";
    color = "text-red-500";
  }

  return (
    <div
      className={`max-w-lg mx-auto mt-8 p-8 rounded-2xl shadow-lg transition-all ${
        darkMode
          ? "bg-slate-800"
          : "bg-green-100"
      }`}
    >
      <h2 className="text-2xl font-bold">
        🌍 Total CO₂ Emission
      </h2>

      <div className="mt-6">
        <p className="text-5xl font-bold text-green-500">
          {total.toFixed(2)}
        </p>

        <p className="mt-2 text-lg">
          kg/month
        </p>
      </div>

      <div className="mt-6">
        <span
          className={`text-xl font-bold ${color}`}
        >
          Category : {category}
        </span>
      </div>

    </div>
  );
}

export default ResultCard;