import { useContext, useState, useEffect } from "react";
import { EngineContext } from "../contexts/EngineProvider";

const useVariable = () => {
  const { engine } = useContext(EngineContext) || {};
  const [variables, setVariables] = useState();

  useEffect(
    () =>
      (async () => {
        if (engine === undefined) {
        } else {
          const qDoc = await engine;

          const variables = await qDoc.createVariableEx({
            qInfo: {
              qId: "VB02",
              qType: "Variable",
            },
            qName: "Variable02",
            qComment: "My first variable",
            qDefinition: "=Count(Country)",
          });

          const variable = await qDoc.getVariableById({
            qId: "VB02",
          });

          const test = await variable.getLayout();
          console.log(test);

          // const variables = await qDoc.createVariableEx({
          //   qProp: {
          //     qInfo: {
          //       qId: "value",
          //       qType: "value",
          //     },
          //     qMetaDef: {},
          //     qName: "value",
          //     qComment: "value",
          //     qNumberPresentation: {
          //       qType: "value",
          //       qnDec: 1,
          //       qUseThou: 1,
          //       qFmt: "value",
          //       qDec: "value",
          //       qThou: "value",
          //     },
          //     qIncludeInBookmark: true,
          //     qDefinition: "value",
          //   },
          // });
          // const variables = await qDoc.createSessionVariable({
          //   qProp: {
          //     qInfo: {
          //       qId: "value",
          //       qType: "value",
          //     },
          //     qMetaDef: {},
          //     qName: "value",
          //     qComment: "value",
          //     qNumberPresentation: {
          //       qType: "value",
          //       qnDec: 1,
          //       qUseThou: 1,
          //       qFmt: "value",
          //       qDec: "value",
          //       qThou: "value",
          //     },
          //     qIncludeInBookmark: true,
          //     qDefinition: "value",
          //   },
          // });

          // const variables = qDoc.createSessionVariable({
          //   qName: "myvar",
          //   qDefinition: "Month",
          // });

          console.log(variables);
        }
      })(),
    [engine]
  );

  return {
    ...variables,
  };
};

export default useVariable;
