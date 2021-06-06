import { useContext, useCallback, useEffect, useRef, useState } from "react";
import { EngineContext } from "../contexts/EngineProvider";
import { deepMerge } from "../utils/object";

const initialProps = {
  qId: null,
  qName: null,
  qComment: undefined,
  qNumberPresentation: undefined,
  qIncludeInBookmark: false,
  qDefinition: null,
};

const useVariable = (props) => {
  const {
    qId,
    qName,
    qComment,
    qNumberPresentation,
    qIncludeInBookmark,
    qDefinition,
  } = deepMerge(initialProps, props);

  const { engine, engineError } = useContext(EngineContext) || {};
  const [qLayout, setQLayout] = useState(null);
  const [qProperties, setQProperties] = useState(null);
  const [error, setError] = useState(null);

  const qObject = useRef(null);

  const generateQProp = (
    qId,
    qName,
    qComment,
    qNumberPresentation,
    qIncludeInBookmark,
    qDefinition
  ) => {
    const qProp = {
      qInfo: {
        qId,
        qType: "Variable",
      },
      qMetaDef: {},
      qName,
      qComment,
      qNumberPresentation,
      qIncludeInBookmark,
      qDefinition,
    };

    return qProp;
  };

  const getVaribale = async (
    qId,
    qName,
    qComment,
    qNumberPresentation,
    qIncludeInBookmark,
    qDefinition
  ) => {
    const qDoc = await engine;

    let qObject;

    if (!qId && !qName && !qDefinition) {
      const qSessionObject = await qDoc.createSessionObject({
        qInfo: {
          qId: "VL01",
          qType: "VariableList",
        },
        qVariableListDef: {
          qType: "variable",
        },
      });
      qObject = await qSessionObject.getLayout();
      setQLayout(qObject);
    }
    if (qId && !qDefinition) {
      qObject = await qDoc.getVariableById({
        qId,
      });
    }
    if (qName && !qDefinition) {
      qObject = await qDoc.getVariableByName({
        qName,
      });
    }
    if (qName && qDefinition) {
      try {
        qObject = await getVaribale(null, qName);
      } catch (err) {
        if (!qObject) {
          qObject = await qDoc.createSessionVariable(
            generateQProp(
              qId,
              qName,
              qComment,
              qNumberPresentation,
              qIncludeInBookmark,
              qDefinition
            )
          );
          setQLayout(qObject);
        }
        if ((error.code = 18001)) {
          setError("Variable already exists");
        } else {
          setError(err);
        }
      }
    }

    return qObject;
  };

  const getLayout = useCallback(() => qObject.current.getLayout(), []);
  const getProperties = useCallback(() => qObject.current.getProperties(), []);
  const setProperties = useCallback(() => qObject.current.setProperties(), []);

  const update = useCallback(async (qObj) => {
    const _qLayout = await getLayout();
    _qLayout.value =
      _qLayout.qNum === "number" ? _qLayout.qNum : _qLayout.qText;
    setQLayout(_qLayout);
    setQProperties(await getProperties());
  }, []);

  useEffect(() => {
    if (!engine) return;

    (async () => {
      const qDoc = await engine;

      try {
        qObject.current = await getVaribale(
          qId,
          qName,
          qComment,
          qNumberPresentation,
          qIncludeInBookmark,
          qDefinition
        );

        qObject.current.on("changed", () => {
          update(qObject.current);
        });
        update(qObject.current);
      } catch (err) {
        if (err.code === -2) {
          setError("Variable Not Found");
        } else {
          setError(err);
        }
      }
    })();
  }, [qId, qName, engine]);

  if (qLayout && qLayout.qVariableList) {
    qLayout.variableList = qLayout.qVariableList.qItems;
  }

  return {
    qLayout,
    ...qLayout,
    qProperties,
    error,
  };
};

export default useVariable;
