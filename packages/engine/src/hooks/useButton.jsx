import { useContext, useCallback, useEffect, useRef, useState } from "react";
import { EngineContext } from "../contexts/EngineProvider";
import { AppContext } from "../contexts/AppContext";
import { deepMerge } from "../utils/object";
import createDef from "../utils/createHCDef";

const initialProps = {
  qPage: {
    qTop: 0,
    qLeft: 0,
    qWidth: 1,
    qHeight: 1000,
  },
  cols: null,
  qHyperCubeDef: null,
  config: null,
};

const useButton = (props) => {
  const { qPage: qPageProp, cols, qHyperCubeDef, config } = deepMerge(
    initialProps,
    props
  );

  const { engine } = useContext( AppContext._currentValue !== undefined ? AppContext : EngineContext) || {};

  const [qLayout, setQLayout] = useState(null);

  const _isMounted = useRef(true);
  const qObject = useRef(null);
  //const qPage = useRef(qPageProp);

  const generateQProp = useCallback(() => {
    const qProp = createDef(cols, qHyperCubeDef);

    return qProp;
  }, [cols, qHyperCubeDef]);

  useEffect(() => {
    if (!engine || !cols) return;
    if (qObject.current) return;
    (async () => {
      const qProp = generateQProp();
      const qDoc = await engine;
      qObject.current = await qDoc.createSessionObject(qProp);
      setQLayout(await qObject.current.getLayout());
    })();
  }, [generateQProp, engine]);

  useEffect(() => () => (_isMounted.current = false), []);

  const clearSelections = () => {
    engine && engine.clearAll();
  };

  const previousSelection = () => {
    engine && engine.back();
  };

  const nextSelection = () => {
    engine && engine.forward();
  };

  const select = async (value, field) => {
    const qDoc = await engine;
    const qField = await qDoc.getField(field)
    qField.select(value)
  }

  const selectValues = async (values, field, toggle=false, numeric=false) => {
    const key = numeric ? 'qNumber' : 'qText'
    const sel = await values.map(d => ({ [key]:d, qIsNumeric: numeric }))
    const qDoc = await engine;
    const qField = await qDoc.getField(field)
    qField.selectValues(sel,toggle)
  }

  const doReload = async (qMode, qPartial ) => {
    const qDoc = await engine;
    qDoc.doReload(qMode, qPartial, false)
  }

  const lockField = async (field) => {
    const qDoc = await engine;
    const qField = await qDoc.getField(field)
    qField.lock()
  }

  const unlockField = async (field) => {
    const qDoc = await engine;
    const qField = await qDoc.getField(field)
    qField.unlock()
  }

  const exportData = (filename) => {
    const { host, secure, port, prefix } = config;
    
    const id = qLayout.qInfo.qId;
    const filenameExport = filename || "Data Export";
    const _secure = secure ? "https://" : "http://";
    const _port = port ? `:${port}` : "";
    const server = _secure + host + _port + prefix;
    engine.getObject(id).then((model) => {
      model.exportData("CSV_C", "/qHyperCubeDef", "Test", "P").then((url) => {
         console.log(url.qUrl, url.qWarnings);
        // window.open(server + url.qUrl, '_blank')
      });
    });
  };

  return {
    clearSelections,
    previousSelection,
    nextSelection,
    qLayout,
    exportData,
    select,
    selectValues,
    doReload,
    lockField,
    unlockField,
  };
};

export default useButton;
