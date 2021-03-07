import { useCallback, useRef, useReducer, useEffect, useContext } from "react";
import { deepMerge } from "../utils/object";
import { EngineContext } from "@motor-js/engine";
import {
  getMeasureNames,
  // getMeasureDetails,
  getDimensionNames,
  // getDimensionDetails,
  getDatKeyInfo,
  getHeader,
  getOrder,
  hyperCubeTransform,
  multiDimHyperCubeTransform,
} from "../utils/hyperCubeUtilities";

const initialState = {
  qData: null,
  qRData: null,
  qLayout: null,
  selections: null,
};

// details used to determine chart type for combo chart

function reducer(state, action) {
  const {
    payload: {
      title,
      metrics,
      qData,
      mData,
      qListData,
      // measureInfo,
      // dimensionInfo,
      dataKeys,
      qRData,
      qLayout,
      selections,
    },
    type,
  } = action;

  switch (type) {
    case "update":
      return {
        ...state,
        title,
        metrics,
        qData,
        mData,
        qListData,
        // dimensionInfo,
        // measureInfo,
        dataKeys,
        qLayout,
        selections,
      };
    case "updateReducedData":
      return {
        ...state,
        qRData,
      };
    default:
      throw new Error();
  }
}

const initialProps = {
  cols: null,
  qLists: [],
  qHyperCubeDef: null,
  qPage: {
    qTop: 0,
    qLeft: 0,
    qWidth: 10,
    qHeight: 1000,
  },
  qSortByAscii: 1,
  qSortByLoadOrder: 1,
  qInterColumnSortOrder: [],
  qSuppressZero: false,
  qSortByExpression: 0,
  qSuppressMissing: true,
  qExpression: null,
  getQRData: false,
  qSortByNumeric: -1,
  qColumnOrder: [],
  qCalcCondition: undefined,
  qTitle: null,
  qMetrics: null,
  qOtherTotalSpec: "",
};

const useData = (props) => {
  const {
    cols,
    qLists,
    qTitle,
    qMetrics,
    qHyperCubeDef,
    qPage: qPageProp,
    qSortByAscii,
    qSortByLoadOrder,
    qInterColumnSortOrder,
    qSuppressZero,
    qSortByNumeric,
    qSortByExpression,
    qSuppressMissing,
    qExpression,
    qColumnOrder,
    qCalcCondition,
    getQRData,
    qOtherTotalSpec,
  } = deepMerge(initialProps, props);

  const _isMounted = useRef(true);
  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    title,
    metrics,
    qData,
    mData,
    qListData,
    // dimensionInfo,
    // measureInfo,
    dataKeys,
    qRData,
    qLayout,
    selections,
  } = state;

  const { engine, engineError } = useContext(EngineContext) || {};

  const qObject = useRef(null);

  const qPage = useRef(qPageProp);

  // Build qOtherTotalSpec object
  let totalSpec;

  if (typeof qOtherTotalSpec === "object") {
    totalSpec = {
      qOtherMode: "OTHER_COUNTED",
      qOtherCounted: qOtherTotalSpec.qOtherCount,
    };
  } else if (qOtherTotalSpec) {
    totalSpec = {
      qOtherMode: "OTHER_COUNTED",
      qOtherCounted: "8",
    };
  } else if (!qOtherTotalSpec) {
    totalSpec = {
      qOtherMode: "OTHER_OFF",
      qOtherCounted: "",
    };
  }

  const generateQProp = useCallback(() => {
    const qProp = {
      qInfo: { qType: "visualization" },
    };

    if (qMetrics) {
      qMetrics.map((metric) => {
        // This will evaluate to a number if nothing supplied.
        const metricType = metric.qType ? metric.qType : "qValueExpression";
        qProp[metric.qName] = {
          [metricType]: {
            qExpr: metric.qExpr,
          },
        };
      });
    }

    if (qLists) {
      qProp.qListObjects = [];
      qLists.map((list) => {
        const listDef = {
          qListObjectDef: {
            qStateName: "$",
            qLibraryId: "",
            qDef: {
              qFieldDefs: [Object.values(list)[0]],
              qFieldLabels: [Object.keys(list)[0]],
              qSortCriterias: [
                {
                  qSortByLoadOrder: 1,
                },
              ],
            },
            qInitialDataFetch: [
              {
                qTop: 0,
                qHeight: 1,
                qLeft: 0,
                qWidth: 1,
              },
            ],
          },
        };
        qProp.qListObjects.push(listDef);
      });
    }

    if (qHyperCubeDef) {
      const _qHyperCubeDef = qHyperCubeDef;
      if (cols && cols[1]) {
        _qHyperCubeDef.qMeasures[0].qDef = {
          qDef: cols[1],
        };
      }
      if (cols && cols[0])
        _qHyperCubeDef.qDimensions[0].qDef.qFieldDefs = [cols[0]];
      qProp.qInfo.qType = "HyperCube";
      qProp.qHyperCubeDef = _qHyperCubeDef;

      return qProp;
    }
    const myqInterColumnSortOrder = qInterColumnSortOrder || [];
    const qInterColumnSortOrderSet = !!qInterColumnSortOrder;
    let sortIndex = 0;

    const qDimensions = cols
      .filter((col, i) => {
        const isDimension =
          (typeof col === "string" && !col.startsWith("=")) ||
          (typeof col === "object" && col.qDef && col.qDef.qFieldDefs) ||
          (typeof col === "object" &&
            col.qLibraryId &&
            col.qType &&
            col.qType === "dimension") ||
          (typeof col === "object" && !col.qField.startsWith("="));

        if (isDimension && !qInterColumnSortOrderSet) {
          myqInterColumnSortOrder[i] = sortIndex;
          sortIndex += 1;
        }

        return isDimension;
      })
      .map((col) => {
        if (typeof col === "string") {
          return {
            qDef: {
              qFieldDefs: [col],
              qSortCriterias: [
                {
                  qSortByAscii,
                  qSortByLoadOrder,
                },
              ],
            },
            qNullSuppression: true,
            qSuppressMissing: true,
            qShowTotalsAbove: true,
          };
        }
        if (typeof col === "object" && !col.qLibraryId) {
          return {
            qDef: {
              qFieldDefs: [col.qField],
              qFieldLabels: [col.qLabel],
              qSortCriterias: col.qSortCriterias
                ? [col.qSortCriterias]
                : [
                    {
                      qSortByLoadOrder,
                      qSortByAscii,
                    },
                  ],
            },
            qOtherTotalSpec: totalSpec,
            qOtherLabel:
              qOtherTotalSpec !== undefined
                ? qOtherTotalSpec.qOtherLabel
                : "Others",
            qAttributeExpressions: [
              {
                // chart fill color
                qExpression: col.qFillStyle,
                qLibraryId: "",
                qAttribute: false,
                id: "fill",
              },
              {
                // chart stroke width
                qExpression: col.qStroke,
                qLibraryId: "",
                qAttribute: false,
                id: "stroke",
              },
            ],
            qNullSuppression: col.qNullSuppression
              ? col.qNullSuppression
              : true,
            qSuppressMissing: true,
            qShowTotalsAbove: true,
          };
        }
        if (typeof col === "object" && col.qLibraryId) {
          return {
            qLibraryId: col.qLibraryId,
            qType: col.qType,
            qOtherTotalSpec: totalSpec,
            qOtherLabel:
              qOtherTotalSpec !== undefined
                ? qOtherTotalSpec.qOtherLabel
                : "Others",
            qAttributeExpressions: [
              {
                // chart fill color
                qExpression: col.qFillStyle,
                qLibraryId: "",
                qAttribute: false,
                id: "fill",
              },
              {
                // chart stroke width
                qExpression: col.qStroke,
                qLibraryId: "",
                qAttribute: false,
                id: "stroke",
              },
            ],
            qNullSuppression: col.qNullSuppression
              ? col.qNullSuppression
              : true,
            qSuppressMissing: true,
            qShowTotalsAbove: true,
          };
        }

        return col;
      });

    const qMeasures = cols
      .filter((col, i) => {
        const isMeasure =
          (typeof col === "string" && col.startsWith("=")) ||
          (typeof col === "object" && col.qDef && col.qDef.qDef) ||
          (typeof col === "object" &&
            col.qLibraryId &&
            col.qType &&
            col.qType === "measure") ||
          (typeof col === "object" && col.qField.startsWith("="));
        if (isMeasure && !qInterColumnSortOrderSet) {
          myqInterColumnSortOrder[i] = sortIndex;
          sortIndex += 1;
        }

        return isMeasure;
      })
      .map((col) => {
        if (typeof col === "string") {
          return {
            qDef: {
              qDef: col,
              qNumFormat: col.qNumFormat,
            },
            qSortBy: {
              qSortByNumeric,
              qSortByExpression,
              qExpression,
              qSuppressMissing,
            },
          };
        }
        if (typeof col === "object") {
          return {
            qDef: {
              qDef: col.qField,
              qLabel: col.qLabel,
              qNumFormat: {
                qType: col.qNumType || "U",
                qUseThou: 1,
                qFmt: col.qNumFmt,
                qDec: ".",
                qThou: ",",
              },
            },
            qSortBy: {
              qSortByNumeric,
              qSortByExpression,
              qExpression,
              qSuppressMissing,
            },
            qAttributeExpressions: [
              {
                // chart fill color
                qExpression: col.qFillStyle,
                qLibraryId: "",
                qAttribute: false,
                id: "fill",
              },
              {
                // chart stroke width
                qExpression: col.qStroke,
                qLibraryId: "",
                qAttribute: false,
                id: "stroke",
              },
            ],
            // qChartType: col.qChartType,
            // qShowPoints: col.qShowPoints,
            // qCurve: col.qCurve,
            // qFillStyle: col.qFillStyle,
            // qLegendShape: col.qLegendShape,
          };
        }

        return col;
      });

    qProp.qHyperCubeDef = {
      qDimensions,
      qMeasures,
      qInterColumnSortOrder,
      qSuppressZero,
      qSuppressMissing,
      qColumnOrder,
      qCalcCondition,
      qTitle,
    };

    return qProp;
  }, [
    cols,
    qTitle,
    qExpression,
    qHyperCubeDef,
    qInterColumnSortOrder,
    qSortByAscii,
    qSortByExpression,
    qSortByLoadOrder,
    qSuppressMissing,
    qSuppressZero,
  ]);

  const getLayout = useCallback(() => qObject.current.getLayout(), []);

  const getData = useCallback(async () => {
    const qDataPages = await qObject.current.getHyperCubeData(
      "/qHyperCubeDef",
      [qPage.current]
    );

    return qDataPages[0];
  }, []);

  const getListsFromData = useCallback(async (i) => {
    return await qObject.current.getListObjectData(
      `/qListObjects/${i}/qListObjectDef`,
      [qPage.current]
    );
  });

  const getListData = useCallback(async (layout) => {
    if (!layout.qListObjects) return;
    return await Promise.all(
      layout.qListObjects.map(async (list, i) => getListsFromData(i))
    );
  }, []);

  // const getLists = useCallback(async (listData, layout, measureInfo) => {
  //   // AG under development

  //   console.log(listData)

  //   layout.qListObjects.map((item, index) => {
  //     if (item.qListObject.qDimensionInfo.qFallbackTitle === "dataKey")
  //   });

  //   return getDatKeyInfo(listData[dataKeyIndex], measureInfo);
  // }, []);

  const getReducedData = useCallback(
    () => async () => {
      const { qWidth } = qPage.current;
      const _qPage = {
        qTop: 0,
        qLeft: 0,
        qWidth,
        qHeight: Math.round(10000 / qWidth),
      };
      const qDataPages = await qObject.current.getHyperCubeReducedData(
        "/qHyperCubeDef",
        [_qPage],
        -1,
        "D1"
      );

      return qDataPages[0];
    },
    []
  );

  const structureData = useCallback(async (layout, data) => {
    let useNumonFirstDim;
    const mData =
      layout.qHyperCube.qDimensionInfo.length === 1
        ? hyperCubeTransform(data, layout.qHyperCube, useNumonFirstDim)
        : multiDimHyperCubeTransform(data, layout.qHyperCube, useNumonFirstDim);

    return mData;
  }, []);

  // const getMeasureInfo = useCallback(async (layout) => {
  //   return getMeasureDetails(layout.qHyperCube);
  // }, []);

  // const getDimensionInfo = useCallback(async (layout) => {
  //   return getDimensionDetails(layout.qHyperCube);
  // }, []);

  const getDataKeys = useCallback(async (listData, layout, measureInfo) => {
    let dataKeyIndex = 0;
    if (!layout.qListObjects) return getDatKeyInfo(null, measureInfo);
    layout.qListObjects.map((item, index) => {
      if (item.qListObject.qDimensionInfo.qFallbackTitle === "dataKey")
        dataKeyIndex = index;
    });

    return getDatKeyInfo(listData[dataKeyIndex], measureInfo);
  }, []);

  const getTitle = useCallback(async (layout) => {
    return layout.qHyperCube.qTitle;
  }, []);

  const getMetrics = useCallback(async (layout, metrics) => {
    if (!metrics) return;
    let metricObj = {};

    metrics.map((metric) => {
      metricObj[metric.qName] = layout[metric.qName];
    });
    return metricObj;
  }, []);

  // const getDataKeyList = useCallback(async (layout, metrics) => {
  //   if (!metrics) return;
  //   let metricObj = {};

  //   metrics.map((metric) => {
  //     metricObj[metric.qName] = layout[metric.qName];
  //   });
  //   return metricObj;
  // }, []);

  const update = useCallback(
    async (measureInfo) => {
      const _qLayout = await getLayout();
      const _qData = await getData();

      const _qListData = await getListData(_qLayout);
      const _mData = await structureData(_qLayout, _qData);

      // const _measureDetails = await getMeasureInfo(_qLayout);
      // const _dimensionDetails = await getDimensionInfo(_qLayout);
      const _dataKeys = await getDataKeys(
        _qListData,
        _qLayout,
        _qLayout.qHyperCube.qMeasureInfo
      );

      const _qTitle = await getTitle(_qLayout);

      const _qMetrics = await getMetrics(_qLayout, qMetrics);
      if (_qData && _isMounted.current) {
        const _selections = _qData.qMatrix.filter(
          (row) => row[0].qState === "S"
        );

        // if (measureInfo) {
        //   console.log("d", measureInfo);
        //   measureInfo.map((d, i) => {
        //     if (_qLayout.qHyperCube.qMeasureInfo[i]) {
        //     _qLayout.qHyperCube.qMeasureInfo[i].qChartType = "bar";
        //     _measureDetails[i] = "bar";
        //     _qLayout.qHyperCube.qMeasureInfo[i].qShowPoints = d.qShowPoints;
        //     _qLayout.qHyperCube.qMeasureInfo[i].qCurve = d.qCurve;
        //     _qLayout.qHyperCube.qMeasureInfo[i].qFillStyle = d.qFillStyle;
        //     _qLayout.qHyperCube.qMeasureInfo[i].qLegendShape = d.qLegendShape;
        //     // _qLayout.qHyperCube.qMeasureInfo[i].qLegendShape =
        //     //   d.qLegendShape === "dashed" ? "5,2" : null;
        //     }
        //   });
        // }

        dispatch({
          type: "update",
          payload: {
            title: _qTitle,
            qData: _qData,
            mData: _mData,
            qListData: _qListData,
            // dimensionInfo: _dimensionDetails,
            // measureInfo: _measureDetails,
            dataKeys: _dataKeys,
            metrics: _qMetrics,
            qLayout: _qLayout,
            selections: _selections,
          },
        });
      } else if (_isMounted.current) {
        dispatch({
          type: "update",
          payload: {
            title: _qTitle,
            metrics: _qMetrics,
            qData: _qData,
            mData: _mData,
            qListData: _qListData,
            qLayout: _qLayout,
          },
        });
      }
      if (getQRData) {
        const _qRData = await getReducedData();
        if (_isMounted.current) {
          dispatch({
            type: "updateReducedData",
            payload: { qRData: _qRData },
          });
        }
      }
    },
    [getData, getLayout, getQRData, getReducedData]
  );

  const changePage = useCallback(
    (newPage) => {
      qPage.current = {
        ...qPage.current,
        ...newPage,
      };
      update();
    },
    [update]
  );

  const beginSelections = useCallback(
    () => qObject.current.beginSelections(["/qHyperCubeDef"]),
    [true]
  );

  const endSelections = useCallback(
    (qAccept) => qObject.current.endSelections(qAccept),
    []
  );

  const select = useCallback(
    (qElemNumber, _selections, toggle = false) =>
      qObject.current.selectHyperCubeValues(
        "/qHyperCubeDef",
        qElemNumber,
        _selections,
        toggle
      ),
    []
  );
  // const select = useCallback(
  //   (qElemNumber, _selections, toggle = true) =>
  //     qObject.current.selectHyperCubeValues(
  //       '/qHyperCubeDef',
  //       qElemNumber,
  //       _selections,
  //       toggle
  //     ),
  //   []
  // );

  const applyPatches = useCallback(
    (patches) => qObject.current.applyPatches(patches),
    []
  );

  // takes column data and sorted the table, applies reverse sort
  const handlerChange = useCallback(
    async (isMeasure, value) => {
      // If no sort is set, we need to set a default sort order
      // if (column.qSortIndicator === "N") {
      //   if (column.qPath.includes("qDimensions")) {
      //     await applyPatches([
      //       {
      //         qOp: "add",
      //         qPath: `${column.qPath}/qDef/qSortCriterias`,
      //         qValue: JSON.stringify([{ qSortByLoadOrder: 1 }]),
      //       },
      //     ]);
      //   }
      //   if (column.qPath.includes("qMeasures")) {
      //     await applyPatches([
      //       {
      //         qOp: "add",
      //         qPath: `${column.qPath}/qSortBy`,
      //         qValue: JSON.stringify({ qSortByLoadOrder: 1 }),
      //       },
      //     ]);
      //   }
      // }
      await applyPatches([
        {
          qOp: "replace",
          qPath: `/qHyperCubeDef/${
            isMeasure ? "qMeasures" : "qDimensions"
          }/0/qDef/${isMeasure ? "qDef" : "qFieldDefs"}`,
          qValue: JSON.stringify(isMeasure ? value : [value]),
        },
      ]);
    },
    [applyPatches, qLayout]
  );

  useEffect(() => {
    if (!engine) return;
    if (qObject.current) return;
    (async () => {
      const qProp = generateQProp();
      const qDoc = await engine;
      qObject.current = await qDoc.createSessionObject(qProp);
      qObject.current.on("changed", () => {
        update(qProp.qHyperCubeDef.qMeasures);
      });
      update(qProp.qHyperCubeDef.qMeasures);
    })();
  }, [generateQProp, engine, update]);

  useEffect(() => () => (_isMounted.current = false), []);

  return {
    beginSelections,
    endSelections,
    qLayout,
    qData,
    mData,
    qListData,
    // dimensionInfo,
    // measureInfo,
    handlerChange,
    dataKeys,
    dataSet: { data: mData, dataKeys, qListData },
    title,
    metrics,
    qRData,
    changePage,
    selections,
    select,
    applyPatches,
  };
};

export default useData;
