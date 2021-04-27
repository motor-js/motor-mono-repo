import React from "react";
import { useTheme } from "@material-ui/core/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from "recharts";
import { useData } from "@motor-js/engine";
import Title from "./Title";
import Loader from "./Loader";

const cols = [
  {
    qField: "[time]",
    qLabel: "time",
  },
  {
    qField: "=Sum(amount)",
    qLabel: "amount",
  },
];

export default function Chart() {
  const theme = useTheme();

  const { dataSet } = useData({ cols });

  return (
    <React.Fragment>
      {dataSet.data ? (
        <>
          <Title>Today</Title>

          <ResponsiveContainer>
            <LineChart
              data={dataSet.data}
              margin={{
                top: 16,
                right: 16,
                bottom: 0,
                left: 24,
              }}
            >
              <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
              <YAxis stroke={theme.palette.text.secondary}>
                <Label
                  angle={270}
                  position="left"
                  style={{
                    textAnchor: "middle",
                    fill: theme.palette.text.primary,
                  }}
                >
                  Sales ($)
                </Label>
              </YAxis>
              <Line
                type="monotone"
                dataKey="amount"
                stroke={theme.palette.primary.main}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </>
      ) : (
        <Loader height={250} />
      )}
    </React.Fragment>
  );
}
