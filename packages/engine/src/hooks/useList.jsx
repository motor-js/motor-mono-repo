import { useCallback, useRef, useReducer, useEffect, useContext } from "react";
import { deepMerge } from "../utils/object";
import { EngineContext } from "../contexts/EngineProvider";

const initialState = {
  qDoc: null,
  qObject: null,
  qData: null,
  listData: null,
  selections: null,
};

function reducer(state, action) {
  const {
    payload: { qData, listData, selections, qDoc },
    type,
  } = action;
  switch (type) {
    case "update":
      return {
        ...state,
        qData,
        listData,
        selections,
      };
    case "init":
      return {
        ...state,
        qDoc,
      };
    default:
      throw new Error();
  }
}

const initialProps = {
  autoSortByState: 1,
  qSortByAscii: 1,
  qSortByLoadOrder: 1,
  dimension: null,
  label: null,
  qListObjectDef: null,
  qPage: {
    qTop: 0,
    qLeft: 0,
    qWidth: 1,
    qHeight: 10000,
  },
};

const useList = (props) => {
  const {
    qPage: qPageProp,
    dimension,
    qListObjectDef,
    qSortByAscii,
    qSortByLoadOrder,
    autoSortByState,
  } = deepMerge(initialProps, props);

  const { engine, engineError } = useContext(EngineContext) || {};

  const _isMounted = useRef(true);
  const [state, dispatch] = useReducer(reducer, initialState);

  const { listData, selections } = state;

  const qObject = useRef(null);
  const qPage = useRef(qPageProp);

  /** Generate the Definition file */
  const generateQProp = useCallback(
    (currentColumn = 0) => {
      const qProp = { qInfo: { qType: "visualization" } };
      if (qListObjectDef) {
        qProp.qListObjectDef = qListObjectDef;
      } else {
        const qDimensions = dimension
          .filter(
            (col) =>
              (typeof col === "string" && !col.startsWith("=")) ||
              (typeof col === "object" && col.qDef && col.qDef.qFieldDefs) ||
              (typeof col === "object" &&
                col.qLibraryId &&
                col.qType &&
                col.qType === "dimension")
          )
          .map((col) => {
            if (typeof col === "string") {
              return {
                qDef: {
                  qFieldDefs: [col],
                  qSortCriterias: [{ qSortByLoadOrder, qSortByAscii }],
                },
              };
            }

            return col;
          });
        const qLibraryId = {
          qLibraryId:
            typeof dimension[0] === "object" && dimension[0].qLibraryId
              ? dimension[0].qLibraryId
              : "",
        };
        const qDef = qDimensions[currentColumn];
        qProp.qListObjectDef = {
          ...qLibraryId,
          ...qDef,
          qShowAlternatives: true,
          qAutoSortByState: { qDisplayNumberOfRows: autoSortByState },
        };
      }

      return qProp;
    },
    [autoSortByState, dimension, qListObjectDef, qSortByAscii, qSortByLoadOrder]
  );

  // Edit to extract all data
  const getData = useCallback(async () => {
    const qDataPages = await qObject.current.getListObjectData(
      "/qListObjectDef",
      [qPage.current]
    );
    return qDataPages[0];
  }, []);

  const structureData = useCallback(async () => {
    if (!listData) {
      let data = [];
      const qDataPages = await qObject.current.getListObjectData(
        "/qListObjectDef",
        [qPage.current]
      );

      if (!qDataPages[0]) return null;

      qDataPages[0].qMatrix.map((d, i) => {
        data.push({
          key: d[0].qElemNumber,
          text: d[0].qText,
          number: d[0].qNumber,
          state: d[0].qState,
        });
      });
      return data;
    }
  }, [listData]);

  const getSelections = (data) => {
    const sel = data.qMatrix.filter((row) => row[0].qState === "S");
    const arr = [];
    sel.map((d) => {
      const t = d[0].qElemNumber;
      arr.push(t);
    });
    return arr;

    //return data.qMatrix.filter(row => row[0].qState === 'S')
  };

  const update = useCallback(async () => {
    const _qData = await getData();
    const _listData = await structureData();
    if (_qData && _isMounted.current) {
      const _selections = await getSelections(_qData);
      dispatch({
        type: "update",
        payload: {
          listData: _listData,
          selections: _selections,
        },
      });
    } else if (_isMounted.current) {
      dispatch({
        type: "update",
        payload: {
          listData: _listData,
        },
      });
    }
  }, [getData, structureData]);

  const changePage = useCallback(
    (newPage) => {
      qPage.current = { ...qPage.current, ...newPage };

      update();
    },
    [update]
  );

  const beginSelections = async () => {
    // Make sure we close all other open selections. We usually get that when we have morethan one dropDown in the same page and while one is open, we click on the second one
    await state.qDoc.abortModal(true);
    await qObject.current.beginSelections(["/qListObjectDef"]);
  };

  const endSelections = async (qAccept) => {
    // await state.qEngine.abortModal(true)
    await qObject.current.endSelections(qAccept);
  };

  const select = useCallback(
    (qElemNumber, toggle = true, ignoreLock = false) =>
      qObject.current.selectListObjectValues(
        "/qListObjectDef",
        qElemNumber,
        toggle,
        ignoreLock
      ),
    []
  );

  const searchListObjectFor = useCallback(
    (string) => qObject.current.searchListObjectFor("/qListObjectDef", string),
    []
  );

  const acceptListObjectSearch = useCallback(
    (ignoreLock = false) =>
      qObject.current.acceptListObjectSearch(
        "/qListObjectDef",
        true,
        ignoreLock
      ),
    []
  );

  const applyPatches = useCallback(
    (patches) => qObject.current.applyPatches(patches),
    []
  );

  const clearSelections = useCallback(
    () => qObject.current.clearSelections("/qListObjectDef"),
    []
  );

  useEffect(() => {
    if (!engine || qObject.current) return;
    (async () => {
      const qProp = generateQProp();
      const qDoc = await engine;
      qObject.current = await qDoc.createSessionObject(qProp);
      // ToDo: make sure init is not called on every render - convert qDoc to qEngine
      if (_isMounted.current) dispatch({ type: "init", payload: { qDoc } });
      qObject.current.on("changed", () => {
        update();
      });
      update();
    })();
  }, [generateQProp, engine, update]);

  useEffect(() => () => (_isMounted.current = false), []);

  return {
    listData,
    changePage,
    select,
    beginSelections,
    endSelections,
    searchListObjectFor,
    acceptListObjectSearch,
    applyPatches,
    selections,
    clearSelections,
  };
};

export default useList;
