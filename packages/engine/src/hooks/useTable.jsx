import { useCallback, useRef, useReducer, useEffect, useContext } from "react";
import { deepMerge } from "../utils/object";
import { EngineContext } from '../contexts/EngineProvider'

const initialState = {
  qData: null,
  qRData: null,
  qLayout: null,
  headerGroup: null,
  selections: null,
};

// details used to determine chart type for combo chart

function reducer(state, action) {
  const {
    payload: { qData, qRData, headerGroup, qLayout, selections },
    type,
  } = action;

  switch (type) {
    case "update":
      return {
        ...state,
        qData,
        headerGroup,
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
  qHyperCubeDef: null,
  qPage: {
    qTop: 0,
    qLeft: 0,
    qWidth: 10,
    qHeight: 100,
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
  qOtherTotalSpec: "",
};

const useTable = (props) => {
  const {
    cols,
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

  const { qData, qRData, headerGroup, qLayout, selections } = state;

  // load engine from props
  //const myEngine = props.engine;
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
       // console.log('dim',col)
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
                // cell background color
                qExpression: col.qCondBackgroundFormat,
                qLibraryId: "",
                qAttribute: false,
                id: "cellBackgroundColor",
              },
              {
                // cell text color
                qExpression: col.qCondTextFormat,
                qLibraryId: "",
                qAttribute: false,
                id: "cellForegroundColor",
              },
              {
                // chart fill color
                qExpression: col.qCondChartColor,
                qLibraryId: "",
                qAttribute: false,
                id: "colorTheme",
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
                // cell background color
                qExpression: col.qCondBackgroundFormat,
                qLibraryId: "",
                qAttribute: false,
                id: "cellBackgroundColor",
              },
              {
                // cell text color
                qExpression: col.qCondTextFormat,
                qLibraryId: "",
                qAttribute: false,
                id: "cellForegroundColor",
              },
              {
                // chart fill color
                qExpression: col.qCondChartColor,
                qLibraryId: "",
                qAttribute: false,
                id: "colorTheme",
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
       // console.log('mea',col)
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
                // cell background color
                qExpression: col.qCondBackgroundFormat,
                qLibraryId: "",
                qAttribute: false,
                id: "cellBackgroundColor",
              },
              {
                // cell text color
                qExpression: col.qCondTextFormat,
                qLibraryId: "",
                qAttribute: false,
                id: "cellForegroundColor",
              },
              {
                // chart fill color
                qExpression: col.qCondChartColor,
                qLibraryId: "",
                qAttribute: false,
                id: "colorTheme",
              },
            ],
            qChartType: col.qChartType,
            qShowPoints: col.qShowPoints,
            qCurve: col.qCurve,
            qFillStyle: col.qFillStyle,
            qLegendShape: col.qLegendShape,
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
    };

   // console.log(qProp)
    return qProp;
  }, [
    cols,
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


  const getHeader = (qLayout) => (
    qLayout
      ? [
        ...qLayout.qHyperCube.qDimensionInfo.map((col, index) => ({
              Header: col.qFallbackTitle,
              accessor: (d) => d[index].qText,
              defaultSortDesc: col.qSortIndicator === "D",
              qInterColumnIndex: index,
              qPath: `/qHyperCubeDef/qDimensions/${index}`,
              qSortIndicator: col.qSortIndicator,
              qReverseSort: col.qReverseSort,
              qGrandTotals: { qText: null, qNum: null },
              qColumnType: "dim",
            })),
            ...qLayout.qHyperCube.qMeasureInfo.map((col, index) => ({
              Header: col.qFallbackTitle,
              accessor: (d) =>
                d[index + qLayout.qHyperCube.qDimensionInfo.length].qText,
              defaultSortDesc: col.qSortIndicator === "D",
              qInterColumnIndex:
                index + qLayout.qHyperCube.qDimensionInfo.length,
              qPath: `/qHyperCubeDef/qMeasures/${index}`,
              qSortIndicator: col.qSortIndicator,
              qReverseSort: col.qReverseSort,
              qGrandTotals: qLayout.qHyperCube.qGrandTotalRow[index],
              qColumnType: "meas",
            })),
        ]
    : []
  )

  //Change order of header groups
  const getOrder = (headerGroup) => {
    const orderedHeader = headerGroup.sort((a, b) => qColumnOrder.indexOf(a.qInterColumnIndex) - qColumnOrder.indexOf(b.qInterColumnIndex))
    return orderedHeader
  }

  const update = useCallback(
    async (measureInfo) => {
      const _qLayout = await getLayout();
      const _qData = await getData();
      const _headerGroup = await getHeader(_qLayout)
      const _orderHeader = await getOrder(_headerGroup)
      if (_qData && _isMounted.current) {
        const _selections = _qData.qMatrix.filter(
          (row) => row[0].qState === "S"
        );

        if (measureInfo) {
          measureInfo.map((d, i) => {
            if (_qLayout.qHyperCube.qMeasureInfo[i]) {
              _qLayout.qHyperCube.qMeasureInfo[i].qChartType = d.qChartType;
              _qLayout.qHyperCube.qMeasureInfo[i].qShowPoints = d.qShowPoints;
              _qLayout.qHyperCube.qMeasureInfo[i].qCurve = d.qCurve;
              _qLayout.qHyperCube.qMeasureInfo[i].qFillStyle = d.qFillStyle;
              _qLayout.qHyperCube.qMeasureInfo[i].qLegendShape = d.qLegendShape;
              // _qLayout.qHyperCube.qMeasureInfo[i].qLegendShape =
              //   d.qLegendShape === "dashed" ? "5,2" : null;
            }
          });
        }

        dispatch({
          type: "update",
          payload: {
            qData: _qData,
            headerGroup: _orderHeader,
            qLayout: _qLayout,
            selections: _selections,
          },
        });
      } else if (_isMounted.current) {
        dispatch({
          type: "update",
          payload: {
            qData: _qData,
            headerGroup: _orderHeader,
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

  const applyPatches = useCallback(
    (patches) => qObject.current.applyPatches(patches),
    []
  );


  // takes column data and sorted the table, applies reverse sort
  const handleSortChange = useCallback(
    async (column) => {
      setLoading(true);
      // If no sort is set, we need to set a default sort order
      if (column.qSortIndicator === "N") {
        if (column.qPath.includes("qDimensions")) {
          await applyPatches([
            {
              qOp: "add",
              qPath: `${column.qPath}/qDef/qSortCriterias`,
              qValue: JSON.stringify([{ qSortByLoadOrder: 1 }]),
            },
          ]);
        }
        if (column.qPath.includes("qMeasures")) {
          await applyPatches([
            {
              qOp: "add",
              qPath: `${column.qPath}/qSortBy`,
              qValue: JSON.stringify({ qSortByLoadOrder: 1 }),
            },
          ]);
        }
      }
      await applyPatches([
        {
          qOp: "replace",
          qPath: `${column.qPath}/qDef/qReverseSort`,
          qValue: JSON.stringify(
            !column.qReverseSort
          ) /* JSON.stringify((newSorted[0].desc !== column.defaultSortDesc) !== !!column.qReverseSort) */,
        },
        {
          qOp: "replace",
          qPath: "/qHyperCubeDef/qInterColumnSortOrder",
          qValue: JSON.stringify(
            [
              ...qLayout.qHyperCube.qEffectiveInterColumnSortOrder,
            ].sort((a, b) =>
              a === column.qInterColumnIndex
                ? -1
                : b === column.qInterColumnIndex
                ? 1
                : 0
            )
          ),
        },
      ]);
      setPage(0);
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
    headerGroup,
    handleSortChange,
    qRData,
    changePage,
    selections,
    select,
    applyPatches,
  };
};

export default useTable;
