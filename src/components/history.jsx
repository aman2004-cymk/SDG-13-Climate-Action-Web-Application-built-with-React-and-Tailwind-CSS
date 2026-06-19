function History({ history, darkMode }) {
  return (
    <div
      className={`max-w-3xl mx-auto mt-8 p-8 rounded-2xl shadow-lg transition-all ${
        darkMode ? "bg-slate-800" : "bg-white"
      }`}
    >
      <h2 className="text-2xl font-bold text-green-700 mb-6">
        📜 Calculation History
      </h2>

      <table className="w-full overflow-hidden rounded-xl">

        <thead>
          <tr className="bg-green-700 text-white">
            <th className="p-4">#</th>
            <th className="p-4">Emission (kg/month)</th>
          </tr>
        </thead>

        <tbody>
          {history.map((item, index) => (
            <tr
              key={index}
              className={`text-center border-b ${
                darkMode
                  ? "border-slate-700"
                  : "border-gray-200"
              }`}
            >
              <td className="p-4">
                {index + 1}
              </td>

              <td className="p-4">
                {item.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default History;