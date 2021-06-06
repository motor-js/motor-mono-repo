import { useContext, useCallback, useEffect, useRef, useState } from "react";
import { EngineContext } from "../contexts/EngineProvider";
import { deepMerge } from "../utils/object";

const initialProps = {
  qId: null,
  qName: null,
  qProp: null,
};

const useVariable = (props) => {
  const { qId, qName, qProp } = deepMerge(initialProps, props);

  const { engine, engineError } = useContext(EngineContext) || {};
  const [qLayout, setQLayout] = useState(null);
  const [error, setError] = useState(null);

  const qObject = useRef(null);

  const generateQProp = (qPropProps) => {
    const {
      qId,
      qName,
      qComment,
      qNumberPresentation,
      qIncludeInBookmark = false,
      qDefinition,
    } = qPropProps;

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

  const getVaribale = async (qId, qName, qProp) => {
    const qDoc = await engine;

    let qObject;

    if (!qId && !qName && !qProp) {
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
    if (qId)
      qObject = await qDoc.getVariableById({
        qId,
      });
    if (qName) {
      qObject = await qDoc.getVariableByName({
        qName,
      });
    }
    if (qProp) {
      try {
        qObject = await getVaribale(null, qProp.qName);
      } catch (err) {
        const id = qObject.id;
        if (!id) {
          qObject = await qDoc.createSessionVariable(generateQProp(qProp));
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
  const setProperties = useCallback(() => qObject.current.setProperties(), []);

  const update = useCallback(async (qObj) => {
    const _qLayout = await getLayout();
    _qLayout.value =
      _qLayout.qNum === "number" ? _qLayout.qNum : _qLayout.qText;
    setQLayout(_qLayout);
  }, []);

  useEffect(() => {
    if (!engine) return;

    (async () => {
      const qDoc = await engine;

      try {
        qObject.current = await getVaribale(qId, qName, qProp);

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
    error,
  };
};

export default useVariable;
