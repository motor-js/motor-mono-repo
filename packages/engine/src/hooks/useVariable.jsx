import { useContext, useCallback, useEffect, useState } from "react";
import { EngineContext } from "../contexts/EngineProvider";

let qDoc = null;

const useVariable = () => {
  const { engine, engineError } = useContext(EngineContext) || {};
  const [variables, setVariables] = useState();

  //   const getVariablebyID = useCallback(
  //     (engine) => {
  //  const qVariable = await qDoc.getVariableById({
  //       qId: "VB02",
  //     });

  //       return qVariable;
  //     },
  //     []
  //   );

  // const getVariablebyID = async (id) => {
  //   const qDoc = await engine;
  //   if (!qDoc) return;
  //   const qVariable = await qDoc.getVariableById({
  //     qId: "VB02",
  //   });
  //   // console.log("qVariable", qVariable);

  //   return await qVariable;
  // };

  const asynchronousFunction = async (qId) => {
    if (qDoc) {
      const qVariable = await qDoc.getVariableById({
        qId,
      });
      const variableLayout = await qVariable.getLayout();
      setVariables(variableLayout);
    }
  };

  const getVariablebyID = useCallback(
    (qId) => {
      if (variables) return variables;
      asynchronousFunction(qId);
    },
    [variables]
  );

  // const getVariablebyID = () =>
  //   (async () => {
  //     if (variables)return variables;
  //     asynchronousFunction();
  //      const result = await asynchronousFunction();
  //     return result;
  //   })();
  // const getVariablebyID = (qId) => {
  //   // return getByID(qId);
  //   (async () => {
  //     console.log(await getByID(qId));
  //   })();
  //   // async () => {
  //   //   const qDoc = await engine;
  //   //   if (!qDoc) return;
  //   //   const qVariable = await qDoc.getVariableById({
  //   //     qId: "VB02",
  //   //   });
  //   //   console.log("qVariable", qVariable);

  //   //   return await qVariable.getLayout();
  //   // };
  //   // return qVariableInfo;

  //   // console.log(test);
  // };

  // const select = async (value, field) => {
  //   const qDoc = await engine;
  //   const qField = await qDoc.getField(field);
  //   qField.select(value);
  // };

  useEffect(() => {
    // eslint-disable-next-line no-empty
    if (engine === undefined) {
    } else {
      (async () => {
        // const qProp = {
        //   qInfo: { qType: "SelectionObject" },
        //   qSelectionObjectDef: {},
        // };
        qDoc = await engine;
        // qObject = await qDoc.createSessionObject(qProp);
        // qObject.on("changed", () => {
        //   update();
        // });
        // update();
      })();
    }
  }, [engine]);

  // useEffect(
  //   () =>
  //     (async () => {
  //       if (engine === undefined) {
  //       } else {
  //         const qDoc = await engine;

  //         // const variables = await qDoc.createVariableEx({
  //         //   qInfo: {
  //         //     qId: "VB02",
  //         //     qType: "Variable",
  //         //   },
  //         //   qName: "Variable02",
  //         //   qComment: "My first variable",
  //         //   qDefinition: "=Count(Country)",
  //         // });

  //         const variable = await qDoc.getVariableById({
  //           qId: "VB02",
  //         });

  //         const test = await variable.getLayout();
  //         console.log(test);

  //         // const variables = await qDoc.createVariableEx({
  //         //   qProp: {
  //         //     qInfo: {
  //         //       qId: "value",
  //         //       qType: "value",
  //         //     },
  //         //     qMetaDef: {},
  //         //     qName: "value",
  //         //     qComment: "value",
  //         //     qNumberPresentation: {
  //         //       qType: "value",
  //         //       qnDec: 1,
  //         //       qUseThou: 1,
  //         //       qFmt: "value",
  //         //       qDec: "value",
  //         //       qThou: "value",
  //         //     },
  //         //     qIncludeInBookmark: true,
  //         //     qDefinition: "value",
  //         //   },
  //         // });

  //         // const variables = await qDoc.createSessionVariable({
  //         //   qProp: {
  //         //     qInfo: {
  //         //       qId: "value",
  //         //       qType: "value",
  //         //     },
  //         //     qMetaDef: {},
  //         //     qName: "value",
  //         //     qComment: "value",
  //         //     qNumberPresentation: {
  //         //       qType: "value",
  //         //       qnDec: 1,
  //         //       qUseThou: 1,
  //         //       qFmt: "value",
  //         //       qDec: "value",
  //         //       qThou: "value",
  //         //     },
  //         //     qIncludeInBookmark: true,
  //         //     qDefinition: "value",
  //         //   },
  //         // });

  //         // const variables = qDoc.createSessionVariable({
  //         //   qName: "myvar",
  //         //   qDefinition: "Month",
  //         // });

  //         console.log(variables);
  //       }
  //     })(),
  //   [engine]
  // );

  return {
    // ...variables,
    getVariablebyID,
  };
};

export default useVariable;
