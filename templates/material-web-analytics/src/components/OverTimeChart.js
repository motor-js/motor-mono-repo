import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import ChartRenderer from "./ChartRenderer";

const granularityFromQuery = ({ query }) => query.granularity;

const withGranularity = ({ query, ...vizState }, granularity) => {
  // console.log(query.cols[1].qField);
  return {
    ...vizState,
    granularity: granularity, // Hour, Day, Week,Month
    cols: query.cols,
    // query: {
    //   ...query,
    //   timeDimensions: [{
    //     ...query.timeDimensions[0],
    //     granularity: granularity
    //   }]

    // }
  };
};

const OverTimeChart = ({ title, vizState, granularityControls }) => {
  const [granularity, setGranularity] = useState(
    granularityFromQuery(vizState)
  );
  // console.log(withGranularity(vizState, granularity));

  return (
    <Card>
      <CardContent>
        <Grid container justify="space-between">
          <Grid item>
            <Typography component="p" color="primary" gutterBottom>
              {title}
            </Typography>
          </Grid>
          <Grid item>
            <ButtonGroup
              size="small"
              color="primary"
              aria-label="outlined primary button group"
            >
              {["hour", "day", "week", "month"].map((granOption) => (
                <Button
                  variant={granularity === granOption ? "contained" : ""}
                  key={granOption}
                  onClick={() => setGranularity(granOption)}
                >
                  {granOption.toUpperCase()}
                </Button>
              ))}
            </ButtonGroup>
          </Grid>
        </Grid>
        <ChartRenderer
          height={250}
          vizState={withGranularity(vizState, granularity)}
        />
      </CardContent>
    </Card>
  );
};

export default OverTimeChart;
