import { useContext, useCallback, useEffect, useRef, useState } from "react";
import { EngineContext } from "../contexts/EngineProvider";
import { deepMerge } from "../utils/object";
import createDef from "../utils/createVarDef";

// const initialProps = {
//   qPage: {
//     qTop: 0,
//     qLeft: 0,
//     qWidth: 1,
//     qHeight: 1000,
//   },
//   cols: null,
//   qHyperCubeDef: null,
//   config: null,
// };

const useVariable = (props) => {
  // const { qPage: qPageProp, cols, qHyperCubeDef, config } = deepMerge(
  //   initialProps,
  //   props
  // );
  const { qId, qName } = props;
  // console.log(qId);

  const { engine, engineError } = useContext(EngineContext) || {};
  const [qLayout, setQLayout] = useState(null);
  const [error, setError] = useState(null);

  const qObject = useRef(null);

  const generateQProp = useCallback(() => {
    // const qProp = createDef(cols, qHyperCubeDef);
    const qProp = {
      qInfo: {
        qId: "VB05",
        qType: "Variable",
      },
      qMetaDef: {},
      // qName: "value",
      qName: "Variable98",
      // qComment: "value",
      qComment: "My first variable",
      // qNumberPresentation: {
      //   qType: "value",
      //   qnDec: 1,
      //   qUseThou: 1,
      //   qFmt: "value",
      //   qDec: "value",
      //   qThou: "value",
      // },
      qIncludeInBookmark: true,
      // qDefinition: "value",
      qDefinition: "=Count(Country)",
    };

    return qProp;
    // }, [qHyperCubeDef]);
  }, []);

  const getVaribale = async (qId, qName) => {
    const qDoc = await engine;

    // const test = await qDoc.createSessionObject({
    //   qInfo: {
    //     qId: "VL01",
    //     qType: "VariableList",
    //   },
    //   qVariableListDef: {
    //     qType: "variable",
    //   },
    // });
    // console.log(await test.getLayout());

    let qObject;
    if (qId)
      qObject = await qDoc.getVariableById({
        qId,
      });
    if (qName) {
      qObject = await qDoc.getVariableByName({
        qName,
      });
    }

    return qObject;
  };

  // const getValueKey = useCallback(async (layout) => {
  //   if (layout.qHyperCube.qMeasureInfo.length === 0) return null;
  //   return layout.qHyperCube.qMeasureInfo[0].qFallbackTitle;
  // }, []);

  // const select = async (value, field) => {
  //   const qDoc = await engine;
  //   const qField = await qDoc.getField(field);
  //   qField.select(value);
  // };

  const getLayout = useCallback(() => qObject.current.getLayout(), []);
  const setProperties = useCallback(() => qObject.current.setProperties(), []);

  const update = useCallback(async (qObj) => {
    const _qLayout = await getLayout();
    // console.log(_qLayout);
    _qLayout.value =
      _qLayout.qNum === "number" ? _qLayout.qNum : _qLayout.qText;
    setQLayout(_qLayout);
  }, []);

  useEffect(() => {
    if (!engine) return;

    (async () => {
      // const qProp = generateQProp();
      // const qDoc = await engine;
      // qObject.current = await qDoc.createSessionVariable(qProp);
      // qObject.current = await qDoc.createSessionVariable(qProp);
      // console.log(qProp);
      // const test = await qDoc.createSessionVariable(qProp);
      // const test = await qDoc.createSessionVariable({
      //   qInfo: {
      //     qId: "VB99",
      //     qType: "Variable",
      //   },
      //   qName: "Variable099",
      //   qComment: "My first variable",
      //   qDefinition: "=Count(Country)",
      // });
      try {
        qObject.current = await getVaribale(qId, qName);

        // console.log(qObject.current);

        qObject.current.on("changed", () => {
          update(qObject.current);
        });
        update(qObject.current);
      } catch (err) {
        if (err.code === -2) {
          setError("Object Not Found");
        } else {
          setError(err);
        }
      }
      // setQLayout(await qObject.current.getLayout());
      // console.log(qObject);
      // qObject.current = await qDoc.createSessionObject(qProp);
    })();
  }, [qId, qName, generateQProp, engine]);

  return {
    qLayout,
    // value: qLayout.qText,
    // select,
    // ...result,
    ...qLayout,
    // qLayout,
    error,
  };
};

export default useVariable;
