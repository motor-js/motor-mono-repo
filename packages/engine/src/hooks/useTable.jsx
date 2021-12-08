import {
  useState,
  useCallback,
  useRef,
  useReducer,
  useEffect,
  useContext,
} from "react";
import { deepMerge } from "../utils/object";
import { EngineContext } from "../contexts/EngineProvider";
import { AppContext } from "../contexts/AppContext";
import createDef from "../utils/createHCDef";
import {
  getHeader,
  hyperCubeTransform,
  hyperCubeChartTransform,
  orderCols,
  validData,
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
    payload: {
      title,
      qData,
      dataSet,
      qRData,
      headerGroup,
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
        qData,
        dataSet,
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
  config: null,
  cols: null,
  qHyperCubeDef: null,
  qTitle: null,
  qPage: {
    qTop: 0,
    qLeft: 0,
    qWidth: 10,
    qHeight: 300,
  },
  sortCriteria: {
    qInterColumnSortOrder: [],
    qSortByAscii: 1,
    qSortByLoadOrder: 1,
    qExpression: null,
    qSortByNumeric: -1,
    qSortByExpression: 0,
  },
  qSuppressZero: false,
  qSuppressMissing: true,
  getQRData: false,
  qColumnOrder: [],
  qCalcCondition: undefined,
  qOtherTotalSpec: "",
};

const useTable = (props) => {
  const {
    config,
    cols,
    qTitle,
    qHyperCubeDef,
    qPage: qPageProp,
    sortCriteria,
    qSuppressZero,
    qSuppressMissing,
    qColumnOrder,
    qCalcCondition,
    getQRData,
    qOtherTotalSpec,
  } = deepMerge(initialProps, props);

  const _isMounted = useRef(true);
  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    qInterColumnSortOrder,
    qSortByAscii,
    qSortByLoadOrder,
    qExpression,
    qSortByNumeric,
    qSortByExpression,
  } = sortCriteria;

  const {
    title,
    qData,
    dataSet,
    qRData,
    headerGroup,
    qLayout,
    selections,
  } = state;

  // filter cols to just return the active cols
  const [newCols, setNewCols] = useState(cols.filter((col) => col.columnActive === undefined || col.columnActive))
  const [newColsUnfiltered, setNewColsUnfiltered] = useState(cols)

  const { engine } = useContext( AppContext._currentValue !== undefined ? AppContext : EngineContext) || {};

  const qObject = useRef(null);
  const qPage = useRef(qPageProp);

  // error trapping
  const [error, setError] = useState();

  //======================
  // PAGING LOGIC
  //qPage State (so we can dynamically change the page height and trigger new data)
  const [newPage, setNewPage] = useState(qPage)
  // page size
  const [pageSize, setPageSize] = useState(qPage.current.qHeight);

  // current page
  const [page, _setPage] = useState(0);

  const setPage = useCallback(
    (_page) => {
      _setPage(_page);
      changePage({ qTop: _page * pageSize });
    },
    [changePage, pageSize]
  );
  if (typeof window !== "undefined") { window.setPage = setPage };

  // calculated number of pages
  const [pages, _setPages] = useState(0);
  const setPages = useCallback(
    (_pages) => {
      if (page >= _pages) {
        setPage(0);
      }
      _setPages(_pages);
    },
    [page, setPage]
  );

  //handle page change
  const handlePageChange = useCallback(
    (pageIndex) => {
      console.log(pageIndex)
      setPage(pageIndex);
    },
    [setPage]
  );

  // page increment
  const incrementPage = () => {
    const nextPage = page + 1;
    handlePageChange(nextPage);
  };

  // page decrement
  const decrementPage = () => {
    if (page == 0) {
      handlePageChange(pages - 1);
    } else {
      const prevPage = page - 1;
      handlePageChange(prevPage);
    }
  };

  const changePageSize = useCallback((size) => {
    const newObj = { 'current': { ...newPage.current, qHeight: size } }
    setNewPage(newObj)
    setPageSize(size)
  },[])

  // Find the total size of the Hypercube
  useEffect(() => {
    if (!qLayout || !qData) return;
    setPages(Math.ceil(qLayout.qHyperCube.qSize.qcy / pageSize));
  }, [qLayout, qData, pageSize, setPage, setPages]);

  //======================

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
      newCols,
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
    newCols,
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

  const getData = useCallback(async (newPage) => {
    try {
      const qDataPages = await qObject.current.getHyperCubeData(
        "/qHyperCubeDef",
        [newPage.current]
      );
      return qDataPages[0];
    } catch (error) {
      setError(error); // from creation or business logic
    }
  }, [newPage]);

  const getTitle = useCallback(async (layout) => {
    return layout.qHyperCube.qTitle;
  }, []);

  const getReducedData = useCallback(
    () => async () => {
      const { qWidth } = newPage.current;
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

  const structureData = useCallback(async (layout, data, newCols) => {
    // let useNumonFirstDim;
    const dataSet = hyperCubeTransform(
      data,
      layout.qHyperCube,
      // useNumonFirstDim,
      newCols
    );

    return dataSet;
  }, []);

  const update = useCallback(async (newCols) => {
    const _qLayout = await getLayout();
    const _qTitle = await getTitle(_qLayout);
    const _qValid = await validData(_qLayout, engine);
    const _qData = await getData(newPage);
    
    // Order colunns for dataKey
    const _orderedCols = await orderCols(newCols);
    const _dataSet = _qData && (await structureData(_qLayout, _qData, _orderedCols));
    const _headerGroup = _qData && (await getHeader(_qLayout, _orderedCols));
    if (_qData && _isMounted.current) {
      const _selections = _qData.qMatrix.filter((row) => row[0].qState === "S");
      dispatch({
        type: "update",
        payload: {
          title: _qTitle,
          qData: _qData,
          dataSet: _dataSet,
          headerGroup: _headerGroup,
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
          dataSet: _dataSet,
          headerGroup: _headerGroup,
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
  }, [getData, getLayout, getQRData, getReducedData, newPage]);

  const changePage = useCallback(
    (newP) => {
      newPage.current = {
        ...newPage.current,
        ...newP,
      };
      update(newCols);
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
    (dimNo, qElemNumber, toggle = false) =>
      qObject.current.selectHyperCubeValues(
        "/qHyperCubeDef",
        dimNo,
        qElemNumber,
        toggle
      ),
    []
  );

  const applyPatches = useCallback(
    (patches) => qObject.current.applyPatches(patches),
    []
  );

  const updateCols = (cols) => {
    setNewCols(cols.filter((col) => col.columnActive === undefined || col.columnActive))
    setNewColsUnfiltered(cols)
  }

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
      setPage(0);
    },
    [applyPatches, qLayout]
  );

  useEffect(() => {
    if (!engine) return;
    //if (qObject.current) return;
    (async () => {
      const qProp = generateQProp();
      const qDoc = await engine;
      qObject.current = await qDoc.createSessionObject(qProp);
      qObject.current.on("changed", () => {
        update(newCols);
      });
      update(newCols);
    })();
  }, [generateQProp, engine, update]);

  useEffect(() => () => (_isMounted.current = false), []);

  const exportData = (filename, exportType) => {
    const { host, secure, port, prefix } = config;
    
    const id = qLayout.qInfo.qId;
    const filenameExport = filename || "Data Export";
    const _exportType = exportType || "P";
    const _secure = secure ? "https://" : "http://";
    const _port = port ? `:${port}` : "";
    const server = _secure + host //+ _port + prefix;
    engine.getObject(id).then((model) => {
      //export type: P for Possible, A for All
      model.exportData("CSV_C", "/qHyperCubeDef", filenameExport, _exportType).then((url) => {
         window.open(server + url.qUrl, '_blank')
      });
    });
  };

  return {
    beginSelections,
    endSelections,
    title,
    qLayout,
    qData,
    dataSet,
    headerGroup,
    handleSortChange,
    qRData,
    changePage,
    setPageSize,
    changePageSize,
    selections,
    select,
    applyPatches,
    incrementPage,
    decrementPage,
    handlePageChange,
    page, //current page
    pageSize, //page size
    pages, //number of pages
    updateCols,
    newCols,
    newColsUnfiltered,
    exportData,
    // table props
    dataGridProps: {
      page,
      pages,
      pageSize,
      incrementPage,
      decrementPage,
      handlePageChange,
      handleSortChange,
      updateCols,
      newCols,
      newColsUnfiltered,
      select,
      title,
      beginSelections,
      endSelections,
      applyPatches,
      changePage,
      selections,
    }
  };
};

export default useTable;
