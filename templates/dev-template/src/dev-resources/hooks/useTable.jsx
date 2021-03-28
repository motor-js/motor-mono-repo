import { useCallback, useRef, useReducer, useEffect, useContext } from "react";
import { deepMerge } from "../utils/object";
import { EngineContext } from "../contexts/EngineProvider";
import createDef from "../utils/createHCDef";
import {
  getMeasureNames,
  getDimensionNames,
  getHeader,
  getOrder,
  hyperCubeTransform,
} from "../utils/hyperCubeUtilities";

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
    payload: { title, qData, mData, qRData, headerGroup, qLayout, selections },
    type,
  } = action;

  switch (type) {
    case "update":
      return {
        ...state,
        title,
        qData,
        mData,
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
  qTitle: null,
  qPage: {
    qTop: 0,
    qLeft: 0,
    qWidth: 10,
    qHeight: 300,
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
    qTitle,
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
    qData,
    mData,
    qRData,
    headerGroup,
    qLayout,
    selections,
  } = state;

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
    const qProp = createDef(
      cols,
      qTitle,
      qHyperCubeDef,
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
      qOtherTotalSpec,
      totalSpec
    );

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
    qOtherTotalSpec,
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

  const getTitle = useCallback(async (layout) => {
    return layout.qHyperCube.qTitle;
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
    let useNumonFirstDim;
    const mData = hyperCubeTransform(data, layout.qHyperCube, useNumonFirstDim);

    return mData;
  }, []);

  const update = useCallback(
    async (measureInfo) => {
      const _qLayout = await getLayout();
      const _qTitle = await getTitle(_qLayout);
      const _qData = await getData();
      const _mData = await structureData(_qLayout, _qData);
      const _headerGroup = await getHeader(_qLayout, cols);
      const _orderHeader = await getOrder(_headerGroup, qColumnOrder);
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
            title: _qTitle,
            qData: _qData,
            mData: _mData,
            headerGroup: _orderHeader,
            qLayout: _qLayout,
            selections: _selections,
          },
        });
      } else if (_isMounted.current) {
        dispatch({
          type: "update",
          payload: {
            title: _qTitle,
            qData: _qData,
            mData: _mData,
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
      // setPage(0);
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
    title,
    qLayout,
    qData,
    mData,
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
