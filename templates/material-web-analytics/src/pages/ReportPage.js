import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import moment from "moment";

import DateRangePicker from "../components/DateRangePicker";
import SegmentsDialog from "../components/SegmentsDialog";

import { getUserPreference, setUserPreference } from "../utils.js";

const DEFAULT_BEGIN_DATE = moment().subtract(7, "days");
const DEFAULT_END_DATE = moment();

// TODO: that should be dynamic and loaded from Cube.js schema
const segments = [
  { title: "All users", key: "all" },
  {
    title: "Bounced Sessions",
    key: "bouncedSessions",
    description: "Bounces > 0",
  },
  {
    title: "Direct Traffic",
    key: "directTraffic",
    description: `Medium: "(none)"`,
  },
  { title: "New Users", key: "newUsers", description: `User Type: "New"` },
  {
    title: "Search Traffic",
    key: "searchTraffic",
    description: `Medium: "search"`,
  },
];

const getDateRange = () => {
  const savedDateRange = getUserPreference("daterange");

  if (savedDateRange) {
    return savedDateRange.map((date) => moment(date));
  } else {
    return [DEFAULT_BEGIN_DATE, DEFAULT_END_DATE];
  }
};

const withTimeFunc = ({ ...vizState }, begin, end, segment) => {
  // const timeDimensionObj = (query.timeDimensions || [])[0] || {};
  // const timeDimensionObj = {};
  // const cube =
  //   (query.measures && query.measures[0].split(".")[0]) || "Sessions";
  // const timeDimension = timeDimensionObj.dimension || `${cube}.sessionStart`;
  // const timeDimension = timeDimensionObj.dimension;
  // const granularity = timeDimensionObj.granularity || null;
  // const segmentCube = (query) => {
  //   const measureCube = query.measures[0].split(".")[0];
  //   if (["PageViews"].indexOf(measureCube) !== -1) {
  //     return "Sessions";
  //   }
  //   return measureCube;
  // };
  // const segments =
  //   segment === "all" ? [] : [`${segmentCube(query)}.${segment}`];

  // console.log(begin, end, segment);

  return {
    ...vizState,
    // query: {
    //   ...query,
    // segments,
    segment,
    timeDimension: [
      begin.format(moment.HTML5_FMT.DATE),
      end.format(moment.HTML5_FMT.DATE),
    ],
    // timeDimensions: [
    //   {
    //     dimension: timeDimension,
    //     dateRange: [
    //       begin.format(moment.HTML5_FMT.DATE),
    //       end.format(moment.HTML5_FMT.DATE),
    //     ],
    //     granularity: granularity,
    //   },
    // ],
    // },
  };
};

const ReportPage = ({ report: Component }) => {
  const [begin, end] = getDateRange();
  const [beginDate, setBeginDate] = useState(begin);
  const [endDate, setEndDate] = useState(end);
  const [segment, setSegment] = useState(
    getUserPreference("segment") || segments[0]
  );
  const [segmentsDialogOpen, setSegmentsDialogOpen] = useState(false);
  const withTime = (vizState) =>
    withTimeFunc(vizState, beginDate, endDate, segment.key);

  useEffect(() => {
    setUserPreference("daterange", [beginDate, endDate]);
    setUserPreference("segment", segment);
  }, [beginDate, endDate, segment]);

  return (
    <Grid container spacing={3} justify="space-between">
      <Grid item xs={3}>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => setSegmentsDialogOpen(true)}
        >
          {segment.title}
        </Button>
        <SegmentsDialog
          segments={segments}
          selectedKey={segment.key}
          open={segmentsDialogOpen}
          onClose={() => setSegmentsDialogOpen(false)}
          onSelect={(segment) => {
            setSegment(segment);
            setSegmentsDialogOpen(false);
          }}
        />
      </Grid>
      <Grid item xs={3}>
        <DateRangePicker
          value={[beginDate, endDate]}
          placeholder="Select a date range"
          onChange={(values) => {
            setBeginDate(values.begin);
            setEndDate(values.end);
          }}
        />
      </Grid>
      <Component withTime={withTime} />
    </Grid>
  );
};

export default ReportPage;
