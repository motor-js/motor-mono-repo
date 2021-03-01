import { useContext, useCallback, useEffect, useRef, useState } from "react";
import { EngineContext } from "@motor-js/engine";
import { deepMerge } from "../utils/object";
import createDef from "../utils/createHCDef"
import { removeModuleScopePlugin } from "customize-cra";
import { UnderlineOutlined, UnorderedListOutlined } from "@ant-design/icons";

const initialProps = {
  qPage: {
    qTop: 0,
    qLeft: 0,
    qWidth: 1,
    qHeight: 10000,
  },
  cols: null,
  qHyperCubeDef: null,
  config: null
};

const useButton = (props) => {

  const {
    qPage: qPageProp,
    cols,
    qHyperCubeDef,
    config,
  } = deepMerge(initialProps, props);


  const { engine, engineError } = useContext(EngineContext) || {};
  const [qLayout, setQLayout] = useState(null)
  
  const _isMounted = useRef(true);
  const qObject = useRef(null);
  //const qPage = useRef(qPageProp);
  
  const generateQProp = useCallback(() => {
    const qProp = createDef(cols, qHyperCubeDef)

    return qProp
  }, [cols,qHyperCubeDef]);


  useEffect(() => {
    if (!engine || !cols) return; 
    if (qObject.current) return;
    (async () => {
        const qProp = generateQProp();
        const qDoc = await engine;
        qObject.current = await qDoc.createSessionObject(qProp);
        setQLayout(await qObject.current.getLayout())
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
    engine && engine.forward()
  };

  /*
  const exportData = (
    filename,
    ) => {  
    const { host, secure, port, prefix } = config

    const id = qLayout.qInfo.qId
    const filenameExport = filename || 'Data Export'
    const _secure = secure ? 'https://' : 'http://'
    const _port = port ? `:${port}` : ''
    const server = _secure + host + _port + prefix
    console.log(server)
    engine.getObject(id).then(model => {
      console.log(model)
    //  model.exportData('CSV_C', '/qHyperCubeDef',filenameExport, 'P').then(url => {
   //     window.open(server + url.qUrl, '_blank')
  //    })
    })
  }
  */

  return {
    clearSelections,
    previousSelection,
    nextSelection,
    qLayout,
   // exportData
  };
};

export default useButton;
