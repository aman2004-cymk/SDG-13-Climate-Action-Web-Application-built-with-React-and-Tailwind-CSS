import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

function TrendChart({ history }) {

  const data = history.map((item, index) => ({
    calculation: index + 1,
    emission: item
  }));

  return (
    <div className="max-w-5xl mx-auto mt-8 bg-white p-6 rounded-xl shadow">

      <h2 className="text-2xl font-bold text-green-700 mb-6">
        Emission Trend
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="calculation" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="emission"
            stroke="#16a34a"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}

export default TrendChart;