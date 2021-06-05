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
              qId: "VB01",
              qType: "Variable",
            },
            qName: "Variable01",
            qComment: "My first variable",
            qDefinition: "=Count(Country)",
          });

          // const variables = await qDoc.getVariableById({
          //   qId: "VB01",
          // });

          const test = await variables.getLayout();
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
    variables,
  };
};

export default useVariable;
