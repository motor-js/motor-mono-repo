import {
  useCallback,
  useRef,
  useReducer,
  useEffect,
  useContext,
  useState,
} from "react";
import { deepMerge } from "../utils/object";

import { EngineContext } from "../contexts/EngineProvider";
import { AppContext } from "../contexts/AppContext";
import { ConfigContext } from "../contexts/ConfigProvider";

import {
  hyperCubeChartTransform,
  multiDimHyperCubeTransform,
  validData,
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
      subTitle,
      metrics,
      qData,
      mData,
      nameKey,
      valueKey,
      qListData,
      dataList,
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
        subTitle,
        metrics,
        qData,
        mData,
        nameKey,
        valueKey,
        qListData,
        dataList,
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
  cols: [],
  qLists: null,
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
  qSubTitle: null,
  qMetrics: null,
  qOtherTotalSpec: "",
};

const useData = (props) => {
  const {
    cols,
    qLists,
    qTitle,
    qSubTitle,
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
    subTitle,
    metrics,
    qData,
    mData,
    nameKey,
    valueKey,
    qListData,
    dataList,
    dataKeys,
    qRData,
    qLayout,
    selections,
  } = state;

  const config = useContext(ConfigContext)
  const { engine } = useContext( config.global ? AppContext : EngineContext) || {};

  const qObject = useRef(null);

  const qPage = useRef(qPageProp);

  // error trapping
  const [error, setError] = useState();
  // page size
  const [pageSize, setPageSize] = useState(qPage.current.qHeight);

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

    const qDimensions =
      cols &&
      cols
        .filter((col, i) => {
          const isDimension =
            (typeof col === "string" && !col.startsWith("=")) ||
            (typeof col === "object" && col.qDef && col.qDef.qFieldDefs) ||
            (typeof col === "object" &&
              col.qLibraryId &&
              col.qType &&
              col.qType === "dimension") ||
            (typeof col === "object" &&
              !col.qLibraryId &&
              !col.qField.startsWith("="));

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
            const qAttributeExpressions = [];
            if (col.qAttributeExpressions) {
              for (const [id, qExpression] of Object.entries(
                col.qAttributeExpressions
              )) {
                qAttributeExpressions.push({
                  id,
                  qExpression,
                  qLibraryId: "",
                  qAttribute: false,
                });
              }
            }

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
              qAttributeExpressions,
              qNullSuppression: col.qNullSuppression
                ? col.qNullSuppression
                : true,
              qSuppressMissing: true,
              qShowTotalsAbove: true,
            };
          }
          if (
            typeof col === "object" &&
            col.qLibraryId &&
            col.qType === "dimension"
          ) {
            const qAttributeExpressions = [];
            if (col.qAttributeExpressions) {
              for (const [id, qExpression] of Object.entries(
                col.qAttributeExpressions
              )) {
                qAttributeExpressions.push({
                  id,
                  qExpression,
                  qLibraryId: "",
                  qAttribute: false,
                });
              }
            }
            return {
              qLibraryId: col.qLibraryId,
              qType: col.qType,
              qOtherTotalSpec: totalSpec,
              qOtherLabel:
                qOtherTotalSpec !== undefined
                  ? qOtherTotalSpec.qOtherLabel
                  : "Others",
              qAttributeExpressions,
              qNullSuppression: col.qNullSuppression
                ? col.qNullSuppression
                : true,
              qSuppressMissing: true,
              qShowTotalsAbove: true,
            };
          }

          return col;
        });

    if (qDimensions && qDimensions.length > 1) {
      const listDef = {
        qListObjectDef: {
          qStateName: "$",
          qLibraryId: "",
          qDef: {
            qFieldDefs: qDimensions[1].qDef.qFieldDefs,
            qFieldLabels: ["multiDimDataKeys"],
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
      if (typeof qProp.qListObjects === "undefined") qProp.qListObjects = [];

      qProp.qListObjects.push(listDef);
    }

    const qMeasures =
      cols &&
      cols
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
          if (typeof col === "object" && !col.qLibraryId) {
            const qAttributeExpressions = [];
            if (col.qAttributeExpressions) {
              for (const [id, qExpression] of Object.entries(
                col.qAttributeExpressions
              )) {
                qAttributeExpressions.push({
                  id,
                  qExpression,
                  qLibraryId: "",
                  qAttribute: false,
                });
              }
            }
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
              qAttributeExpressions,
            };
          }

          if (
            typeof col === "object" &&
            col.qLibraryId &&
            col.qType === "measure"
          ) {
            const qAttributeExpressions = [];
            if (col.qAttributeExpressions) {
              for (const [id, qExpression] of Object.entries(
                col.qAttributeExpressions
              )) {
                qAttributeExpressions.push({
                  id,
                  qExpression,
                  qLibraryId: "",
                  qAttribute: false,
                });
              }
            }
            return {
              qLibraryId: col.qLibraryId,
              qDef: {},
              qSortBy: {
                qSortByNumeric,
                qSortByExpression,
                qExpression,
                qSuppressMissing,
              },
              qAttributeExpressions,
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
    try {
      const qDataPages = await qObject.current.getHyperCubeData(
        "/qHyperCubeDef",
        [qPage.current]
      );
      return qDataPages[0];
    } catch (error) {
      setError(error); // from creation or business logic
    }
  }, []);

  const getMultiPageData = useCallback(async (numberOfPages) => {
    const qObjects = qObject.current;
    let qPages = qPage.current;
    let qDataPages = null;
    let qMatrix = [];

    try {
      for (var i = 0; i < numberOfPages; i++) {
        qPages = {
          ...qPages,
          ...{ qTop: i * 1000 },
        };
        qDataPages = await qObjects.getHyperCubeData("/qHyperCubeDef", [
          qPages,
        ]);

        qMatrix.push(...qDataPages[0].qMatrix);
      }

      const qTails = qDataPages[0].qTails;
      const qArea = qDataPages[0].qArea;

      return { qTails, qMatrix, qArea };
    } catch (error) {
      setError(error); // from creation or business logic
    }
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

  const getNameKey = useCallback(async (layout) => {
    if (layout.qHyperCube.qDimensionInfo.length === 0) return null;
    return layout.qHyperCube.qDimensionInfo[0].qFallbackTitle;
  }, []);

  const getValueKey = useCallback(async (layout) => {
    if (layout.qHyperCube.qMeasureInfo.length === 0) return null;
    return layout.qHyperCube.qMeasureInfo[0].qFallbackTitle;
  }, []);

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
    if (
      (layout.qHyperCube.qDimensionInfo.length === 0 &&
        layout.qHyperCube.qMeasureInfo.length === 0) ||
      !data
    )
      return;

    const mData =
      layout.qHyperCube.qDimensionInfo.length === 1
        ? hyperCubeChartTransform(data, layout.qHyperCube, cols)
        : multiDimHyperCubeTransform(data, layout.qHyperCube);
    return mData;
  }, []);

  const getDataKeys = useCallback(async (listData, measureInfo) => {
    if (!listData) {
      return measureInfo.map((measure) => measure.qFallbackTitle);
    }

    // Get values for the second dimension.
    const keys = listData.filter(
      (item) => Object.keys(item)[0] === "multiDimDataKeys"
    );

    return keys[0].multiDimDataKeys;
  }, []);

  const getDataKeyList = useCallback(async (listData, layout) => {
    const listDetail = [];

    if (!layout.qListObjects) return null;

    layout.qListObjects.map((item, index) => {
      const obj = {};
      const key = item.qListObject.qDimensionInfo.qFallbackTitle;
      const items = listData[index][0]
        ? listData[index][0].qMatrix.map((item) => item[0].qText)
        : null;

      obj[key] = items;
      listDetail.push(obj);
    });

    return listDetail;
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

  const update = useCallback(async () => {
    const _qLayout = await getLayout();
    const _qValid = await validData(_qLayout, engine);

    const _qData = await (Math.ceil(_qLayout.qHyperCube.qSize.qcy / pageSize) <=
    1
      ? getData()
      : getMultiPageData(Math.ceil(_qLayout.qHyperCube.qSize.qcy / pageSize)));

    const _qListData = await getListData(_qLayout);
    const _mData = await structureData(_qLayout, _qData);

    const _nameKey = await getNameKey(_qLayout);
    const _valueKey = await getValueKey(_qLayout);
    const _dataList = await getDataKeyList(_qListData, _qLayout);

    const _dataKeys = await getDataKeys(
      _dataList,
      _qLayout.qHyperCube.qMeasureInfo
    );

    const _qTitle = await getTitle(_qLayout);
    const _qSubTitle = qSubTitle;

    const _qMetrics = await getMetrics(_qLayout, qMetrics);
    if (_qData && _isMounted.current) {
      const _selections = _qData.qMatrix.filter((row) => row[0].qState === "S");

      dispatch({
        type: "update",
        payload: {
          title: _qTitle,
          subTitle: _qSubTitle,
          qData: _qData,
          mData: _mData,
          nameKey: _nameKey,
          valueKey: _valueKey,
          qListData: _qListData,
          dataList: _dataList,
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
          subTitle: _qSubTitle,
          metrics: _qMetrics,
          qData: _qData,
          mData: _mData,
          nameKey: _nameKey,
          valueKey: _valueKey,
          qListData: _qListData,
          dataList: _dataList,
          dataKeys: _dataKeys,
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
  }, [getData, getLayout, getQRData, getReducedData]);

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
  // const dataSet = { data: mData, dataKeys, dataList, nameKey };
  const dataSet = {};

  if (mData) dataSet.data = mData;
  if (mData) dataSet.select = select;
  if (dataKeys && dataKeys.length !== 0) dataSet.dataKeys = dataKeys;
  if (dataList) dataSet.dataList = dataList;
  if (nameKey) dataSet.nameKey = nameKey;
  if (valueKey) dataSet.valueKey = valueKey;

  return {
    beginSelections,
    endSelections,
    qLayout,
    qData,
    mData,
    qListData,
    dataList,
    handlerChange,
    dataKeys,
    nameKey,
    // dataSet: { data: mData, dataKeys, dataList, nameKey },
    dataSet,
    title,
    subTitle,
    metrics,
    qRData,
    changePage,
    selections,
    select,
    applyPatches,
    motorDataProps: {
      metrics,
      qLayout,
      title,
      subTitle,
      dataSet,
      endSelections,
      beginSelections,
    },
  };
};

export default useData;
