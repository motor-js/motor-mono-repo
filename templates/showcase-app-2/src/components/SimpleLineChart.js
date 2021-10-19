import React from "react";
import { BarChart, Bar, Tooltip, ResponsiveContainer, XAxis } from "recharts";
import { withTheme } from "@material-ui/styles";

function SimpleLineChart(props) {
  const { theme, data, dataKeys } = props;

  return (
    <ResponsiveContainer width="99%" height={225}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <Tooltip />
        {dataKeys &&
          dataKeys.map((key, index) => (
            <Bar
              key={index}
              dataKey={key}
              stackId="a"
              fill={theme.palette.chart[index]}
            />
          ))}
      </BarChart>
    </ResponsiveContainer>
  );
}

export default withTheme(SimpleLineChart);
