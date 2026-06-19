import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Dashboard({ total, darkMode }) {
  const data = [
    {
      name: "Carbon Emission",
      value: total,
    },
    {
      name: "Remaining Capacity",
      value: Math.max(500 - total, 0),
    },
  ];

  const COLORS = ["#16a34a", "#d1d5db"];

  return (
    <div
      className={`max-w-3xl mx-auto mt-8 p-8 rounded-2xl shadow-lg transition-all ${
        darkMode ? "bg-slate-800" : "bg-white"
      }`}
    >
      <h2 className="text-3xl font-bold text-green-700 mb-6">
        📊 Carbon Dashboard
      </h2>

      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={110}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Dashboard;