import React, { useRef, useLayoutEffect, useEffect, useContext } from "react";

import { useData, useButton, useSelections } from "@motor-js/engine";
import { Context } from "../Store";

// Configure any reguired theme
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

const BarExampleCompact = ({ id }) => {
  const [state, dispatch] = useContext(Context);
  const { selectValues } = useButton();
  const { selections, clearSelections } = useSelections();

  const colors = [
    "#B03060",
    "#FE9A76",
    "#FFD700",
    "#32CD32",
    "#016936",
    "#008080",
    "#0E6EB8",
    "#EE82EE",
    "#B413EC",
    "#FF1493",
    "#A52A2A",
    "#A0A0A0",
    "#000000",
  ];

  const cols = [
    {
      // qField: "[OrderDate]",
      qField: "[Category]",
      qLabel: "Category",
    },
    {
      qField: "=sum(Quantity * Price)",
      qLabel: "Revenue",
    },
  ];

  const { dataSet, select } = useData({
    cols,
  });

  const { data } = dataSet;

  const chart = useRef(null);

  useLayoutEffect(() => {
    let x = am4core.create(id, am4charts.XYChart);

    x.paddingRight = 20;

    x.data = data;

    let categoryAxis = x.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "Category";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.title.text = "Categories";
    categoryAxis.renderer.inside = true;

    let valueAxis = x.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = "Revenue";
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;

    let series = x.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = "Category";
    series.dataFields.valueY = "Revenue";
    series.tooltipText = "{valueY.value}";
    series.columns.template.propertyFields.elemNumber = "elemNumber";

    x.cursor = new am4charts.XYCursor();

    var columnTemplate = series.columns.template;

    columnTemplate.events.on(
      "hit",
      function (ev) {
        select(0, [ev.target.elemNumber], false);
      },
      this
    );

    columnTemplate.adapter.add("fill", function (fill, target) {
      return colors[target.dataItem.index];
    });

    columnTemplate.adapter.add("stroke", function (stroke, target) {
      return colors[target.dataItem.index];
    });

    chart.current = x;

    return () => {
      x.dispose();
    };
  }, []);

  // Load data into chart
  useEffect(() => {
    if (state.primaryAppSelections && state.primaryAppSelections.length !== 0) {
      selectValues(
        state.primaryAppSelections[0].qItems,

        state.primaryAppSelections[0].qField
      );

      dispatch({ type: "SET_PRIMARY_APP_SELECTIONS", payload: null });
    }

    if (chart.current) {
      chart.current.data = data;
    }
  }, [data, state]);

  return <div id={id} style={{ width: "100%", height: "500px" }}></div>;
};

export default BarExampleCompact;
