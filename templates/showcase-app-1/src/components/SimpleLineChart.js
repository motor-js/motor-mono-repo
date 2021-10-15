import React from "react";
import { BarChart, Bar, Tooltip, ResponsiveContainer, XAxis } from "recharts";
import { withTheme } from "@material-ui/styles";

function SimpleLineChart(props) {
  const { theme, data } = props;

  return (
    <ResponsiveContainer width="99%" height={225}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <Tooltip />
        <Bar dataKey="Type" stackId="a" fill={theme.palette.primary.main} />
        <Bar
          dataKey="OtherType"
          stackId="a"
          fill={theme.palette.secondary.light}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default withTheme(SimpleLineChart);
