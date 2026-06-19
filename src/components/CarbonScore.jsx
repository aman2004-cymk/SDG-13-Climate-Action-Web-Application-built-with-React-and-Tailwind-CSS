function CarbonScore({ total }) {
  let score = "";
  let color = "";

  if (total < 200) {
    score = "A+";
    color = "text-green-700";
  } else if (total < 500) {
    score = "B";
    color = "text-yellow-600";
  } else {
    score = "C";
    color = "text-red-600";
  }

  return (
    <div className="max-w-lg mx-auto mt-8 bg-white p-6 rounded-xl shadow">

      <h2 className="text-2xl font-bold text-green-700 mb-4">
        Carbon Score
      </h2>

      <h1 className={`text-6xl font-bold ${color}`}>
        {score}
      </h1>

    </div>
  );
}

export default CarbonScore;