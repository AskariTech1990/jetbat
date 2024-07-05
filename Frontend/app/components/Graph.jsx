"use client";

import React, { useState } from "react";
import { PieChart, Pie, ResponsiveContainer, Sector } from "recharts";
import { graphText } from "./Resourse";

const Graph = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Destructure data and totalSupply from graphText
  const { totalSupply, data } = graphText;

  // Function to render active pie slice details
  const renderActiveShape = (props) => {
    const {
      cx,
      cy,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      value,
    } = props;
    const midAngle = (startAngle + endAngle) / 2;

    // Calculate position for the tooltip line
    const sin = Math.sin((-midAngle * Math.PI) / 180);
    const cos = Math.cos((-midAngle * Math.PI) / 180);
    const mx = cx + (outerRadius + 10) * cos;
    const my = cy + (outerRadius + 10) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;

    // Text anchor position based on tooltip line direction
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
      <g>
        {/* Pie slice label */}
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill} fontSize={11}>
          {payload.name}
        </text>

        {/* Pie slice */}
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />

        {/* Tooltip line */}
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />

        {/* Tooltip text: value */}
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill="#333"
        >
          {`Value: ${value.toFixed(0)}`}
        </text>

        {/* Tooltip text: percentage */}
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={18}
          textAnchor={textAnchor}
          fill="#999"
        >
          {`( ${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };

  // Function to handle mouse enter event on pie slice
  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    // Container for the pie chart
    <div className="w-full h-full">
      {/* Allocation title */}
      <h2 className="text-center text-white  text-2xl font-bold -mb-16">Allocation</h2>

      {/* Responsive container for the pie chart */}
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          {/* Pie component */}
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={60}
            fill="rgb(34 197 94)"
            dataKey="value"
            onMouseEnter={onPieEnter}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
