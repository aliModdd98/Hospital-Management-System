import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const ChartA = ({ data, axis, bars, title }) => {
  return (
    <div style={{ marginBottom: "40px" }}>
      <h3 style={{ textAlign: "center" }}>{title}</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={axis} />
          <YAxis />
          <Tooltip />
          <Legend />
          {bars.map((bar) => (
            <Bar key={bar.dataKey} dataKey={bar.dataKey} fill={bar.color} />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartA;
