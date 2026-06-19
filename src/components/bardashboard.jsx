import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

function BarDashboard({
  electricity,
  travel,
  waste
}) {

  const data = [
    {
      name: "Electricity",
      value: electricity
    },
    {
      name: "Travel",
      value: travel
    },
    {
      name: "Waste",
      value: waste
    }
  ];

  return (
    <div className="max-w-4xl mx-auto mt-8 bg-white p-6 rounded-xl shadow">

      <h2 className="text-2xl font-bold text-green-700 mb-6">
        Emission Breakdown
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#16a34a" />
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
}

export default BarDashboard;