function TreeOffset({ total, darkMode }) {
  const trees = Math.ceil(total / 21);

  return (
    <div
      className={`max-w-lg mx-auto mt-8 p-8 rounded-2xl shadow-lg transition-all ${
        darkMode ? "bg-slate-800" : "bg-green-50"
      }`}
    >
      <h2 className="text-2xl font-bold text-green-700">
        🌳 Tree Offset Calculator
      </h2>

      <div className="mt-6">
        <p className="text-lg">
          You need approximately
        </p>

        <p className="text-5xl font-bold text-green-500 mt-4">
          {trees}
        </p>

        <p className="mt-2 text-lg">
          trees to offset your emissions
        </p>
      </div>
    </div>
  );
}

export default TreeOffset;